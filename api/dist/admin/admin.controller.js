var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { AdminService } from "./admin.service.js";
import { UpdateBusinessDto } from "./dto/update-business.dto.js";
import { AdminAuthGuard } from "../common/guards/admin-auth.guard.js";
import { ContactService } from "../contact/contact.service.js";
import { UpdateContactMessageDto } from "./dto/update-contact-message.dto.js";
let AdminController = class AdminController {
    admin;
    contact;
    constructor(admin, contact) {
        this.admin = admin;
        this.contact = contact;
    }
    listBusinesses() {
        return this.admin.listBusinesses();
    }
    updateBusiness(id, dto) {
        return this.admin.updateBusiness(id, dto);
    }
    stats() {
        return this.admin.platformStats();
    }
    listContactMessages() {
        return this.contact.list();
    }
    updateContactMessage(id, dto) {
        return this.contact.setRead(id, dto.isRead);
    }
};
__decorate([
    Get("businesses"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "listBusinesses", null);
__decorate([
    Patch("businesses/:id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBusinessDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateBusiness", null);
__decorate([
    Get("stats"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "stats", null);
__decorate([
    Get("contact-messages"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "listContactMessages", null);
__decorate([
    Patch("contact-messages/:id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateContactMessageDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateContactMessage", null);
AdminController = __decorate([
    Controller("admin"),
    UseGuards(AdminAuthGuard),
    __metadata("design:paramtypes", [AdminService,
        ContactService])
], AdminController);
export { AdminController };
//# sourceMappingURL=admin.controller.js.map