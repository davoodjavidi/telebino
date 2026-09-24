import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PLAN_LIMITS } from "../common/plan-limits.js";

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  list(businessId: string) {
    return this.prisma.user.findMany({
      where: { businessId },
      orderBy: { createdAt: "asc" },
      select: { id: true, phone: true, role: true, createdAt: true },
    });
  }

  async addMember(businessId: string, phone: string) {
    const business = await this.prisma.business.findUniqueOrThrow({ where: { id: businessId } });
    const limit = PLAN_LIMITS[business.planTier].maxTeamMembers;
    const currentCount = await this.prisma.user.count({ where: { businessId } });

    if (currentCount >= limit) {
      throw new BadRequestException(
        `پلن فعلی شما (${business.planTier}) حداکثر ${limit} عضو تیم را پشتیبانی می‌کند`,
      );
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

  async removeMember(businessId: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.businessId !== businessId) throw new NotFoundException("عضو پیدا نشد");
    if (user.role === "OWNER") throw new BadRequestException("مالک کسب‌وکار قابل حذف نیست");

    await this.prisma.user.delete({ where: { id: userId } });
    return { deleted: true };
  }
}
