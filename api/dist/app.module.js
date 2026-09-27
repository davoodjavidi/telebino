var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ServeStaticModule } from "@nestjs/serve-static";
import { PrismaModule } from "./prisma/prisma.module.js";
import { UploadsModule } from "./uploads/uploads.module.js";
import { UPLOADS_DIR } from "./uploads/uploads.constants.js";
import { ArvanVideoModule } from "./arvan-video/arvan-video.module.js";
import { CourseLessonsModule } from "./course-lessons/course-lessons.module.js";
import { AuthCommonModule } from "./common/auth-common.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { ProductsModule } from "./products/products.module.js";
import { FaqModule } from "./faq/faq.module.js";
import { LookupModule } from "./lookup/lookup.module.js";
import { CustomersModule } from "./customers/customers.module.js";
import { FormsModule } from "./forms/forms.module.js";
import { TeamModule } from "./team/team.module.js";
import { SubscriptionModule } from "./subscription/subscription.module.js";
import { ReportsModule } from "./reports/reports.module.js";
import { BotsModule } from "./bots/bots.module.js";
import { BroadcastModule } from "./broadcast/broadcast.module.js";
import { AdminAuthModule } from "./admin-auth/admin-auth.module.js";
import { AdminModule } from "./admin/admin.module.js";
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({ isGlobal: true }),
            EventEmitterModule.forRoot(),
            ServeStaticModule.forRoot({
                rootPath: UPLOADS_DIR,
                serveRoot: "/uploads",
                useGlobalPrefix: true,
            }),
            PrismaModule,
            AuthCommonModule,
            AuthModule,
            UploadsModule,
            ArvanVideoModule,
            ProductsModule,
            CourseLessonsModule,
            FaqModule,
            LookupModule,
            CustomersModule,
            FormsModule,
            TeamModule,
            SubscriptionModule,
            ReportsModule,
            BotsModule,
            BroadcastModule,
            AdminAuthModule,
            AdminModule,
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map