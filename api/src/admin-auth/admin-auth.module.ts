import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { AdminAuthController } from "./admin-auth.controller.js";
import { AdminAuthService } from "./admin-auth.service.js";
import { AdminAuthGuard } from "../common/guards/admin-auth.guard.js";
import { ADMIN_JWT_SERVICE } from "../common/admin-jwt.token.js";

/**
 * @Global so AdminAuthGuard/ADMIN_JWT_SERVICE are reachable from the
 * separate `admin` feature module without re-declaring this wiring there.
 */
@Global()
@Module({
  imports: [ConfigModule],
  controllers: [AdminAuthController],
  providers: [
    AdminAuthService,
    AdminAuthGuard,
    {
      provide: ADMIN_JWT_SERVICE,
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        new JwtService({
          secret: config.get<string>("ADMIN_JWT_SECRET"),
          signOptions: {
            expiresIn: (config.get<string>("ADMIN_JWT_EXPIRES_IN") ?? "1d") as `${number}d`,
          },
        }),
    },
  ],
  exports: [ADMIN_JWT_SERVICE, AdminAuthGuard],
})
export class AdminAuthModule {}
