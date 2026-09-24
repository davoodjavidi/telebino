import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpsertProductDto } from "./dto/upsert-product.dto.js";
import type { Prisma } from "../generated/prisma/client.js";

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  list(businessId: string) {
    return this.prisma.product.findMany({
      where: { businessId },
      orderBy: { createdAt: "desc" },
    });
  }

  async create(businessId: string, dto: UpsertProductDto) {
    return this.prisma.product.create({
      data: { ...dto, attributes: dto.attributes as Prisma.InputJsonValue, businessId },
    });
  }

  async update(businessId: string, id: string, dto: UpsertProductDto) {
    await this.assertOwned(businessId, id);
    return this.prisma.product.update({
      where: { id },
      data: { ...dto, attributes: dto.attributes as Prisma.InputJsonValue },
    });
  }

  async remove(businessId: string, id: string) {
    await this.assertOwned(businessId, id);
    await this.prisma.product.delete({ where: { id } });
    return { deleted: true };
  }

  private async assertOwned(businessId: string, id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product || product.businessId !== businessId) {
      throw new NotFoundException("محصول پیدا نشد");
    }
  }
}
