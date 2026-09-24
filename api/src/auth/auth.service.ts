import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
import { BusinessType } from "../generated/prisma/enums.js";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  /**
   * Dev-only: no SMS gateway is wired up yet, so every request is accepted
   * and the static code from OTP_DEV_STATIC_CODE is logged instead of sent.
   * Replace with a real SMS provider (e.g. Kavenegar) before production.
   */
  requestOtp(phone: string) {
    const code = this.config.get<string>("OTP_DEV_STATIC_CODE");
    this.logger.warn(`[DEV OTP] code for ${phone} is ${code} (no SMS sent)`);
    return { sent: true };
  }

  async verifyOtp(phone: string, code: string, businessName?: string) {
    const expected = this.config.get<string>("OTP_DEV_STATIC_CODE");
    if (code !== expected) {
      throw new UnauthorizedException("کد تایید نادرست است");
    }

    let user = await this.prisma.user.findUnique({
      where: { phone },
      include: { business: true },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          phone,
          role: "OWNER",
          business: {
            create: {
              name: businessName?.trim() || "کسب‌وکار من",
              type: BusinessType.SHOP,
            },
          },
        },
        include: { business: true },
      });
    }

    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      phone: user.phone,
      businessId: user.businessId,
      role: user.role,
    });

    return { accessToken, user };
  }
}
