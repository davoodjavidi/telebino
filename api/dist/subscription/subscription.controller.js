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
import { SubscriptionService } from "./subscription.service.js";
import { ChangePlanDto } from "./dto/change-plan.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "../common/guards/owner-only.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
let SubscriptionController = class SubscriptionController {
    subscription;
    constructor(subscription) {
        this.subscription = subscription;
    }
    getStatus(businessId) {
        return this.subscription.getStatus(businessId);
    }
    changePlan(businessId, dto) {
        return this.subscription.changePlan(businessId, dto.planTier);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubscriptionController.prototype, "getStatus", null);
__decorate([
    Post("plan"),
    UseGuards(OwnerOnlyGuard),
    __param(0, CurrentBusinessId()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ChangePlanDto]),
    __metadata("design:returntype", void 0)
], SubscriptionController.prototype, "changePlan", null);
SubscriptionController = __decorate([
    Controller("subscription"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [SubscriptionService])
], SubscriptionController);
export { SubscriptionController };
//# sourceMappingURL=subscription.controller.js.map