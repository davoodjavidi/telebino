import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import type { Request } from "express";
import { ADMIN_JWT_SERVICE } from "../admin-jwt.token.js";

export interface AdminAuthPayload {
  sub: string;
  email: string;
}

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(@Inject(ADMIN_JWT_SERVICE) private readonly adminJwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const header = request.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

    if (!token) {
      throw new UnauthorizedException("توکن ارسال نشده است");
    }

    try {
      const payload = await this.adminJwt.verifyAsync<AdminAuthPayload>(token);
      (request as Request & { admin: AdminAuthPayload }).admin = payload;
      return true;
    } catch {
      throw new UnauthorizedException("نشست شما منقضی شده، دوباره وارد شوید");
    }
  }
}
