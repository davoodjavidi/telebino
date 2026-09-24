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
import { BroadcastService } from "./broadcast.service.js";
import { CreateBroadcastDto } from "./dto/create-broadcast.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
let BroadcastController = class BroadcastController {
    broadcast;
    constructor(broadcast) {
        this.broadcast = broadcast;
    }
    list(businessId) {
        return this.broadcast.list(businessId);
    }
    create(businessId, dto) {
        return this.broadcast.create(businessId, dto);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BroadcastController.prototype, "list", null);
__decorate([
    Post(),
    UseGuards(OwnerOnlyGuard),
    __param(0, CurrentBusinessId()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateBroadcastDto]),
    __metadata("design:returntype", void 0)
], BroadcastController.prototype, "create", null);
BroadcastController = __decorate([
    Controller("broadcast"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [BroadcastService])
], BroadcastController);
export { BroadcastController };
//# sourceMappingURL=broadcast.controller.js.map