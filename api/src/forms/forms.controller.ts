import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { FormsService } from "./forms.service.js";
import { UpsertFormDto } from "./dto/upsert-form.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("forms")
@UseGuards(JwtAuthGuard)
export class FormsController {
  constructor(private readonly forms: FormsService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.forms.list(businessId);
  }

  @Get(":id")
  get(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.forms.get(businessId, id);
  }

  @Get(":id/submissions")
  submissions(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.forms.submissions(businessId, id);
  }

  @Post()
  create(@CurrentBusinessId() businessId: string, @Body() dto: UpsertFormDto) {
    return this.forms.create(businessId, dto);
  }

  @Put(":id")
  update(@CurrentBusinessId() businessId: string, @Param("id") id: string, @Body() dto: UpsertFormDto) {
    return this.forms.update(businessId, id, dto);
  }

  @Delete(":id")
  remove(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.forms.remove(businessId, id);
  }
}
