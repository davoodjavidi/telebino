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
let ContactService = class ContactService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ website, ...dto }) {
        if (website)
            return { sent: true };
        await this.prisma.contactMessage.create({
            data: {
                ...dto,
                name: dto.name.trim(),
                email: dto.email?.trim() || null,
                message: dto.message.trim(),
            },
        });
        return { sent: true };
    }
    list() {
        return this.prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 500 });
    }
    async setRead(id, isRead) {
        const existing = await this.prisma.contactMessage.findUnique({ where: { id } });
        if (!existing)
            throw new NotFoundException("پیام پیدا نشد");
        return this.prisma.contactMessage.update({ where: { id }, data: { isRead } });
    }
};
ContactService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map