import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertProductDto } from "./dto/upsert-product.dto.js";
import type { Prisma } from "../generated/prisma/client.js";
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(businessId: string): Prisma.PrismaPromise<{
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number | null;
        imageUrl: string | null;
        attributes: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
    create(businessId: string, dto: UpsertProductDto): Promise<{
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number | null;
        imageUrl: string | null;
        attributes: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    update(businessId: string, id: string, dto: UpsertProductDto): Promise<{
        id: string;
        businessId: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        price: number | null;
        imageUrl: string | null;
        attributes: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    remove(businessId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    private assertOwned;
}
