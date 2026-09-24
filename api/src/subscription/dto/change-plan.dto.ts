import { IsIn } from "class-validator";

export class ChangePlanDto {
  @IsIn(["STARTER", "BUSINESS", "PRO"])
  planTier!: "STARTER" | "BUSINESS" | "PRO";
}
