import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { LookupService } from "./lookup.service.js";
import { UpsertLookupDto } from "./dto/upsert-lookup.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("lookup")
@UseGuards(JwtAuthGuard)
export class LookupController {
  constructor(private readonly lookup: LookupService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string, @Query("kind") kind?: "ORDER" | "ACCESS") {
    return this.lookup.list(businessId, kind);
  }

  @Post()
  create(@CurrentBusinessId() businessId: string, @Body() dto: UpsertLookupDto) {
    return this.lookup.create(businessId, dto);
  }

  @Put(":id")
  update(
    @CurrentBusinessId() businessId: string,
    @Param("id") id: string,
    @Body() dto: UpsertLookupDto,
  ) {
    return this.lookup.update(businessId, id, dto);
  }

  @Post(":id/mark-paid")
  markPaid(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.lookup.markOrderPaidAndGrantAccess(businessId, id);
  }

  @Delete(":id")
  remove(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.lookup.remove(businessId, id);
  }
}
