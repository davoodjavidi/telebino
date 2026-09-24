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
let AdminController = class AdminController {
    admin;
    constructor(admin) {
        this.admin = admin;
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
AdminController = __decorate([
    Controller("admin"),
    UseGuards(AdminAuthGuard),
    __metadata("design:paramtypes", [AdminService])
], AdminController);
export { AdminController };
//# sourceMappingURL=admin.controller.js.map