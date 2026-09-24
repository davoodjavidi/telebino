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
import { PLAN_LABELS, PLAN_LIMITS } from "../common/plan-limits.js";
let SubscriptionService = class SubscriptionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStatus(businessId) {
        const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
        const usageAgg = await this.prisma.customer.aggregate({
            where: { businessId },
            _sum: { messageCount: true },
        });
        return {
            planTier: business.planTier,
            planLabel: PLAN_LABELS[business.planTier],
            isSubscriptionActive: business.isSubscriptionActive,
            limits: PLAN_LIMITS[business.planTier],
            messagesUsedAllTime: usageAgg._sum.messageCount ?? 0,
            allPlans: Object.keys(PLAN_LIMITS).map((tier) => ({
                tier,
                label: PLAN_LABELS[tier],
                ...PLAN_LIMITS[tier],
            })),
        };
    }
    changePlan(businessId, planTier) {
        return this.prisma.business.update({
            where: { id: businessId },
            data: { planTier, isSubscriptionActive: true },
        });
    }
};
SubscriptionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SubscriptionService);
export { SubscriptionService };
//# sourceMappingURL=subscription.service.js.map