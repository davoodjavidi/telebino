import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LIMITS } from "../common/plan-limits.js";
import { BotRuntimeService } from "./bot-runtime.service.js";

interface TelegramGetMeResult {
  ok: boolean;
  result?: { id: number; username: string; first_name: string };
  description?: string;
}

@Injectable()
export class BotsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly runtime: BotRuntimeService,
  ) {}

  list(businessId: string) {
    return this.prisma.bot.findMany({
      where: { businessId },
      orderBy: { createdAt: "desc" },
      select: { id: true, username: true, isActive: true, createdAt: true },
    });
  }

  async create(businessId: string, token: string) {
    const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
    const limit = PLAN_LIMITS[business.planTier].maxBots;
    const currentCount = await this.prisma.bot.count({ where: { businessId } });
    if (currentCount >= limit) {
      throw new BadRequestException(`پلن فعلی شما حداکثر ${limit} ربات را پشتیبانی می‌کند`);
    }

    const me = await this.validateToken(token);

    const existing = await this.prisma.bot.findFirst({ where: { telegramBotId: String(me.id) } });
    if (existing) {
      throw new BadRequestException("این ربات قبلاً در تلبینو ثبت شده است");
    }

    const bot = await this.prisma.bot.create({
      data: { businessId, token, telegramBotId: String(me.id), username: me.username },
    });

    await this.runtime.startBot(bot);
    return { id: bot.id, username: bot.username, isActive: bot.isActive };
  }

  async remove(businessId: string, id: string) {
    const bot = await this.assertOwned(businessId, id);
    this.runtime.stopBot(bot.id);
    await this.prisma.bot.delete({ where: { id } });
    return { deleted: true };
  }

  async toggleActive(businessId: string, id: string, isActive: boolean) {
    const bot = await this.assertOwned(businessId, id);
    const updated = await this.prisma.bot.update({ where: { id }, data: { isActive } });

    if (isActive) {
      await this.runtime.startBot(updated);
    } else {
      this.runtime.stopBot(bot.id);
    }

    return { id: updated.id, isActive: updated.isActive };
  }

  /** Calls Telegram's getMe to confirm the token is real before saving it. */
  private async validateToken(token: string) {
    let res: Response;
    try {
      res = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    } catch {
      throw new BadRequestException("ارتباط با سرورهای تلگرام برقرار نشد — دوباره تلاش کنید");
    }

    const data = (await res.json()) as TelegramGetMeResult;
    if (!data.ok || !data.result) {
      throw new BadRequestException(data.description ?? "توکن ربات نامعتبر است");
    }
    return data.result;
  }

  private async assertOwned(businessId: string, id: string) {
    const bot = await this.prisma.bot.findUnique({ where: { id } });
    if (!bot || bot.businessId !== businessId) throw new NotFoundException("ربات پیدا نشد");
    return bot;
  }
}
