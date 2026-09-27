import { FormsService } from "./forms.service.js";
import { UpsertFormDto } from "./dto/upsert-form.dto.js";
export declare class FormsController {
    private readonly forms;
    constructor(forms: FormsService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
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
    create(businessId: string, dto: UpsertFormDto): import("../generated/prisma/models.js").Prisma__FormDefClient<{
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
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
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
}
