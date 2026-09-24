var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { BotsController } from "./bots.controller.js";
import { BotsService } from "./bots.service.js";
import { BotRuntimeService } from "./bot-runtime.service.js";
import { CustomersModule } from "../customers/customers.module.js";
import { FormsModule } from "../forms/forms.module.js";
import { LookupModule } from "../lookup/lookup.module.js";
import { UploadsModule } from "../uploads/uploads.module.js";
let BotsModule = class BotsModule {
};
BotsModule = __decorate([
    Module({
        imports: [CustomersModule, FormsModule, LookupModule, UploadsModule],
        controllers: [BotsController],
        providers: [BotsService, BotRuntimeService],
        exports: [BotRuntimeService],
    })
], BotsModule);
export { BotsModule };
//# sourceMappingURL=bots.module.js.map