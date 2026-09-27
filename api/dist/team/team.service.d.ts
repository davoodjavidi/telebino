import { PrismaService } from "../prisma/prisma.service.js";
export declare class TeamService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
    }[]>;
    addMember(businessId: string, phone: string): Promise<{
        id: string;
        createdAt: Date;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
    }>;
    removeMember(businessId: string, userId: string): Promise<{
        deleted: boolean;
    }>;
}
