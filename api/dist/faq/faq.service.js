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
let FaqService = class FaqService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(businessId) {
        return this.prisma.faqEntry.findMany({
            where: { businessId },
            orderBy: { createdAt: "desc" },
        });
    }
    create(businessId, dto) {
        return this.prisma.faqEntry.create({
            data: { ...dto, alternatePhrases: dto.alternatePhrases ?? [], businessId },
        });
    }
    async update(businessId, id, dto) {
        await this.assertOwned(businessId, id);
        return this.prisma.faqEntry.update({
            where: { id },
            data: { ...dto, alternatePhrases: dto.alternatePhrases ?? [] },
        });
    }
    async remove(businessId, id) {
        await this.assertOwned(businessId, id);
        await this.prisma.faqEntry.delete({ where: { id } });
        return { deleted: true };
    }
    async assertOwned(businessId, id) {
        const entry = await this.prisma.faqEntry.findUnique({ where: { id } });
        if (!entry || entry.businessId !== businessId) {
            throw new NotFoundException("سوال متداول پیدا نشد");
        }
    }
};
FaqService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FaqService);
export { FaqService };
//# sourceMappingURL=faq.service.js.map