var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsBoolean, IsIn, IsInt, IsOptional, IsString, ValidateNested, } from "class-validator";
const FIELD_TYPES = ["TEXT", "NUMBER", "PHONE", "SINGLE_CHOICE", "MULTI_CHOICE", "FILE"];
export class FormFieldDto {
    label;
    type;
    required;
    options;
    order;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], FormFieldDto.prototype, "label", void 0);
__decorate([
    IsIn(FIELD_TYPES),
    __metadata("design:type", Object)
], FormFieldDto.prototype, "type", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean)
], FormFieldDto.prototype, "required", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], FormFieldDto.prototype, "options", void 0);
__decorate([
    IsInt(),
    __metadata("design:type", Number)
], FormFieldDto.prototype, "order", void 0);
export class UpsertFormDto {
    title;
    fields;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], UpsertFormDto.prototype, "title", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => FormFieldDto),
    __metadata("design:type", Array)
], UpsertFormDto.prototype, "fields", void 0);
//# sourceMappingURL=upsert-form.dto.js.map