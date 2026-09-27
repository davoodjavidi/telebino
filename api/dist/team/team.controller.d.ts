import { TeamService } from "./team.service.js";
import { AddMemberDto } from "./dto/add-member.dto.js";
export declare class TeamController {
    private readonly team;
    constructor(team: TeamService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
    }[]>;
    add(businessId: string, dto: AddMemberDto): Promise<{
        id: string;
        createdAt: Date;
        phone: string;
        role: import("../generated/prisma/enums.js").UserRole;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
