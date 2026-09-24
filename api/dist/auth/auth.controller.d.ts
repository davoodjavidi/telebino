import { AuthService } from "./auth.service.js";
import { RequestOtpDto } from "./dto/request-otp.dto.js";
import { VerifyOtpDto } from "./dto/verify-otp.dto.js";
import type { AuthPayload } from "../common/guards/jwt-auth.guard.js";
import { PrismaService } from "../prisma/prisma.service.js";
export declare class AuthController {
    private readonly authService;
    private readonly prisma;
    constructor(authService: AuthService, prisma: PrismaService);
    requestOtp(dto: RequestOtpDto): {
        sent: boolean;
    };
    verifyOtp(dto: VerifyOtpDto): Promise<{
        accessToken: string;
        user: {
            business: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                type: import("../generated/prisma/enums.js").BusinessType;
                planTier: import("../generated/prisma/enums.js").PlanTier;
                isSubscriptionActive: boolean;
            };
        } & {
            id: string;
            phone: string;
            role: import("../generated/prisma/enums.js").UserRole;
            businessId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    me(user: AuthPayload): Promise<({
        business: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            type: import("../generated/prisma/enums.js").BusinessType;
            planTier: import("../generated/prisma/enums.js").PlanTier;
            isSubscriptionActive: boolean;
        };
    } & {
        id: string;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
}
