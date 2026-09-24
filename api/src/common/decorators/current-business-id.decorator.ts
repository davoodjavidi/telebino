import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { Request } from "express";
import type { AuthPayload } from "../guards/jwt-auth.guard.js";

/** Shorthand for @CurrentUser() user => user.businessId — every module scopes queries by this. */
export const CurrentBusinessId = createParamDecorator((_data: unknown, ctx: ExecutionContext): string => {
  const request = ctx.switchToHttp().getRequest<Request & { user: AuthPayload }>();
  return request.user.businessId;
});
