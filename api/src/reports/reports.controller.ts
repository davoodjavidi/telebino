import { Controller, Get, UseGuards } from "@nestjs/common";
import { ReportsService } from "./reports.service.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("reports")
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private readonly reports: ReportsService) {}

  @Get("summary")
  summary(@CurrentBusinessId() businessId: string) {
    return this.reports.summary(businessId);
  }

  @Get("unanswered")
  unanswered(@CurrentBusinessId() businessId: string) {
    return this.reports.unansweredQuestions(businessId);
  }
}
