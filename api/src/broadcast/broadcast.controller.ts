import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BroadcastService } from "./broadcast.service.js";
import { CreateBroadcastDto } from "./dto/create-broadcast.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("broadcast")
@UseGuards(JwtAuthGuard)
export class BroadcastController {
  constructor(private readonly broadcast: BroadcastService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.broadcast.list(businessId);
  }

  @Post()
  @UseGuards(OwnerOnlyGuard)
  create(@CurrentBusinessId() businessId: string, @Body() dto: CreateBroadcastDto) {
    return this.broadcast.create(businessId, dto);
  }
}
