import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service.js";
import { ChangePlanDto } from "./dto/change-plan.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("subscription")
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
  constructor(private readonly subscription: SubscriptionService) {}

  @Get()
  getStatus(@CurrentBusinessId() businessId: string) {
    return this.subscription.getStatus(businessId);
  }

  @Post("plan")
  @UseGuards(OwnerOnlyGuard)
  changePlan(@CurrentBusinessId() businessId: string, @Body() dto: ChangePlanDto) {
    return this.subscription.changePlan(businessId, dto.planTier);
  }
}
