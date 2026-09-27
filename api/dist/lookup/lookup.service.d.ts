import { EventEmitter2 } from "@nestjs/event-emitter";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertLookupDto } from "./dto/upsert-lookup.dto.js";
export declare const LOOKUP_STATUS_CHANGED_EVENT = "lookup.statusChanged";
export declare const COURSE_ACCESS_GRANTED_EVENT = "lookup.courseAccessGranted";
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
export declare class LookupService {
    private readonly prisma;
    private readonly events;
    constructor(prisma: PrismaService, events: EventEmitter2);
    list(businessId: string, kind?: "ORDER" | "ACCESS"): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        product: {
            id: string;
            name: string;
            price: number | null;
            imageUrl: string | null;
            _count: {
                courseLessons: number;
            };
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        productId: string | null;
        status: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
    })[]>;
    find(businessId: string, kind: "ORDER" | "ACCESS", identifier: string): import("../generated/prisma/models.js").Prisma__LookupEntryClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        productId: string | null;
        status: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    create(businessId: string, dto: UpsertLookupDto): import("../generated/prisma/models.js").Prisma__LookupEntryClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        productId: string | null;
        status: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(businessId: string, id: string, dto: UpsertLookupDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        productId: string | null;
        status: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
    }>;
    markOrderPaidAndGrantAccess(businessId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        productId: string | null;
        status: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    private assertOwned;
}
