import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service.js";
import { UpsertProductDto } from "./dto/upsert-product.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";

@Controller("products")
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string) {
    return this.products.list(businessId);
  }

  @Post()
  create(@CurrentBusinessId() businessId: string, @Body() dto: UpsertProductDto) {
    return this.products.create(businessId, dto);
  }

  @Put(":id")
  update(
    @CurrentBusinessId() businessId: string,
    @Param("id") id: string,
    @Body() dto: UpsertProductDto,
  ) {
    return this.products.update(businessId, id, dto);
  }

  @Delete(":id")
  remove(@CurrentBusinessId() businessId: string, @Param("id") id: string) {
    return this.products.remove(businessId, id);
  }
}
