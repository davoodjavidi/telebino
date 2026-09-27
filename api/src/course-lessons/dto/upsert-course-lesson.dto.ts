import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class UpsertCourseLessonDto {
  @IsString()
  title!: string;

  /** @Type() needed because multipart/form-data (course upload) sends this as a string. */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  order?: number;
}
