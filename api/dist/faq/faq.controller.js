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
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { FaqService } from "./faq.service.js";
import { UpsertFaqDto } from "./dto/upsert-faq.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
let FaqController = class FaqController {
    faq;
    constructor(faq) {
        this.faq = faq;
    }
    list(businessId) {
        return this.faq.list(businessId);
    }
    create(businessId, dto) {
        return this.faq.create(businessId, dto);
    }
    update(businessId, id, dto) {
        return this.faq.update(businessId, id, dto);
    }
    remove(businessId, id) {
        return this.faq.remove(businessId, id);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentBusinessId()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpsertFaqDto]),
    __metadata("design:returntype", void 0)
], FaqController.prototype, "create", null);
__decorate([
    Put(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpsertFaqDto]),
    __metadata("design:returntype", void 0)
], FaqController.prototype, "update", null);
__decorate([
    Delete(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FaqController.prototype, "remove", null);
FaqController = __decorate([
    Controller("faq"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [FaqService])
], FaqController);
export { FaqController };
//# sourceMappingURL=faq.controller.js.map