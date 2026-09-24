var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { AdminAuthController } from "./admin-auth.controller.js";
import { AdminAuthService } from "./admin-auth.service.js";
import { AdminAuthGuard } from "../common/guards/admin-auth.guard.js";
import { ADMIN_JWT_SERVICE } from "../common/admin-jwt.token.js";
let AdminAuthModule = class AdminAuthModule {
};
AdminAuthModule = __decorate([
    Global(),
    Module({
        imports: [ConfigModule],
        controllers: [AdminAuthController],
        providers: [
            AdminAuthService,
            AdminAuthGuard,
            {
                provide: ADMIN_JWT_SERVICE,
                inject: [ConfigService],
                useFactory: (config) => new JwtService({
                    secret: config.get("ADMIN_JWT_SECRET"),
                    signOptions: {
                        expiresIn: (config.get("ADMIN_JWT_EXPIRES_IN") ?? "1d"),
                    },
                }),
            },
        ],
        exports: [ADMIN_JWT_SERVICE, AdminAuthGuard],
    })
], AdminAuthModule);
export { AdminAuthModule };
//# sourceMappingURL=admin-auth.module.js.map