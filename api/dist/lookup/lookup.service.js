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
import { EventEmitter2 } from "@nestjs/event-emitter";
import { PrismaService } from "../prisma/prisma.service.js";
export const LOOKUP_STATUS_CHANGED_EVENT = "lookup.statusChanged";
let LookupService = class LookupService {
    prisma;
    events;
    constructor(prisma, events) {
        this.prisma = prisma;
        this.events = events;
    }
    list(businessId, kind) {
        return this.prisma.lookupEntry.findMany({
            where: { businessId, ...(kind ? { kind } : {}) },
            include: { product: { select: { id: true, name: true, price: true, imageUrl: true } } },
            orderBy: { createdAt: "desc" },
        });
    }
    find(businessId, kind, identifier) {
        return this.prisma.lookupEntry.findUnique({
            where: { businessId_kind_identifier: { businessId, kind, identifier: identifier.trim() } },
        });
    }
    create(businessId, dto) {
        return this.prisma.lookupEntry.create({ data: { ...dto, businessId } });
    }
    async update(businessId, id, dto) {
        const existing = await this.assertOwned(businessId, id);
        const updated = await this.prisma.lookupEntry.update({ where: { id }, data: dto });
        if (updated.notifyOnUpdate && updated.customerPhone && existing.status !== updated.status) {
            this.events.emit(LOOKUP_STATUS_CHANGED_EVENT, {
                businessId,
                kind: updated.kind,
                identifier: updated.identifier,
                status: updated.status,
                customerPhone: updated.customerPhone,
            });
        }
        return updated;
    }
    async remove(businessId, id) {
        await this.assertOwned(businessId, id);
        await this.prisma.lookupEntry.delete({ where: { id } });
        return { deleted: true };
    }
    async assertOwned(businessId, id) {
        const entry = await this.prisma.lookupEntry.findUnique({ where: { id } });
        if (!entry || entry.businessId !== businessId) {
            throw new NotFoundException("رکورد پیدا نشد");
        }
        return entry;
    }
};
LookupService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        EventEmitter2])
], LookupService);
export { LookupService };
//# sourceMappingURL=lookup.service.js.map