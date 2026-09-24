import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertFormDto } from "./dto/upsert-form.dto.js";
import type { Prisma } from "../generated/prisma/client.js";

@Injectable()
export class FormsService {
  constructor(private readonly prisma: PrismaService) {}

  list(businessId: string) {
    return this.prisma.formDef.findMany({
      where: { businessId },
      include: { fields: { orderBy: { order: "asc" } }, _count: { select: { submissions: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  async get(businessId: string, id: string) {
    const form = await this.prisma.formDef.findUnique({
      where: { id },
      include: { fields: { orderBy: { order: "asc" } } },
    });
    if (!form || form.businessId !== businessId) throw new NotFoundException("فرم پیدا نشد");
    return form;
  }

  create(businessId: string, dto: UpsertFormDto) {
    return this.prisma.formDef.create({
      data: {
        businessId,
        title: dto.title,
        fields: { create: dto.fields.map((f) => ({ ...f, options: f.options ?? [] })) },
      },
      include: { fields: true },
    });
  }

  async update(businessId: string, id: string, dto: UpsertFormDto) {
    await this.get(businessId, id);
    await this.prisma.formField.deleteMany({ where: { formId: id } });
    return this.prisma.formDef.update({
      where: { id },
      data: {
        title: dto.title,
        fields: { create: dto.fields.map((f) => ({ ...f, options: f.options ?? [] })) },
      },
      include: { fields: true },
    });
  }

  async remove(businessId: string, id: string) {
    await this.get(businessId, id);
    await this.prisma.formDef.delete({ where: { id } });
    return { deleted: true };
  }

  async submissions(businessId: string, id: string) {
    await this.get(businessId, id);
    return this.prisma.formSubmission.findMany({
      where: { formId: id },
      include: { customer: true },
      orderBy: { createdAt: "desc" },
    });
  }

  /** Used by the bot runtime once a customer finishes answering all fields. */
  saveSubmission(formId: string, customerId: string | null, answers: Record<string, string>) {
    return this.prisma.formSubmission.create({
      data: { formId, customerId, answers: answers as Prisma.InputJsonValue },
    });
  }
}
