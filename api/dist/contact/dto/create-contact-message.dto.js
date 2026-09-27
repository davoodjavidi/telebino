var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsIn, IsOptional, IsString, Length, Matches } from "class-validator";
import { CONTACT_TOPICS } from "../contact.constants.js";
export class CreateContactMessageDto {
    name;
    phone;
    email;
    topic;
    message;
    website;
}
__decorate([
    IsString(),
    Length(2, 80, { message: "نام باید بین ۲ تا ۸۰ کاراکتر باشد" }),
    __metadata("design:type", String)
], CreateContactMessageDto.prototype, "name", void 0);
__decorate([
    Matches(/^09\d{9}$/, { message: "شماره موبایل معتبر نیست" }),
    __metadata("design:type", String)
], CreateContactMessageDto.prototype, "phone", void 0);
__decorate([
    IsOptional(),
    IsEmail({}, { message: "ایمیل معتبر نیست" }),
    __metadata("design:type", String)
], CreateContactMessageDto.prototype, "email", void 0);
__decorate([
    IsIn(CONTACT_TOPICS, { message: "موضوع پیام معتبر نیست" }),
    __metadata("design:type", String)
], CreateContactMessageDto.prototype, "topic", void 0);
__decorate([
    IsString(),
    Length(10, 2000, { message: "پیام باید بین ۱۰ تا ۲۰۰۰ کاراکتر باشد" }),
    __metadata("design:type", String)
], CreateContactMessageDto.prototype, "message", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateContactMessageDto.prototype, "website", void 0);
//# sourceMappingURL=create-contact-message.dto.js.map