import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertFaqDto } from "./dto/upsert-faq.dto.js";

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}

  list(businessId: string) {
    return this.prisma.faqEntry.findMany({
      where: { businessId },
      orderBy: { createdAt: "desc" },
    });
  }

  create(businessId: string, dto: UpsertFaqDto) {
    return this.prisma.faqEntry.create({
      data: { ...dto, alternatePhrases: dto.alternatePhrases ?? [], businessId },
    });
  }

  async update(businessId: string, id: string, dto: UpsertFaqDto) {
    await this.assertOwned(businessId, id);
    return this.prisma.faqEntry.update({
      where: { id },
      data: { ...dto, alternatePhrases: dto.alternatePhrases ?? [] },
    });
  }

  async remove(businessId: string, id: string) {
    await this.assertOwned(businessId, id);
    await this.prisma.faqEntry.delete({ where: { id } });
    return { deleted: true };
  }

  private async assertOwned(businessId: string, id: string) {
    const entry = await this.prisma.faqEntry.findUnique({ where: { id } });
    if (!entry || entry.businessId !== businessId) {
      throw new NotFoundException("سوال متداول پیدا نشد");
    }
  }
}
