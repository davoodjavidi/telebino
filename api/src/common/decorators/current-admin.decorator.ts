import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { Request } from "express";
import type { AdminAuthPayload } from "../guards/admin-auth.guard.js";

export const CurrentAdmin = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AdminAuthPayload => {
    const request = ctx.switchToHttp().getRequest<Request & { admin: AdminAuthPayload }>();
    return request.admin;
  },
);
