import { Controller, Get, UseGuards } from "@nestjs/common";
import { CustomersService } from "./customers.service.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("customers")
@UseGuards(JwtAuthGuard)
export class CustomersController {
  constructor(private readonly customers: CustomersService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.customers.list(businessId);
  }
}
