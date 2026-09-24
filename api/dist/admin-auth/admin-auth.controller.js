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
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AdminAuthService } from "./admin-auth.service.js";
import { AdminLoginDto } from "./dto/admin-login.dto.js";
import { AdminAuthGuard } from "../common/guards/admin-auth.guard.js";
import { CurrentAdmin } from "../common/decorators/current-admin.decorator.js";
let AdminAuthController = class AdminAuthController {
    adminAuth;
    constructor(adminAuth) {
        this.adminAuth = adminAuth;
    }
    login(dto) {
        return this.adminAuth.login(dto.email, dto.password);
    }
    me(admin) {
        return this.adminAuth.me(admin.sub);
    }
};
__decorate([
    Post("login"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminLoginDto]),
    __metadata("design:returntype", void 0)
], AdminAuthController.prototype, "login", null);
__decorate([
    Get("me"),
    UseGuards(AdminAuthGuard),
    __param(0, CurrentAdmin()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminAuthController.prototype, "me", null);
AdminAuthController = __decorate([
    Controller("admin/auth"),
    __metadata("design:paramtypes", [AdminAuthService])
], AdminAuthController);
export { AdminAuthController };
//# sourceMappingURL=admin-auth.controller.js.map