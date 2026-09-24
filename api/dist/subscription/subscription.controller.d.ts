import { SubscriptionService } from "./subscription.service.js";
import { ChangePlanDto } from "./dto/change-plan.dto.js";
export declare class SubscriptionController {
    private readonly subscription;
    constructor(subscription: SubscriptionService);
    getStatus(businessId: string): Promise<{
        planTier: import("../generated/prisma/enums.js").PlanTier;
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
            tier: import("../generated/prisma/enums.js").PlanTier;
            label: string;
        }[];
    }>;
    changePlan(businessId: string, dto: ChangePlanDto): import("../generated/prisma/models.js").Prisma__BusinessClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: import("../generated/prisma/enums.js").BusinessType;
        planTier: import("../generated/prisma/enums.js").PlanTier;
        isSubscriptionActive: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
