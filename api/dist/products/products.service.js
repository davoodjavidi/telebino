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
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(businessId) {
        return this.prisma.product.findMany({
            where: { businessId },
            orderBy: { createdAt: "desc" },
        });
    }
    async create(businessId, dto) {
        return this.prisma.product.create({
            data: { ...dto, attributes: dto.attributes, businessId },
        });
    }
    async update(businessId, id, dto) {
        await this.assertOwned(businessId, id);
        return this.prisma.product.update({
            where: { id },
            data: { ...dto, attributes: dto.attributes },
        });
    }
    async remove(businessId, id) {
        await this.assertOwned(businessId, id);
        await this.prisma.product.delete({ where: { id } });
        return { deleted: true };
    }
    async assertOwned(businessId, id) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product || product.businessId !== businessId) {
            throw new NotFoundException("محصول پیدا نشد");
        }
    }
};
ProductsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map