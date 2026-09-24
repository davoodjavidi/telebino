import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  list(businessId: string) {
    return this.prisma.customer.findMany({
      where: { businessId },
      orderBy: { lastSeenAt: "desc" },
    });
  }

  listActive(businessId: string) {
    return this.prisma.customer.findMany({ where: { businessId, blocked: false } });
  }

  /** Called by the bot runtime on every incoming message from a Telegram user. */
  async upsertFromBot(businessId: string, telegramUserId: string, username?: string) {
    return this.prisma.customer.upsert({
      where: { businessId_telegramUserId: { businessId, telegramUserId } },
      create: { businessId, telegramUserId, telegramUsername: username, messageCount: 1 },
      update: {
        telegramUsername: username,
        lastSeenAt: new Date(),
        messageCount: { increment: 1 },
      },
    });
  }

  async savePhone(businessId: string, telegramUserId: string, phone: string) {
    return this.prisma.customer.update({
      where: { businessId_telegramUserId: { businessId, telegramUserId } },
      data: { phone },
    });
  }

  async markBlocked(businessId: string, telegramUserId: string) {
    await this.prisma.customer.updateMany({
      where: { businessId, telegramUserId },
      data: { blocked: true },
    });
  }

  async countMessagesForTrial(businessId: string, telegramUserId: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { businessId_telegramUserId: { businessId, telegramUserId } },
    });
    return customer?.messageCount ?? 0;
  }
}
