import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertFormDto } from "./dto/upsert-form.dto.js";
import type { Prisma } from "../generated/prisma/client.js";
export declare class FormsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(businessId: string): Prisma.PrismaPromise<({
        _count: {
            submissions: number;
        };
        fields: {
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            order: number;
            formId: string;
            label: string;
            required: boolean;
            options: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        title: string;
    })[]>;
    get(businessId: string, id: string): Promise<{
        fields: {
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            order: number;
            formId: string;
            label: string;
            required: boolean;
            options: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        title: string;
    }>;
    create(businessId: string, dto: UpsertFormDto): Prisma.Prisma__FormDefClient<{
        fields: {
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            order: number;
            formId: string;
            label: string;
            required: boolean;
            options: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        title: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(businessId: string, id: string, dto: UpsertFormDto): Promise<{
        fields: {
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            order: number;
            formId: string;
            label: string;
            required: boolean;
            options: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        businessId: string;
        title: string;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    submissions(businessId: string, id: string): Promise<({
        customer: {
            id: string;
            phone: string | null;
            businessId: string;
            telegramUserId: string;
            telegramUsername: string | null;
            messageCount: number;
            blocked: boolean;
            firstSeenAt: Date;
            lastSeenAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        formId: string;
        customerId: string | null;
        answers: import("@prisma/client/runtime/client").JsonValue;
    })[]>;
    saveSubmission(formId: string, customerId: string | null, answers: Record<string, string>): Prisma.Prisma__FormSubmissionClient<{
        id: string;
        createdAt: Date;
        formId: string;
        customerId: string | null;
        answers: import("@prisma/client/runtime/client").JsonValue;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
