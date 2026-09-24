import { CustomersService } from "./customers.service.js";
export declare class CustomersController {
    private readonly customers;
    constructor(customers: CustomersService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        phone: string | null;
        businessId: string;
        telegramUserId: string;
        telegramUsername: string | null;
        messageCount: number;
        blocked: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }[]>;
}
