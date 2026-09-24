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
import bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";
import { ADMIN_JWT_SERVICE } from "../common/admin-jwt.token.js";
let AdminAuthService = class AdminAuthService {
    prisma;
    adminJwt;
    constructor(prisma, adminJwt) {
        this.prisma = prisma;
        this.adminJwt = adminJwt;
    }
    async login(email, password) {
        const admin = await this.prisma.adminUser.findUnique({ where: { email } });
        if (!admin) {
            throw new UnauthorizedException("ایمیل یا رمز عبور اشتباه است");
        }
        const valid = await bcrypt.compare(password, admin.passwordHash);
        if (!valid) {
            throw new UnauthorizedException("ایمیل یا رمز عبور اشتباه است");
        }
        const accessToken = await this.adminJwt.signAsync({ sub: admin.id, email: admin.email });
        return { accessToken, admin: { id: admin.id, email: admin.email, name: admin.name } };
    }
    async me(id) {
        const admin = await this.prisma.adminUser.findUniqueOrThrow({ where: { id } });
        return { id: admin.id, email: admin.email, name: admin.name };
    }
};
AdminAuthService = __decorate([
    Injectable(),
    __param(1, Inject(ADMIN_JWT_SERVICE)),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AdminAuthService);
export { AdminAuthService };
//# sourceMappingURL=admin-auth.service.js.map