import type { PlanTier } from "../generated/prisma/enums.js";

/**
 * Placeholder limits until real billing (Zarinpal) is wired up — see the
 * subscription module for the manual plan-switch endpoint used for now.
 */
export const PLAN_LIMITS: Record<PlanTier, { maxBots: number; maxTeamMembers: number; broadcastAllowed: boolean; monthlyMessageQuota: number }> = {
  STARTER: { maxBots: 1, maxTeamMembers: 1, broadcastAllowed: false, monthlyMessageQuota: 1000 },
  BUSINESS: { maxBots: 3, maxTeamMembers: 3, broadcastAllowed: true, monthlyMessageQuota: 10000 },
  PRO: { maxBots: 20, maxTeamMembers: 10, broadcastAllowed: true, monthlyMessageQuota: 100000 },
};

export const PLAN_LABELS: Record<PlanTier, string> = {
  STARTER: "پایه",
  BUSINESS: "کسب‌وکار",
  PRO: "حرفه‌ای",
};
