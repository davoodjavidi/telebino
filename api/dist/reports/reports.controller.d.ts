import { ReportsService } from "./reports.service.js";
export declare class ReportsController {
    private readonly reports;
    constructor(reports: ReportsService);
    summary(businessId: string): Promise<{
        totalCustomers: number;
        totalMessages: number;
        totalOrders: number;
        totalAccessRecords: number;
        formSubmissionCount: number;
        unansweredCount: number;
        newUsersLast7Days: {
            date: string;
            count: number;
        }[];
    }>;
    unanswered(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        businessId: string;
        question: string;
        askedAt: Date;
    }[]>;
}
