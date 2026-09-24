var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async summary(businessId) {
        const [totalCustomers, totalMessagesAgg, totalOrders, totalAccessRecords, formSubmissionCount, unansweredCount, newUsersLast7Days,] = await Promise.all([
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
    async newUsersByDay(businessId, days) {
        const since = new Date();
        since.setDate(since.getDate() - days);
        const customers = await this.prisma.customer.findMany({
            where: { businessId, firstSeenAt: { gte: since } },
            select: { firstSeenAt: true },
        });
        const buckets = new Map();
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
    unansweredQuestions(businessId) {
        return this.prisma.unansweredQuestion.findMany({
            where: { businessId },
            orderBy: { askedAt: "desc" },
            take: 100,
        });
    }
};
ReportsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ReportsService);
export { ReportsService };
//# sourceMappingURL=reports.service.js.map