import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { RequestOtpDto } from "./dto/request-otp.dto.js";
import { VerifyOtpDto } from "./dto/verify-otp.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentUser } from "../common/decorators/current-user.decorator.js";
import type { AuthPayload } from "../common/guards/jwt-auth.guard.js";
import { PrismaService } from "../prisma/prisma.service.js";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Post("request-otp")
  requestOtp(@Body() dto: RequestOtpDto) {
    return this.authService.requestOtp(dto.phone);
  }

  @Post("verify-otp")
  verifyOtp(@Body() dto: VerifyOtpDto) {
    return this.authService.verifyOtp(dto.phone, dto.code, dto.businessName);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: AuthPayload) {
    return this.prisma.user.findUnique({
      where: { id: user.sub },
      include: { business: true },
    });
  }
}
