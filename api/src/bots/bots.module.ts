import { Module } from "@nestjs/common";
import { BotsController } from "./bots.controller.js";
import { BotsService } from "./bots.service.js";
import { BotRuntimeService } from "./bot-runtime.service.js";
import { CustomersModule } from "../customers/customers.module.js";
import { FormsModule } from "../forms/forms.module.js";
import { LookupModule } from "../lookup/lookup.module.js";
import { UploadsModule } from "../uploads/uploads.module.js";
import { ArvanVideoModule } from "../arvan-video/arvan-video.module.js";

@Module({
  imports: [CustomersModule, FormsModule, LookupModule, UploadsModule, ArvanVideoModule],
  controllers: [BotsController],
  providers: [BotsService, BotRuntimeService],
  exports: [BotRuntimeService],
})
export class BotsModule {}
