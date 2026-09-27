import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
import { BusinessType } from "../generated/prisma/enums.js";
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    requestOtp(phone: string): {
        sent: boolean;
    };
    verifyOtp(phone: string, code: string, businessName?: string): Promise<{
        accessToken: string;
        user: {
            business: {
                id: string;
                name: string;
                createdAt: Date;
                type: BusinessType;
                planTier: import("../generated/prisma/enums.js").PlanTier;
                isSubscriptionActive: boolean;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            role: import("../generated/prisma/enums.js").UserRole;
            businessId: string;
        };
    }>;
}
