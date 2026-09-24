import { Module } from "@nestjs/common";
import { BroadcastController } from "./broadcast.controller.js";
import { BroadcastService } from "./broadcast.service.js";
import { BotsModule } from "../bots/bots.module.js";

@Module({
  imports: [BotsModule],
  controllers: [BroadcastController],
  providers: [BroadcastService],
})
export class BroadcastModule {}
