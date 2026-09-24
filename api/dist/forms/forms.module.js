var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { FormsController } from "./forms.controller.js";
import { FormsService } from "./forms.service.js";
let FormsModule = class FormsModule {
};
FormsModule = __decorate([
    Module({
        controllers: [FormsController],
        providers: [FormsService],
        exports: [FormsService],
    })
], FormsModule);
export { FormsModule };
//# sourceMappingURL=forms.module.js.map