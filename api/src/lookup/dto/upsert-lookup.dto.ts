import { IsBoolean, IsIn, IsOptional, IsString } from "class-validator";

export class UpsertLookupDto {
  @IsIn(["ORDER", "ACCESS"])
  kind!: "ORDER" | "ACCESS";

  @IsString()
  identifier!: string;

  @IsString()
  status!: string;

  @IsOptional()
  @IsString()
  customerPhone?: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsBoolean()
  notifyOnUpdate?: boolean;

  @IsOptional()
  @IsString()
  productId?: string;
}
