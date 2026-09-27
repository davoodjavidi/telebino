var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsIn, IsOptional, IsString } from "class-validator";
export class UpsertLookupDto {
    kind;
    identifier;
    status;
    customerPhone;
    customerTelegramUserId;
    note;
    notifyOnUpdate;
    productId;
}
__decorate([
    IsIn(["ORDER", "ACCESS"]),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "kind", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "identifier", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "customerPhone", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "customerTelegramUserId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "note", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpsertLookupDto.prototype, "notifyOnUpdate", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], UpsertLookupDto.prototype, "productId", void 0);
//# sourceMappingURL=upsert-lookup.dto.js.map