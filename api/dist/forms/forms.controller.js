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
import { FormsService } from "./forms.service.js";
import { UpsertFormDto } from "./dto/upsert-form.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
let FormsController = class FormsController {
    forms;
    constructor(forms) {
        this.forms = forms;
    }
    list(businessId) {
        return this.forms.list(businessId);
    }
    get(businessId, id) {
        return this.forms.get(businessId, id);
    }
    submissions(businessId, id) {
        return this.forms.submissions(businessId, id);
    }
    create(businessId, dto) {
        return this.forms.create(businessId, dto);
    }
    update(businessId, id, dto) {
        return this.forms.update(businessId, id, dto);
    }
    remove(businessId, id) {
        return this.forms.remove(businessId, id);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "list", null);
__decorate([
    Get(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "get", null);
__decorate([
    Get(":id/submissions"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "submissions", null);
__decorate([
    Post(),
    __param(0, CurrentBusinessId()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpsertFormDto]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "create", null);
__decorate([
    Put(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpsertFormDto]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FormsController.prototype, "remove", null);
FormsController = __decorate([
    Controller("forms"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [FormsService])
], FormsController);
export { FormsController };
//# sourceMappingURL=forms.controller.js.map