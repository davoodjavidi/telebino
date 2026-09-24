import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async summary(businessId: string) {
    const [
      totalCustomers,
      totalMessagesAgg,
      totalOrders,
      totalAccessRecords,
      formSubmissionCount,
      unansweredCount,
      newUsersLast7Days,
    ] = await Promise.all([
      this.prisma.customer.count({ where: { businessId } }),
      this.prisma.customer.aggregate({ where: { businessId }, _sum: { messageCount: true } }),
      this.prisma.lookupEntry.count({ where: { businessId, kind: "ORDER" } }),
      this.prisma.lookupEntry.count({ where: { businessId, kind: "ACCESS" } }),
      this.prisma.formSubmission.count({ where: { form: { businessId } } }),
      this.prisma.unansweredQuestion.count({ where: { businessId } }),
      this.newUsersByDay(businessId, 7),
    ]);

    return {
      totalCustomers,
      totalMessages: totalMessagesAgg._sum.messageCount ?? 0,
      totalOrders,
      totalAccessRecords,
      formSubmissionCount,
      unansweredCount,
      newUsersLast7Days,
    };
  }

  private async newUsersByDay(businessId: string, days: number) {
    const since = new Date();
    since.setDate(since.getDate() - days);

    const customers = await this.prisma.customer.findMany({
      where: { businessId, firstSeenAt: { gte: since } },
      select: { firstSeenAt: true },
    });

    const buckets = new Map<string, number>();
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      buckets.set(d.toISOString().slice(0, 10), 0);
    }
    for (const c of customers) {
      const key = c.firstSeenAt.toISOString().slice(0, 10);
      buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }

    return Array.from(buckets.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, count }));
  }

  unansweredQuestions(businessId: string) {
    return this.prisma.unansweredQuestion.findMany({
      where: { businessId },
      orderBy: { askedAt: "desc" },
      take: 100,
    });
  }
}
