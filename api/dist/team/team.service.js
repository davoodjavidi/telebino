var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LIMITS } from "../common/plan-limits.js";
let TeamService = class TeamService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(businessId) {
        return this.prisma.user.findMany({
            where: { businessId },
            orderBy: { createdAt: "asc" },
            select: { id: true, phone: true, role: true, createdAt: true },
        });
    }
    async addMember(businessId, phone) {
        const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
        const limit = PLAN_LIMITS[business.planTier].maxTeamMembers;
        const currentCount = await this.prisma.user.count({ where: { businessId } });
        if (currentCount >= limit) {
            throw new BadRequestException(`پلن فعلی شما (${business.planTier}) حداکثر ${limit} عضو تیم را پشتیبانی می‌کند`);
        }
        const existing = await this.prisma.user.findUnique({ where: { phone } });
        if (existing) {
            throw new ConflictException("این شماره قبلاً به یک حساب دیگر متصل است");
        }
        return this.prisma.user.create({
            data: { phone, role: "EMPLOYEE", businessId },
            select: { id: true, phone: true, role: true, createdAt: true },
        });
    }
    async removeMember(businessId, userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.businessId !== businessId)
            throw new NotFoundException("عضو پیدا نشد");
        if (user.role === "OWNER")
            throw new BadRequestException("مالک کسب‌وکار قابل حذف نیست");
        await this.prisma.user.delete({ where: { id: userId } });
        return { deleted: true };
    }
};
TeamService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TeamService);
export { TeamService };
//# sourceMappingURL=team.service.js.map