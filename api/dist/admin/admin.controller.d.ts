import { AdminService } from "./admin.service.js";
import { UpdateBusinessDto } from "./dto/update-business.dto.js";
export declare class AdminController {
    private readonly admin;
    constructor(admin: AdminService);
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
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: import("../generated/prisma/enums.js").BusinessType;
        planTier: import("../generated/prisma/enums.js").PlanTier;
        isSubscriptionActive: boolean;
    }>;
    stats(): Promise<{
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
}
