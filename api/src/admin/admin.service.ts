import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpdateBusinessDto } from "./dto/update-business.dto.js";

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async listBusinesses() {
    const businesses = await this.prisma.business.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        users: { where: { role: "OWNER" }, select: { phone: true } },
        _count: { select: { bots: true, customers: true, users: true } },
      },
    });

    return businesses.map((b) => ({
      id: b.id,
      name: b.name,
      type: b.type,
      planTier: b.planTier,
      isSubscriptionActive: b.isSubscriptionActive,
      ownerPhone: b.users[0]?.phone ?? null,
      botCount: b._count.bots,
      customerCount: b._count.customers,
      teamSize: b._count.users,
      createdAt: b.createdAt,
    }));
  }

  async updateBusiness(id: string, dto: UpdateBusinessDto) {
    const business = await this.prisma.business.findUnique({ where: { id } });
    if (!business) throw new NotFoundException("کسب‌وکار پیدا نشد");

    return this.prisma.business.update({ where: { id }, data: dto });
  }

  async platformStats() {
    const [
      totalBusinesses,
      businessesByType,
      businessesByPlan,
      totalBots,
      activeBots,
      totalCustomers,
      totalMessagesAgg,
      newBusinessesLast7Days,
    ] = await Promise.all([
      this.prisma.business.count(),
      this.prisma.business.groupBy({ by: ["type"], _count: true }),
      this.prisma.business.groupBy({ by: ["planTier"], _count: true }),
      this.prisma.bot.count(),
      this.prisma.bot.count({ where: { isActive: true } }),
      this.prisma.customer.count(),
      this.prisma.customer.aggregate({ _sum: { messageCount: true } }),
      this.newBusinessesByDay(7),
    ]);

    return {
      totalBusinesses,
      businessesByType: Object.fromEntries(businessesByType.map((r) => [r.type, r._count])),
      businessesByPlan: Object.fromEntries(businessesByPlan.map((r) => [r.planTier, r._count])),
      totalBots,
      activeBots,
      totalCustomers,
      totalMessages: totalMessagesAgg._sum.messageCount ?? 0,
      newBusinessesLast7Days,
    };
  }

  private async newBusinessesByDay(days: number) {
    const since = new Date();
    since.setDate(since.getDate() - days);

    const businesses = await this.prisma.business.findMany({
      where: { createdAt: { gte: since } },
      select: { createdAt: true },
    });

    const buckets = new Map<string, number>();
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      buckets.set(d.toISOString().slice(0, 10), 0);
    }
    for (const b of businesses) {
      const key = b.createdAt.toISOString().slice(0, 10);
      buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }

    return Array.from(buckets.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, count }));
  }
}
