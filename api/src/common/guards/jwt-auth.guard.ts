import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import type { Request } from "express";

export interface AuthPayload {
  sub: string;
  phone: string;
  businessId: string;
  role: "OWNER" | "EMPLOYEE";
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const header = request.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

    if (!token) {
      throw new UnauthorizedException("توکن ارسال نشده است");
    }

    try {
      const payload = await this.jwt.verifyAsync<AuthPayload>(token);
      (request as Request & { user: AuthPayload }).user = payload;
      return true;
    } catch {
      throw new UnauthorizedException("نشست شما منقضی شده، دوباره وارد شوید");
    }
  }
}
