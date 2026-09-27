import { IsBoolean } from "class-validator";

export class UpdateContactMessageDto {
  @IsBoolean()
  isRead!: boolean;
}
