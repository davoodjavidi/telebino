declare const FIELD_TYPES: readonly ["TEXT", "NUMBER", "PHONE", "SINGLE_CHOICE", "MULTI_CHOICE", "FILE"];
export declare class FormFieldDto {
    label: string;
    type: (typeof FIELD_TYPES)[number];
    required: boolean;
    options?: string[];
    order: number;
}
export declare class UpsertFormDto {
    title: string;
    fields: FormFieldDto[];
}
export {};
