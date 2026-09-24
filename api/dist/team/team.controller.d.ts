import { TeamService } from "./team.service.js";
import { AddMemberDto } from "./dto/add-member.dto.js";
export declare class TeamController {
    private readonly team;
    constructor(team: TeamService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
        createdAt: Date;
    }[]>;
    add(businessId: string, dto: AddMemberDto): Promise<{
        id: string;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
        createdAt: Date;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
