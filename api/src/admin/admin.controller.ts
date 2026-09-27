import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { AdminService } from "./admin.service.js";
import { UpdateBusinessDto } from "./dto/update-business.dto.js";
import { AdminAuthGuard } from "../common/guards/admin-auth.guard.js";
import { ContactService } from "../contact/contact.service.js";
import { UpdateContactMessageDto } from "./dto/update-contact-message.dto.js";

@Controller("admin")
@UseGuards(AdminAuthGuard)
export class AdminController {
  constructor(
    private readonly admin: AdminService,
    private readonly contact: ContactService,
  ) {}

  @Get("businesses")
  listBusinesses() {
    return this.admin.listBusinesses();
  }

  @Patch("businesses/:id")
  updateBusiness(@Param("id") id: string, @Body() dto: UpdateBusinessDto) {
    return this.admin.updateBusiness(id, dto);
  }

  @Get("stats")
  stats() {
    return this.admin.platformStats();
  }

  @Get("contact-messages")
  listContactMessages() {
    return this.contact.list();
  }

  @Patch("contact-messages/:id")
  updateContactMessage(@Param("id") id: string, @Body() dto: UpdateContactMessageDto) {
    return this.contact.setRead(id, dto.isRead);
  }
}
