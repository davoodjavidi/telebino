import { AdminService } from "./admin.service.js";
import { UpdateBusinessDto } from "./dto/update-business.dto.js";
import { ContactService } from "../contact/contact.service.js";
import { UpdateContactMessageDto } from "./dto/update-contact-message.dto.js";
export declare class AdminController {
    private readonly admin;
    private readonly contact;
    constructor(admin: AdminService, contact: ContactService);
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
    listContactMessages(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        phone: string;
        topic: string;
        message: string;
        isRead: boolean;
    }[]>;
    updateContactMessage(id: string, dto: UpdateContactMessageDto): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        phone: string;
        topic: string;
        message: string;
        isRead: boolean;
    }>;
}
