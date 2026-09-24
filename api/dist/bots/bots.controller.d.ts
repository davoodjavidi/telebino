import { BotsService } from "./bots.service.js";
import { CreateBotDto } from "./dto/create-bot.dto.js";
export declare class BotsController {
    private readonly bots;
    constructor(bots: BotsService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        username: string;
        isActive: boolean;
    }[]>;
    create(businessId: string, dto: CreateBotDto): Promise<{
        id: string;
        username: string;
        isActive: boolean;
    }>;
    toggle(businessId: string, id: string, body: {
        isActive: boolean;
    }): Promise<{
        id: string;
        isActive: boolean;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
