var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
import { BusinessType } from "../generated/prisma/enums.js";
let AuthService = AuthService_1 = class AuthService {
    prisma;
    jwt;
    config;
    logger = new Logger(AuthService_1.name);
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    requestOtp(phone) {
        const code = this.config.get("OTP_DEV_STATIC_CODE");
        this.logger.warn(`[DEV OTP] code for ${phone} is ${code} (no SMS sent)`);
        return { sent: true };
    }
    async verifyOtp(phone, code, businessName) {
        const expected = this.config.get("OTP_DEV_STATIC_CODE");
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
};
AuthService = AuthService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        ConfigService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map