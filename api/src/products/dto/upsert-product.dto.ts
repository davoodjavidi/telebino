import { IsInt, IsObject, IsOptional, IsString, Min } from "class-validator";

export class UpsertProductDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  /** Business-type-specific extras: stock/category (shop), grade/subject/accessType (education), duration (consulting) */
  @IsOptional()
  @IsObject()
  attributes?: Record<string, unknown>;
}
