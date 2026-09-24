export declare const BusinessType: {
    readonly SHOP: "SHOP";
    readonly EDUCATION: "EDUCATION";
    readonly CONSULTING: "CONSULTING";
};
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType];
export declare const PlanTier: {
    readonly STARTER: "STARTER";
    readonly BUSINESS: "BUSINESS";
    readonly PRO: "PRO";
};
export type PlanTier = (typeof PlanTier)[keyof typeof PlanTier];
export declare const UserRole: {
    readonly OWNER: "OWNER";
    readonly EMPLOYEE: "EMPLOYEE";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const LookupKind: {
    readonly ORDER: "ORDER";
    readonly ACCESS: "ACCESS";
};
export type LookupKind = (typeof LookupKind)[keyof typeof LookupKind];
export declare const FormFieldType: {
    readonly TEXT: "TEXT";
    readonly NUMBER: "NUMBER";
    readonly PHONE: "PHONE";
    readonly SINGLE_CHOICE: "SINGLE_CHOICE";
    readonly MULTI_CHOICE: "MULTI_CHOICE";
    readonly FILE: "FILE";
};
export type FormFieldType = (typeof FormFieldType)[keyof typeof FormFieldType];
export declare const BroadcastStatus: {
    readonly DRAFT: "DRAFT";
    readonly QUEUED: "QUEUED";
    readonly SENDING: "SENDING";
    readonly DONE: "DONE";
    readonly FAILED: "FAILED";
};
export type BroadcastStatus = (typeof BroadcastStatus)[keyof typeof BroadcastStatus];
