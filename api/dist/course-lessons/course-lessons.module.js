var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { CourseLessonsController } from "./course-lessons.controller.js";
import { CourseLessonsService } from "./course-lessons.service.js";
import { ArvanVideoModule } from "../arvan-video/arvan-video.module.js";
let CourseLessonsModule = class CourseLessonsModule {
};
CourseLessonsModule = __decorate([
    Module({
        imports: [ArvanVideoModule],
        controllers: [CourseLessonsController],
        providers: [CourseLessonsService],
    })
], CourseLessonsModule);
export { CourseLessonsModule };
//# sourceMappingURL=course-lessons.module.js.map