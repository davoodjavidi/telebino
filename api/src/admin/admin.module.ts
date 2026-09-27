import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller.js";
import { AdminService } from "./admin.service.js";
import { ContactModule } from "../contact/contact.module.js";

@Module({
  imports: [ContactModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
