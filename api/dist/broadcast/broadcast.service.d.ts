import { PrismaService } from "../prisma/prisma.service.js";
import { BotRuntimeService } from "../bots/bot-runtime.service.js";
import type { CreateBroadcastDto } from "./dto/create-broadcast.dto.js";
export declare class BroadcastService {
    private readonly prisma;
    private readonly runtime;
    private readonly logger;
    constructor(prisma: PrismaService, runtime: BotRuntimeService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        status: import("../generated/prisma/enums.js").BroadcastStatus;
        text: string;
        mediaUrl: string | null;
        sentCount: number;
        failCount: number;
    }[]>;
    create(businessId: string, dto: CreateBroadcastDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        status: import("../generated/prisma/enums.js").BroadcastStatus;
        text: string;
        mediaUrl: string | null;
        sentCount: number;
        failCount: number;
    }>;
    private sendInBackground;
}
