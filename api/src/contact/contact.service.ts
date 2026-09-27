import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateContactMessageDto } from "./dto/create-contact-message.dto.js";

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ website, ...dto }: CreateContactMessageDto) {
    // Pretend success for honeypot hits so bots don't learn to adapt.
    if (website) return { sent: true };

    await this.prisma.contactMessage.create({
      data: {
        ...dto,
        name: dto.name.trim(),
        email: dto.email?.trim() || null,
        message: dto.message.trim(),
      },
    });
    return { sent: true };
  }

  list() {
    return this.prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 500 });
  }

  async setRead(id: string, isRead: boolean) {
    const existing = await this.prisma.contactMessage.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException("پیام پیدا نشد");
    return this.prisma.contactMessage.update({ where: { id }, data: { isRead } });
  }
}
