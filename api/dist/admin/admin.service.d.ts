import { PrismaService } from "../prisma/prisma.service.js";
import type { UpdateBusinessDto } from "./dto/update-business.dto.js";
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listBusinesses(): Promise<{
        id: string;
        name: string;
        type: import("../generated/prisma/enums.js").BusinessType;
        planTier: import("../generated/prisma/enums.js").PlanTier;
        isSubscriptionActive: boolean;
        ownerPhone: string;
        botCount: number;
        customerCount: number;
        teamSize: number;
        createdAt: Date;
    }[]>;
    updateBusiness(id: string, dto: UpdateBusinessDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        type: import("../generated/prisma/enums.js").BusinessType;
        planTier: import("../generated/prisma/enums.js").PlanTier;
        isSubscriptionActive: boolean;
        updatedAt: Date;
    }>;
    platformStats(): Promise<{
        totalBusinesses: number;
        businessesByType: {
            [k: string]: number;
        };
        businessesByPlan: {
            [k: string]: number;
        };
        totalBots: number;
        activeBots: number;
        totalCustomers: number;
        totalMessages: number;
        newBusinessesLast7Days: {
            date: string;
            count: number;
        }[];
    }>;
    private newBusinessesByDay;
}
