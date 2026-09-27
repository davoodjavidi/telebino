import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ContactService } from "./contact.service.js";
import { CreateContactMessageDto } from "./dto/create-contact-message.dto.js";

/** Public endpoint — no auth, used by the website's contact page. */
@Controller("contact")
export class ContactController {
  constructor(private readonly contact: ContactService) {}

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateContactMessageDto) {
    return this.contact.create(dto);
  }
}
