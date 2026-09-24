import { AdminAuthService } from "./admin-auth.service.js";
import { AdminLoginDto } from "./dto/admin-login.dto.js";
import type { AdminAuthPayload } from "../common/guards/admin-auth.guard.js";
export declare class AdminAuthController {
    private readonly adminAuth;
    constructor(adminAuth: AdminAuthService);
    login(dto: AdminLoginDto): Promise<{
        accessToken: string;
        admin: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    me(admin: AdminAuthPayload): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
