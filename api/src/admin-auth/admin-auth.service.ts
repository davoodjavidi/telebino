import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";
import { ADMIN_JWT_SERVICE } from "../common/admin-jwt.token.js";

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(ADMIN_JWT_SERVICE) private readonly adminJwt: JwtService,
  ) {}

  async login(email: string, password: string) {
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

  async me(id: string) {
    const admin = await this.prisma.adminUser.findUniqueOrThrow({ where: { id } });
    return { id: admin.id, email: admin.email, name: admin.name };
  }
}
