export declare class UpsertLookupDto {
    kind: "ORDER" | "ACCESS";
    identifier: string;
    status: string;
    customerPhone?: string;
    customerTelegramUserId?: string;
    note?: string;
    notifyOnUpdate?: boolean;
    productId?: string;
}
