import { PrismaService } from "../prisma/prisma.service.js";
export declare class TeamService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
        createdAt: Date;
    }[]>;
    addMember(businessId: string, phone: string): Promise<{
        id: string;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
        createdAt: Date;
    }>;
    removeMember(businessId: string, userId: string): Promise<{
        deleted: boolean;
    }>;
}
