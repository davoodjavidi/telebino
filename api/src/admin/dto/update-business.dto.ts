import { IsBoolean, IsIn, IsOptional } from "class-validator";

export class UpdateBusinessDto {
  @IsOptional()
  @IsIn(["STARTER", "BUSINESS", "PRO"])
  planTier?: "STARTER" | "BUSINESS" | "PRO";

  @IsOptional()
  @IsBoolean()
  isSubscriptionActive?: boolean;
}
