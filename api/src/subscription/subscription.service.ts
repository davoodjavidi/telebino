import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LABELS, PLAN_LIMITS } from "../common/plan-limits.js";
import type { PlanTier } from "../generated/prisma/enums.js";

@Injectable()
export class SubscriptionService {
  constructor(private readonly prisma: PrismaService) {}

  async getStatus(businessId: string) {
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
      // Approximation until a monthly-resetting usage counter is added.
      messagesUsedAllTime: usageAgg._sum.messageCount ?? 0,
      allPlans: (Object.keys(PLAN_LIMITS) as PlanTier[]).map((tier) => ({
        tier,
        label: PLAN_LABELS[tier],
        ...PLAN_LIMITS[tier],
      })),
    };
  }

  /**
   * Dev-only manual switch — replace with a Zarinpal checkout + webhook flow
   * before production. No payment is actually collected here.
   */
  changePlan(businessId: string, planTier: PlanTier) {
    return this.prisma.business.update({
      where: { id: businessId },
      data: { planTier, isSubscriptionActive: true },
    });
  }
}
