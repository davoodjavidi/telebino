import { Injectable, NotFoundException } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertLookupDto } from "./dto/upsert-lookup.dto.js";

export const LOOKUP_STATUS_CHANGED_EVENT = "lookup.statusChanged";

export interface LookupStatusChangedPayload {
  businessId: string;
  kind: "ORDER" | "ACCESS";
  identifier: string;
  status: string;
  customerPhone: string | null;
}

@Injectable()
export class LookupService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventEmitter2,
  ) {}

  list(businessId: string, kind?: "ORDER" | "ACCESS") {
    return this.prisma.lookupEntry.findMany({
      where: { businessId, ...(kind ? { kind } : {}) },
      include: { product: { select: { id: true, name: true, price: true, imageUrl: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  /** Used by the bot runtime: customer types an identifier and we look it up. */
  find(businessId: string, kind: "ORDER" | "ACCESS", identifier: string) {
    return this.prisma.lookupEntry.findUnique({
      where: { businessId_kind_identifier: { businessId, kind, identifier: identifier.trim() } },
    });
  }

  create(businessId: string, dto: UpsertLookupDto) {
    return this.prisma.lookupEntry.create({ data: { ...dto, businessId } });
  }

  async update(businessId: string, id: string, dto: UpsertLookupDto) {
    const existing = await this.assertOwned(businessId, id);
    const updated = await this.prisma.lookupEntry.update({ where: { id }, data: dto });

    if (updated.notifyOnUpdate && updated.customerPhone && existing.status !== updated.status) {
      this.events.emit(LOOKUP_STATUS_CHANGED_EVENT, {
        businessId,
        kind: updated.kind,
        identifier: updated.identifier,
        status: updated.status,
        customerPhone: updated.customerPhone,
      } satisfies LookupStatusChangedPayload);
    }

    return updated;
  }

  async remove(businessId: string, id: string) {
    await this.assertOwned(businessId, id);
    await this.prisma.lookupEntry.delete({ where: { id } });
    return { deleted: true };
  }

  private async assertOwned(businessId: string, id: string) {
    const entry = await this.prisma.lookupEntry.findUnique({ where: { id } });
    if (!entry || entry.businessId !== businessId) {
      throw new NotFoundException("رکورد پیدا نشد");
    }
    return entry;
  }
}
