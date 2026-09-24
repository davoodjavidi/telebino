import { PrismaService } from "../prisma/prisma.service.js";
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    private newUsersByDay;
    unansweredQuestions(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        businessId: string;
        question: string;
        askedAt: Date;
    }[]>;
}
