import { Module } from "@nestjs/common";
import { CourseLessonsController } from "./course-lessons.controller.js";
import { CourseLessonsService } from "./course-lessons.service.js";
import { ArvanVideoModule } from "../arvan-video/arvan-video.module.js";

@Module({
  imports: [ArvanVideoModule],
  controllers: [CourseLessonsController],
  providers: [CourseLessonsService],
})
export class CourseLessonsModule {}
