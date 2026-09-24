import type { PlanTier } from "../generated/prisma/enums.js";
export declare const PLAN_LIMITS: Record<PlanTier, {
    maxBots: number;
    maxTeamMembers: number;
    broadcastAllowed: boolean;
    monthlyMessageQuota: number;
}>;
export declare const PLAN_LABELS: Record<PlanTier, string>;
