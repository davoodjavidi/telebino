import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
export interface AuthPayload {
    sub: string;
    phone: string;
    businessId: string;
    role: "OWNER" | "EMPLOYEE";
}
export declare class JwtAuthGuard implements CanActivate {
    private readonly jwt;
    constructor(jwt: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
