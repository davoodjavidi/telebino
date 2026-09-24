import { Matches } from "class-validator";

export class AddMemberDto {
  @Matches(/^09\d{9}$/, { message: "شماره موبایل معتبر نیست (مثال: 09123456789)" })
  phone!: string;
}
