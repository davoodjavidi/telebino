var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
let FormsService = class FormsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(businessId) {
        return this.prisma.formDef.findMany({
            where: { businessId },
            include: { fields: { orderBy: { order: "asc" } }, _count: { select: { submissions: true } } },
            orderBy: { createdAt: "desc" },
        });
    }
    async get(businessId, id) {
        const form = await this.prisma.formDef.findUnique({
            where: { id },
            include: { fields: { orderBy: { order: "asc" } } },
        });
        if (!form || form.businessId !== businessId)
            throw new NotFoundException("فرم پیدا نشد");
        return form;
    }
    create(businessId, dto) {
        return this.prisma.formDef.create({
            data: {
                businessId,
                title: dto.title,
                fields: { create: dto.fields.map((f) => ({ ...f, options: f.options ?? [] })) },
            },
            include: { fields: true },
        });
    }
    async update(businessId, id, dto) {
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
    async remove(businessId, id) {
        await this.get(businessId, id);
        await this.prisma.formDef.delete({ where: { id } });
        return { deleted: true };
    }
    async submissions(businessId, id) {
        await this.get(businessId, id);
        return this.prisma.formSubmission.findMany({
            where: { formId: id },
            include: { customer: true },
            orderBy: { createdAt: "desc" },
        });
    }
    saveSubmission(formId, customerId, answers) {
        return this.prisma.formSubmission.create({
            data: { formId, customerId, answers: answers },
        });
    }
};
FormsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FormsService);
export { FormsService };
//# sourceMappingURL=forms.service.js.map