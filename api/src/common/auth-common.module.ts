import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthGuard } from "./guards/jwt-auth.guard.js";
import { OwnerOnlyGuard } from "./guards/owner-only.guard.js";

/** Registered once and marked global so every feature module can @UseGuards(JwtAuthGuard) without re-declaring it. */
@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: (config.get<string>("JWT_EXPIRES_IN") ?? "7d") as `${number}d`,
        },
      }),
    }),
  ],
  providers: [JwtAuthGuard, OwnerOnlyGuard],
  exports: [JwtModule, JwtAuthGuard, OwnerOnlyGuard],
})
export class AuthCommonModule {}
