import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import type { Request } from "express";
import type { AuthPayload } from "./jwt-auth.guard.js";

/** Must run after JwtAuthGuard — restricts a route to the business OWNER. */
@Injectable()
export class OwnerOnlyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request & { user: AuthPayload }>();
    if (request.user.role !== "OWNER") {
      throw new ForbiddenException("فقط مالک کسب‌وکار به این بخش دسترسی دارد");
    }
    return true;
  }
}
