import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LIMITS } from "../common/plan-limits.js";
import { BotRuntimeService } from "../bots/bot-runtime.service.js";
import type { CreateBroadcastDto } from "./dto/create-broadcast.dto.js";

const MONTHLY_BROADCAST_LIMIT = 4;

@Injectable()
export class BroadcastService {
  private readonly logger = new Logger(BroadcastService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly runtime: BotRuntimeService,
  ) {}

  list(businessId: string) {
    return this.prisma.broadcast.findMany({ where: { businessId }, orderBy: { createdAt: "desc" } });
  }

  async create(businessId: string, dto: CreateBroadcastDto) {
    const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
    if (!PLAN_LIMITS[business.planTier].broadcastAllowed) {
      throw new BadRequestException("پیام همگانی فقط در پلن‌های کسب‌وکار و حرفه‌ای فعال است");
    }

    const since = new Date();
    since.setDate(since.getDate() - 30);
    const recentCount = await this.prisma.broadcast.count({
      where: { businessId, createdAt: { gte: since }, status: { not: "FAILED" } },
    });
    if (recentCount >= MONTHLY_BROADCAST_LIMIT) {
      throw new BadRequestException(
        `حداکثر ${MONTHLY_BROADCAST_LIMIT} پیام همگانی در ماه مجاز است`,
      );
    }

    const broadcast = await this.prisma.broadcast.create({
      data: { businessId, text: dto.text, mediaUrl: dto.mediaUrl, status: "SENDING" },
    });

    // Dev-scale inline send (no queue) — throttled to stay under Telegram's
    // ~30 msg/sec limit. Move to a Redis-backed queue before real scale.
    this.sendInBackground(businessId, broadcast.id, dto.text).catch((err) =>
      this.logger.error(`Broadcast ${broadcast.id} failed: ${err}`),
    );

    return broadcast;
  }

  private async sendInBackground(businessId: string, broadcastId: string, text: string) {
    const customers = await this.prisma.customer.findMany({
      where: { businessId, blocked: false },
    });

    let sent = 0;
    let failed = 0;

    for (const customer of customers) {
      const ok = await this.runtime.broadcastToCustomer(businessId, customer.telegramUserId, text);
      if (ok) sent += 1;
      else {
        failed += 1;
        await this.prisma.customer.update({ where: { id: customer.id }, data: { blocked: true } });
      }
      await new Promise((resolve) => setTimeout(resolve, 50)); // ~20 msg/sec
    }

    await this.prisma.broadcast.update({
      where: { id: broadcastId },
      data: { status: "DONE", sentCount: sent, failCount: failed },
    });
  }
}
