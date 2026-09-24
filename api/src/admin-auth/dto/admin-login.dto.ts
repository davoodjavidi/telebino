import { IsEmail, MinLength } from "class-validator";

export class AdminLoginDto {
  @IsEmail({}, { message: "ایمیل معتبر نیست" })
  email!: string;

  @MinLength(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" })
  password!: string;
}
