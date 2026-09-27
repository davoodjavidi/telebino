import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertFaqDto } from "./dto/upsert-faq.dto.js";
export declare class FaqService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        question: string;
        alternatePhrases: string[];
        answer: string;
    }[]>;
    create(businessId: string, dto: UpsertFaqDto): import("../generated/prisma/models.js").Prisma__FaqEntryClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        question: string;
        alternatePhrases: string[];
        answer: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(businessId: string, id: string, dto: UpsertFaqDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        question: string;
        alternatePhrases: string[];
        answer: string;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    private assertOwned;
}
