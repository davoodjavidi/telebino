import { PrismaService } from "../prisma/prisma.service.js";
export declare class CustomersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        phone: string | null;
        businessId: string;
        telegramUserId: string;
        telegramUsername: string | null;
        messageCount: number;
        blocked: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }[]>;
    listActive(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        phone: string | null;
        businessId: string;
        telegramUserId: string;
        telegramUsername: string | null;
        messageCount: number;
        blocked: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }[]>;
    upsertFromBot(businessId: string, telegramUserId: string, username?: string): Promise<{
        id: string;
        phone: string | null;
        businessId: string;
        telegramUserId: string;
        telegramUsername: string | null;
        messageCount: number;
        blocked: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }>;
    savePhone(businessId: string, telegramUserId: string, phone: string): Promise<{
        id: string;
        phone: string | null;
        businessId: string;
        telegramUserId: string;
        telegramUsername: string | null;
        messageCount: number;
        blocked: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }>;
    markBlocked(businessId: string, telegramUserId: string): Promise<void>;
    countMessagesForTrial(businessId: string, telegramUserId: string): Promise<number>;
}
