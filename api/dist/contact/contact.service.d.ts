import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateContactMessageDto } from "./dto/create-contact-message.dto.js";
export declare class ContactService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ website, ...dto }: CreateContactMessageDto): Promise<{
        sent: boolean;
    }>;
    list(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        phone: string;
        topic: string;
        message: string;
        isRead: boolean;
    }[]>;
    setRead(id: string, isRead: boolean): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        phone: string;
        topic: string;
        message: string;
        isRead: boolean;
    }>;
}
