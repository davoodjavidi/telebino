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
            options: string[];
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            label: string;
            required: boolean;
            order: number;
            formId: string;
        }[];
    } & {
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
    })[]>;
    get(businessId: string, id: string): Promise<{
        fields: {
            options: string[];
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            label: string;
            required: boolean;
            order: number;
            formId: string;
        }[];
    } & {
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
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
            options: string[];
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            label: string;
            required: boolean;
            order: number;
            formId: string;
        }[];
    } & {
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(businessId: string, id: string, dto: UpsertFormDto): Promise<{
        fields: {
            options: string[];
            id: string;
            type: import("../generated/prisma/enums.js").FormFieldType;
            label: string;
            required: boolean;
            order: number;
            formId: string;
        }[];
    } & {
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
