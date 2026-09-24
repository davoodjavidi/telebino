import { ProductsService } from "./products.service.js";
import { UpsertProductDto } from "./dto/upsert-product.dto.js";
export declare class ProductsController {
    private readonly products;
    constructor(products: ProductsService);
    list(businessId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
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
}
