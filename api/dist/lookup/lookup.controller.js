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
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { LookupService } from "./lookup.service.js";
import { UpsertLookupDto } from "./dto/upsert-lookup.dto.js";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
let LookupController = class LookupController {
    lookup;
    constructor(lookup) {
        this.lookup = lookup;
    }
    list(businessId, kind) {
        return this.lookup.list(businessId, kind);
    }
    create(businessId, dto) {
        return this.lookup.create(businessId, dto);
    }
    update(businessId, id, dto) {
        return this.lookup.update(businessId, id, dto);
    }
    remove(businessId, id) {
        return this.lookup.remove(businessId, id);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __param(1, Query("kind")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LookupController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentBusinessId()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpsertLookupDto]),
    __metadata("design:returntype", void 0)
], LookupController.prototype, "create", null);
__decorate([
    Put(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpsertLookupDto]),
    __metadata("design:returntype", void 0)
], LookupController.prototype, "update", null);
__decorate([
    Delete(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LookupController.prototype, "remove", null);
LookupController = __decorate([
    Controller("lookup"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [LookupService])
], LookupController);
export { LookupController };
//# sourceMappingURL=lookup.controller.js.map