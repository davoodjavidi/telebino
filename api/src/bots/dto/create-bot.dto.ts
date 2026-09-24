import { IsString, Matches } from "class-validator";

export class CreateBotDto {
  @IsString()
  @Matches(/^\d+:[A-Za-z0-9_-]+$/, {
    message: "فرمت توکن معتبر نیست — آن را از BotFather کپی کنید",
  })
  token!: string;
}
