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
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { BotsService } from "./bots.service.js";
import { CreateBotDto } from "./dto/create-bot.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
let BotsController = class BotsController {
    bots;
    constructor(bots) {
        this.bots = bots;
    }
    list(businessId) {
        return this.bots.list(businessId);
    }
    create(businessId, dto) {
        return this.bots.create(businessId, dto.token);
    }
    toggle(businessId, id, body) {
        return this.bots.toggleActive(businessId, id, body.isActive);
    }
    remove(businessId, id) {
        return this.bots.remove(businessId, id);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BotsController.prototype, "list", null);
__decorate([
    Post(),
    UseGuards(OwnerOnlyGuard),
    __param(0, CurrentBusinessId()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateBotDto]),
    __metadata("design:returntype", void 0)
], BotsController.prototype, "create", null);
__decorate([
    Patch(":id/active"),
    UseGuards(OwnerOnlyGuard),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], BotsController.prototype, "toggle", null);
__decorate([
    Delete(":id"),
    UseGuards(OwnerOnlyGuard),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BotsController.prototype, "remove", null);
BotsController = __decorate([
    Controller("bots"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [BotsService])
], BotsController);
export { BotsController };
//# sourceMappingURL=bots.controller.js.map