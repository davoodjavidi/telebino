import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
export declare class AdminAuthService {
    private readonly prisma;
    private readonly adminJwt;
    constructor(prisma: PrismaService, adminJwt: JwtService);
    login(email: string, password: string): Promise<{
        accessToken: string;
        admin: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    me(id: string): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
