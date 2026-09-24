import { IsArray, IsOptional, IsString } from "class-validator";

export class UpsertFaqDto {
  @IsString()
  question!: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alternatePhrases?: string[];

  @IsString()
  answer!: string;
}
