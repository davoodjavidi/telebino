import { IsEmail, IsIn, IsOptional, IsString, Length, Matches } from "class-validator";
import { CONTACT_TOPICS, type ContactTopic } from "../contact.constants.js";

export class CreateContactMessageDto {
  @IsString()
  @Length(2, 80, { message: "نام باید بین ۲ تا ۸۰ کاراکتر باشد" })
  name!: string;

  @Matches(/^09\d{9}$/, { message: "شماره موبایل معتبر نیست" })
  phone!: string;

  @IsOptional()
  @IsEmail({}, { message: "ایمیل معتبر نیست" })
  email?: string;

  @IsIn(CONTACT_TOPICS, { message: "موضوع پیام معتبر نیست" })
  topic!: ContactTopic;

  @IsString()
  @Length(10, 2000, { message: "پیام باید بین ۱۰ تا ۲۰۰۰ کاراکتر باشد" })
  message!: string;

  /** Honeypot — hidden from humans in the form; bots tend to fill it. */
  @IsOptional()
  @IsString()
  website?: string;
}
