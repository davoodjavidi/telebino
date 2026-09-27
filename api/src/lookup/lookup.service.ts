import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertLookupDto } from "./dto/upsert-lookup.dto.js";

export const LOOKUP_STATUS_CHANGED_EVENT = "lookup.statusChanged";
export const COURSE_ACCESS_GRANTED_EVENT = "lookup.courseAccessGranted";

export interface LookupStatusChangedPayload {
  businessId: string;
  kind: "ORDER" | "ACCESS";
  identifier: string;
  status: string;
  customerPhone: string | null;
}

export interface CourseAccessGrantedPayload {
  businessId: string;
  productId: string;
  telegramUserId: string;
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
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
            _count: { select: { courseLessons: true } },
          },
        },
      },
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

  /**
   * The one "paid" action a business owner takes on a course order (Zarinpal
   * isn't wired up yet, so this manual confirmation is what unlocks lesson
   * access — see CourseAccess). Deliberately a distinct action rather than
   * inferring "paid" from the free-text status field, since owners can type
   * anything in that field.
   */
  async markOrderPaidAndGrantAccess(businessId: string, id: string) {
    const entry = await this.assertOwned(businessId, id);
    if (entry.kind !== "ORDER") {
      throw new BadRequestException("فقط سفارش‌ها را می‌توان تأیید پرداخت کرد");
    }

    const paidStatus = "پرداخت شده ✅";
    const updated = await this.prisma.lookupEntry.update({
      where: { id },
      data: { status: paidStatus },
    });

    if (updated.notifyOnUpdate && updated.customerPhone && entry.status !== paidStatus) {
      this.events.emit(LOOKUP_STATUS_CHANGED_EVENT, {
        businessId,
        kind: updated.kind,
        identifier: updated.identifier,
        status: updated.status,
        customerPhone: updated.customerPhone,
      } satisfies LookupStatusChangedPayload);
    }

    if (updated.productId && updated.customerTelegramUserId) {
      const lessonCount = await this.prisma.courseLesson.count({ where: { productId: updated.productId } });
      if (lessonCount > 0) {
        await this.prisma.courseAccess.upsert({
          where: {
            businessId_productId_telegramUserId: {
              businessId,
              productId: updated.productId,
              telegramUserId: updated.customerTelegramUserId,
            },
          },
          create: {
            businessId,
            productId: updated.productId,
            telegramUserId: updated.customerTelegramUserId,
          },
          update: {},
        });
        this.events.emit(COURSE_ACCESS_GRANTED_EVENT, {
          businessId,
          productId: updated.productId,
          telegramUserId: updated.customerTelegramUserId,
        } satisfies CourseAccessGrantedPayload);
      }
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
