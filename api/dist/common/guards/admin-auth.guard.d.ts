import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
export interface AdminAuthPayload {
    sub: string;
    email: string;
}
export declare class AdminAuthGuard implements CanActivate {
    private readonly adminJwt;
    constructor(adminJwt: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
