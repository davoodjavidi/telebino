import { Module } from "@nestjs/common";
import { ArvanVideoService } from "./arvan-video.service.js";

@Module({
  providers: [ArvanVideoService],
  exports: [ArvanVideoService],
})
export class ArvanVideoModule {}
