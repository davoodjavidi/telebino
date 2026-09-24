import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { BotsService } from "./bots.service.js";
import { CreateBotDto } from "./dto/create-bot.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("bots")
@UseGuards(JwtAuthGuard)
export class BotsController {
  constructor(private readonly bots: BotsService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.bots.list(businessId);
  }

  @Post()
  @UseGuards(OwnerOnlyGuard)
  create(@CurrentBusinessId() businessId: string, @Body() dto: CreateBotDto) {
    return this.bots.create(businessId, dto.token);
  }

  @Patch(":id/active")
  @UseGuards(OwnerOnlyGuard)
  toggle(
    @CurrentBusinessId() businessId: string,
    @Param("id") id: string,
    @Body() body: { isActive: boolean },
  ) {
    return this.bots.toggleActive(businessId, id, body.isActive);
  }

  @Delete(":id")
  @UseGuards(OwnerOnlyGuard)
  remove(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.bots.remove(businessId, id);
  }
}
