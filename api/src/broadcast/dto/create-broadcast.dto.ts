import { IsOptional, IsString, IsUrl } from "class-validator";

export class CreateBroadcastDto {
  @IsString()
  text!: string;

  @IsOptional()
  @IsUrl()
  mediaUrl?: string;
}
