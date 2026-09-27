import { LookupService } from "./lookup.service.js";
import { UpsertLookupDto } from "./dto/upsert-lookup.dto.js";
export declare class LookupController {
    private readonly lookup;
    constructor(lookup: LookupService);
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
        businessId: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        status: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
        productId: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    create(businessId: string, dto: UpsertLookupDto): import("../generated/prisma/models.js").Prisma__LookupEntryClient<{
        id: string;
        businessId: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        status: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
        productId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(businessId: string, id: string, dto: UpsertLookupDto): Promise<{
        id: string;
        businessId: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        status: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
        productId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    markPaid(businessId: string, id: string): Promise<{
        id: string;
        businessId: string;
        kind: import("../generated/prisma/enums.js").LookupKind;
        identifier: string;
        status: string;
        customerPhone: string | null;
        customerTelegramUserId: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
        productId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
