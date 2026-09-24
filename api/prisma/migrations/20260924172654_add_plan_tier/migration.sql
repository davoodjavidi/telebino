-- CreateEnum
CREATE TYPE "PlanTier" AS ENUM ('STARTER', 'BUSINESS', 'PRO');

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "planTier" "PlanTier" NOT NULL DEFAULT 'STARTER';
