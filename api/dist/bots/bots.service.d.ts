import { PrismaService } from "../prisma/prisma.service.js";
import { BotRuntimeService } from "./bot-runtime.service.js";
export declare class BotsService {
    private readonly prisma;
    private readonly runtime;
    constructor(prisma: PrismaService, runtime: BotRuntimeService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        username: string;
        isActive: boolean;
    }[]>;
    create(businessId: string, token: string): Promise<{
        id: string;
        username: string;
        isActive: boolean;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    toggleActive(businessId: string, id: string, isActive: boolean): Promise<{
        id: string;
        isActive: boolean;
    }>;
    private validateToken;
    private assertOwned;
}
