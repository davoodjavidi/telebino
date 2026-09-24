import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { FaqService } from "./faq.service.js";
import { UpsertFaqDto } from "./dto/upsert-faq.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("faq")
@UseGuards(JwtAuthGuard)
export class FaqController {
  constructor(private readonly faq: FaqService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.faq.list(businessId);
  }

  @Post()
  create(@CurrentBusinessId() businessId: string, @Body() dto: UpsertFaqDto) {
    return this.faq.create(businessId, dto);
  }

  @Put(":id")
  update(@CurrentBusinessId() businessId: string, @Param("id") id: string, @Body() dto: UpsertFaqDto) {
    return this.faq.update(businessId, id, dto);
  }

  @Delete(":id")
  remove(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.faq.remove(businessId, id);
  }
}
