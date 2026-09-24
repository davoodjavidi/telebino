import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AdminAuthService } from "./admin-auth.service.js";
import { AdminLoginDto } from "./dto/admin-login.dto.js";
import { AdminAuthGuard } from "../common/guards/admin-auth.guard.js";
import { CurrentAdmin } from "../common/decorators/current-admin.decorator.js";
import type { AdminAuthPayload } from "../common/guards/admin-auth.guard.js";

@Controller("admin/auth")
export class AdminAuthController {
  constructor(private readonly adminAuth: AdminAuthService) {}

  @Post("login")
  login(@Body() dto: AdminLoginDto) {
    return this.adminAuth.login(dto.email, dto.password);
  }

  @Get("me")
  @UseGuards(AdminAuthGuard)
  me(@CurrentAdmin() admin: AdminAuthPayload) {
    return this.adminAuth.me(admin.sub);
  }
}
