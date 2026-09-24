import { IsOptional, IsString, Matches } from "class-validator";

export class VerifyOtpDto {
  @Matches(/^09\d{9}$/, {
    message: "شماره موبایل معتبر نیست (مثال: 09123456789)",
  })
  phone!: string;

  @Matches(/^\d{5}$/, { message: "کد تایید باید ۵ رقم باشد" })
  code!: string;

  @IsOptional()
  @IsString()
  businessName?: string;
}
