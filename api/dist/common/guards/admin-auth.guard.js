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
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ADMIN_JWT_SERVICE } from "../admin-jwt.token.js";
let AdminAuthGuard = class AdminAuthGuard {
    adminJwt;
    constructor(adminJwt) {
        this.adminJwt = adminJwt;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const header = request.headers.authorization;
        const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
        if (!token) {
            throw new UnauthorizedException("توکن ارسال نشده است");
        }
        try {
            const payload = await this.adminJwt.verifyAsync(token);
            request.admin = payload;
            return true;
        }
        catch {
            throw new UnauthorizedException("نشست شما منقضی شده، دوباره وارد شوید");
        }
    }
};
AdminAuthGuard = __decorate([
    Injectable(),
    __param(0, Inject(ADMIN_JWT_SERVICE)),
    __metadata("design:paramtypes", [JwtService])
], AdminAuthGuard);
export { AdminAuthGuard };
//# sourceMappingURL=admin-auth.guard.js.map