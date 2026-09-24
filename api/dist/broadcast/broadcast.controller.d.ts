import { BroadcastService } from "./broadcast.service.js";
import { CreateBroadcastDto } from "./dto/create-broadcast.dto.js";
export declare class BroadcastController {
    private readonly broadcast;
    constructor(broadcast: BroadcastService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BroadcastStatus;
        text: string;
        mediaUrl: string | null;
        sentCount: number;
        failCount: number;
    }[]>;
    create(businessId: string, dto: CreateBroadcastDto): Promise<{
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").BroadcastStatus;
        text: string;
        mediaUrl: string | null;
        sentCount: number;
        failCount: number;
    }>;
}
