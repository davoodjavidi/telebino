import { PrismaService } from "../prisma/prisma.service.js";
import type { PlanTier } from "../generated/prisma/enums.js";
export declare class SubscriptionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getStatus(businessId: string): Promise<{
        planTier: PlanTier;
        planLabel: string;
        isSubscriptionActive: boolean;
        limits: {
            maxBots: number;
            maxTeamMembers: number;
            broadcastAllowed: boolean;
            monthlyMessageQuota: number;
        };
        messagesUsedAllTime: number;
        allPlans: {
            maxBots: number;
            maxTeamMembers: number;
            broadcastAllowed: boolean;
            monthlyMessageQuota: number;
            tier: PlanTier;
            label: string;
        }[];
    }>;
    changePlan(businessId: string, planTier: PlanTier): import("../generated/prisma/models.js").Prisma__BusinessClient<{
        id: string;
        name: string;
        createdAt: Date;
        type: import("../generated/prisma/enums.js").BusinessType;
        planTier: PlanTier;
        isSubscriptionActive: boolean;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
