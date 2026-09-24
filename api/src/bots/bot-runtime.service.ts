import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Bot, Context, InlineKeyboardBuilder, ReplyKeyboardBuilder } from "node-telegram-bot-api";
import { fromPath } from "node-telegram-bot-api/node";
import Fuse from "fuse.js";
import { existsSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { PrismaService } from "../prisma/prisma.service.js";
import { CustomersService } from "../customers/customers.service.js";
import { FormsService } from "../forms/forms.service.js";
import { UploadsService } from "../uploads/uploads.service.js";
import {
  LOOKUP_STATUS_CHANGED_EVENT,
  LookupService,
  type LookupStatusChangedPayload,
} from "../lookup/lookup.service.js";
import type { Bot as BotRecord, Product } from "../generated/prisma/client.js";

type SessionState =
  | { mode: "idle" }
  | { mode: "awaiting_lookup"; kind: "ORDER" | "ACCESS" }
  | { mode: "filling_form"; formId: string; stepIndex: number; answers: Record<string, string> };

const TRIAL_MESSAGE_LIMIT = 5;

@Injectable()
export class BotRuntimeService implements OnModuleInit {
  private readonly logger = new Logger(BotRuntimeService.name);
  private readonly instances = new Map<string, { bot: Bot; businessId: string }>();
  private readonly sessions = new Map<string, SessionState>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly customers: CustomersService,
    private readonly forms: FormsService,
    private readonly lookup: LookupService,
    private readonly uploads: UploadsService,
  ) {}

  /** Reconnect every active bot on server boot (so restarts don't drop bots). */
  async onModuleInit() {
    const activeBots = await this.prisma.bot.findMany({ where: { isActive: true } });
    for (const bot of activeBots) {
      await this.startBot(bot).catch((err) =>
        this.logger.error(`Failed to start bot ${bot.username}: ${err}`),
      );
    }
  }

  async startBot(botRecord: BotRecord) {
    this.stopBot(botRecord.id);

    const bot = new Bot(botRecord.token);
    this.instances.set(botRecord.id, { bot, businessId: botRecord.businessId });

    bot.on("message", async (ctx) => {
      await this.handleMessage(botRecord.id, botRecord.businessId, ctx).catch((err) =>
        this.logger.error(`Error handling message for bot ${botRecord.username}: ${err}`),
      );
    });

    bot.on("callback_query", async (ctx) => {
      await this.handleCallbackQuery(botRecord.id, botRecord.businessId, ctx).catch((err) =>
        this.logger.error(`Error handling callback for bot ${botRecord.username}: ${err}`),
      );
    });

    bot.catch((err) => {
      this.logger.warn(`Runtime error for bot ${botRecord.username}: ${err}`);
    });

    // Fire-and-forget: startPolling() resolves only when stop() is called.
    bot.startPolling().catch((err) => {
      this.logger.error(`Polling loop crashed for bot ${botRecord.username}: ${err}`);
    });

    this.logger.log(`Bot @${botRecord.username} is now polling`);
  }

  stopBot(botId: string) {
    const entry = this.instances.get(botId);
    if (!entry) return;
    entry.bot.stop();
    this.instances.delete(botId);
  }

  /** Used by the broadcast module to push a message to one customer. Returns whether it was sent. */
  async broadcastToCustomer(businessId: string, telegramUserId: string, text: string): Promise<boolean> {
    const entry = Array.from(this.instances.values()).find((i) => i.businessId === businessId);
    if (!entry) return false;

    try {
      await entry.bot.api.sendMessage({ chat_id: Number(telegramUserId), text });
      return true;
    } catch {
      return false;
    }
  }

  /** Proactive notification when an order/access status changes in the panel. */
  @OnEvent(LOOKUP_STATUS_CHANGED_EVENT)
  async handleLookupStatusChanged(payload: LookupStatusChangedPayload) {
    const entry = Array.from(this.instances.values()).find(
      (i) => i.businessId === payload.businessId,
    );
    if (!entry || !payload.customerPhone) return;

    const customer = await this.prisma.customer.findFirst({
      where: { businessId: payload.businessId, phone: payload.customerPhone },
    });
    if (!customer) return;

    const label = payload.kind === "ORDER" ? "سفارش" : "دسترسی";
    await this.safeSend(
      entry.bot,
      Number(customer.telegramUserId),
      `🔔 وضعیت ${label} شما (${payload.identifier}) به‌روزرسانی شد:\n${payload.status}`,
    );
  }

  private async handleMessage(botId: string, businessId: string, ctx: Context) {
    const entry = this.instances.get(botId);
    if (!entry) return;
    const { bot } = entry;
    const msg = ctx.message;
    const chatId = ctx.chatId;
    if (!msg || chatId === undefined) return;

    const telegramUserId = String(ctx.from?.id ?? chatId);
    const sessionKey = `${botId}:${chatId}`;

    await this.customers.upsertFromBot(businessId, telegramUserId, ctx.from?.username);

    if (msg.contact?.phone_number) {
      await this.customers.savePhone(businessId, telegramUserId, msg.contact.phone_number);
    }

    const text = msg.text?.trim();
    if (!text && !msg.contact) return;

    const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });

    if (text === "/start") {
      this.sessions.set(sessionKey, { mode: "idle" });
      await this.sendWelcome(bot, chatId, businessId, business.name);
      return;
    }

    const customer = await this.prisma.customer.findUnique({
      where: { businessId_telegramUserId: { businessId, telegramUserId } },
    });
    const overTrial =
      (customer?.messageCount ?? 0) > TRIAL_MESSAGE_LIMIT && !business.isSubscriptionActive;
    if (overTrial) {
      await this.safeSend(
        bot,
        chatId,
        "🙏 به سقف پیام‌های رایگان این ربات رسیده‌اید. لطفاً با مدیریت مجموعه تماس بگیرید تا اشتراک فعال شود.",
      );
      return;
    }

    const session = this.sessions.get(sessionKey) ?? { mode: "idle" };

    if (session.mode === "filling_form") {
      await this.continueForm(bot, chatId, sessionKey, session, businessId, customer?.id ?? null, text, msg);
      return;
    }

    if (session.mode === "awaiting_lookup") {
      await this.resolveLookup(bot, chatId, sessionKey, businessId, session.kind, text ?? "");
      return;
    }

    if (text) {
      const handledAsMenu = await this.handleMenuSelection(bot, chatId, sessionKey, businessId, text);
      if (handledAsMenu) return;

      await this.answerFromFaq(bot, chatId, businessId, text);
    }
  }

  private async sendWelcome(bot: Bot, chatId: number, businessId: string, businessName: string) {
    const keyboard = await this.buildMainMenu(businessId);
    await this.safeSend(
      bot,
      chatId,
      `سلام! به ${businessName} خوش آمدید 👋\nسوال‌تان را بپرسید یا از دکمه‌های زیر استفاده کنید.`,
      keyboard,
    );
  }

  private async buildMainMenu(businessId: string) {
    const [productCount, orderCount, accessCount, forms] = await Promise.all([
      this.prisma.product.count({ where: { businessId } }),
      this.prisma.lookupEntry.count({ where: { businessId, kind: "ORDER" } }),
      this.prisma.lookupEntry.count({ where: { businessId, kind: "ACCESS" } }),
      this.prisma.formDef.findMany({ where: { businessId }, select: { title: true } }),
    ]);

    const builder = new ReplyKeyboardBuilder();
    let hasAnyRow = false;
    const addRow = (label: string) => {
      if (hasAnyRow) builder.row();
      builder.text(label);
      hasAnyRow = true;
    };

    if (productCount > 0) addRow("📦 محصولات");
    if (orderCount > 0) addRow("🔎 پیگیری سفارش");
    if (accessCount > 0) addRow("🔎 بررسی دسترسی");
    for (const form of forms) addRow(`📝 ${form.title}`);

    return builder.build({ resize_keyboard: true });
  }

  private async handleMenuSelection(
    bot: Bot,
    chatId: number,
    sessionKey: string,
    businessId: string,
    text: string,
  ): Promise<boolean> {
    if (text === "📦 محصولات") {
      const PRODUCT_DISPLAY_LIMIT = 8;
      const totalCount = await this.prisma.product.count({ where: { businessId } });
      const products = await this.prisma.product.findMany({
        where: { businessId },
        take: PRODUCT_DISPLAY_LIMIT,
        orderBy: { createdAt: "desc" },
      });

      if (products.length === 0) {
        await this.safeSend(bot, chatId, "فعلاً محصولی ثبت نشده است.");
      } else {
        for (const product of products) {
          await this.sendProductCard(bot, chatId, product);
        }
        const remaining = totalCount - products.length;
        if (remaining > 0) {
          await this.safeSend(bot, chatId, `و ${remaining} محصول دیگر...`);
        }
      }
      return true;
    }

    if (text === "🔎 پیگیری سفارش") {
      this.sessions.set(sessionKey, { mode: "awaiting_lookup", kind: "ORDER" });
      await this.safeSend(bot, chatId, "شماره سفارش‌تان را وارد کنید:");
      return true;
    }

    if (text === "🔎 بررسی دسترسی") {
      this.sessions.set(sessionKey, { mode: "awaiting_lookup", kind: "ACCESS" });
      await this.safeSend(bot, chatId, "شماره دانش‌آموزی یا کد دسترسی‌تان را وارد کنید:");
      return true;
    }

    if (text.startsWith("📝 ")) {
      const title = text.slice(2).trim();
      const form = await this.prisma.formDef.findFirst({
        where: { businessId, title },
        include: { fields: { orderBy: { order: "asc" } } },
      });
      if (form && form.fields.length > 0) {
        this.sessions.set(sessionKey, {
          mode: "filling_form",
          formId: form.id,
          stepIndex: 0,
          answers: {},
        });
        await this.askFormField(bot, chatId, form.fields[0]);
        return true;
      }
    }

    return false;
  }

  private async sendProductCard(
    bot: Bot,
    chatId: number,
    product: Pick<Product, "id" | "name" | "description" | "price" | "imageUrl">,
  ) {
    const priceLine = product.price ? `\n${product.price.toLocaleString("fa-IR")} تومان` : "";
    const descLine = product.description ? `\n${product.description}` : "";
    // Telegram caps photo captions at 1024 chars (vs 4096 for plain text messages).
    const caption = `${product.name}${priceLine}${descLine}`.slice(0, 1024);
    const keyboard = new InlineKeyboardBuilder().text("🛒 ثبت سفارش", `order:${product.id}`).build();

    if (product.imageUrl) {
      try {
        const diskPath = this.uploads.diskPathFromUrl(product.imageUrl);
        if (existsSync(diskPath)) {
          const photo = await fromPath(diskPath);
          await bot.api.sendPhoto({ chat_id: chatId, photo, caption, reply_markup: keyboard });
          return;
        }
      } catch (err) {
        this.logger.warn(`Failed to send product photo for ${product.id}: ${err}`);
      }
    }

    await bot.api.sendMessage({ chat_id: chatId, text: caption, reply_markup: keyboard });
  }

  private async handleCallbackQuery(botId: string, businessId: string, ctx: Context) {
    const entry = this.instances.get(botId);
    const data = ctx.callbackQuery?.data;
    const chatId = ctx.chatId;
    if (!entry || !data || chatId === undefined) return;

    const [action, productId] = data.split(":");
    if (action !== "order" || !productId) {
      await ctx.answerCallbackQuery().catch(() => undefined);
      return;
    }

    const product = await this.prisma.product.findUnique({ where: { id: productId } });
    if (!product || product.businessId !== businessId) {
      await ctx
        .answerCallbackQuery({ text: "این محصول دیگر در دسترس نیست.", show_alert: true })
        .catch(() => undefined);
      return;
    }

    const telegramUserId = String(ctx.from?.id ?? chatId);
    const customer = await this.prisma.customer.findUnique({
      where: { businessId_telegramUserId: { businessId, telegramUserId } },
    });

    // Deliberately NOT gated by the trial-message limit — blocking order
    // placement would block the business owner's revenue, not just our cost.
    const identifier = await this.generateOrderIdentifier(businessId);
    await this.lookup.create(businessId, {
      kind: "ORDER",
      identifier,
      status: "در حال بررسی",
      customerPhone: customer?.phone ?? undefined,
      note: `سفارش محصول «${product.name}»`,
      notifyOnUpdate: true,
      productId: product.id,
    });

    await ctx.answerCallbackQuery({ text: "سفارش شما ثبت شد ✅" }).catch(() => undefined);
    await this.safeSend(
      entry.bot,
      chatId,
      `✅ سفارش شما برای «${product.name}» ثبت شد.\nشماره پیگیری: ${identifier}\nبرای بررسی وضعیت از «🔎 پیگیری سفارش» استفاده کنید.`,
    );
  }

  private async generateOrderIdentifier(businessId: string): Promise<string> {
    for (let attempt = 0; attempt < 5; attempt++) {
      const candidate = `ORD-${randomUUID().slice(0, 6).toUpperCase()}`;
      if (!(await this.lookup.find(businessId, "ORDER", candidate))) return candidate;
    }
    return `ORD-${randomUUID()}`;
  }

  private async resolveLookup(
    bot: Bot,
    chatId: number,
    sessionKey: string,
    businessId: string,
    kind: "ORDER" | "ACCESS",
    identifier: string,
  ) {
    const record = await this.lookup.find(businessId, kind, identifier);
    this.sessions.set(sessionKey, { mode: "idle" });

    if (!record) {
      await this.safeSend(bot, chatId, "چیزی با این شماره پیدا نشد. لطفاً دوباره بررسی کنید.");
      return;
    }

    const label = kind === "ORDER" ? "وضعیت سفارش" : "وضعیت دسترسی";
    await this.safeSend(
      bot,
      chatId,
      `${label} ${identifier}:\n${record.status}${record.note ? `\n\n${record.note}` : ""}`,
    );
  }

  private async askFormField(
    bot: Bot,
    chatId: number,
    field: { label: string; type: string; options: string[] },
  ) {
    const optionsHint = field.options.length > 0 ? `\n(${field.options.join(" / ")})` : "";
    const phoneHint = field.type === "PHONE" ? "\nمی‌توانید شماره‌تان را با دکمه‌ی زیر بفرستید." : "";

    const replyMarkup =
      field.type === "PHONE"
        ? new ReplyKeyboardBuilder()
            .requestContact("📱 ارسال شماره تماس")
            .build({ resize_keyboard: true, one_time_keyboard: true })
        : { remove_keyboard: true as const };

    await bot.api.sendMessage({
      chat_id: chatId,
      text: `${field.label}${optionsHint}${phoneHint}`,
      reply_markup: replyMarkup,
    });
  }

  private async continueForm(
    bot: Bot,
    chatId: number,
    sessionKey: string,
    session: Extract<SessionState, { mode: "filling_form" }>,
    businessId: string,
    customerId: string | null,
    text: string | undefined,
    msg: NonNullable<Context["message"]>,
  ) {
    const form = await this.forms.get(businessId, session.formId).catch(() => null);
    if (!form) {
      this.sessions.set(sessionKey, { mode: "idle" });
      return;
    }

    const currentField = form.fields[session.stepIndex];
    const answer = currentField.type === "PHONE" ? (msg.contact?.phone_number ?? text) : text;

    if (!answer) {
      await this.safeSend(bot, chatId, "لطفاً پاسخ معتبری ارسال کنید.");
      return;
    }

    const answers = { ...session.answers, [currentField.label]: answer };
    const nextIndex = session.stepIndex + 1;

    if (nextIndex >= form.fields.length) {
      await this.forms.saveSubmission(form.id, customerId, answers);
      this.sessions.set(sessionKey, { mode: "idle" });
      await bot.api.sendMessage({
        chat_id: chatId,
        text: "✅ ثبت شد، ممنون از شما!",
        reply_markup: { remove_keyboard: true },
      });
      return;
    }

    this.sessions.set(sessionKey, { ...session, stepIndex: nextIndex, answers });
    await this.askFormField(bot, chatId, form.fields[nextIndex]);
  }

  private async answerFromFaq(bot: Bot, chatId: number, businessId: string, question: string) {
    const entries = await this.prisma.faqEntry.findMany({ where: { businessId } });

    const fuse = new Fuse(entries, {
      keys: ["question", "alternatePhrases"],
      includeScore: true,
      threshold: 0.4,
    });

    const [best] = fuse.search(question);

    if (best) {
      await this.safeSend(bot, chatId, best.item.answer);
      return;
    }

    await this.prisma.unansweredQuestion.create({ data: { businessId, question } });
    await this.safeSend(
      bot,
      chatId,
      "متوجه سوال‌تان نشدم 🙏 لطفاً واضح‌تر بپرسید یا از دکمه‌های منو استفاده کنید.",
    );
  }

  private async safeSend(
    bot: Bot,
    chatId: number,
    text: string,
    replyMarkup?: ReturnType<ReplyKeyboardBuilder["build"]>,
  ) {
    try {
      await bot.api.sendMessage({ chat_id: chatId, text, reply_markup: replyMarkup });
    } catch (err) {
      this.logger.warn(`Failed to send message to ${chatId}: ${err}`);
    }
  }
}
