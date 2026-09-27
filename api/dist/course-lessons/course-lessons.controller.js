var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
import { CourseLessonsService } from "./course-lessons.service.js";
import { UpsertCourseLessonDto } from "./dto/upsert-course-lesson.dto.js";
import { ALLOWED_VIDEO_MIME_TYPES, MAX_VIDEO_SIZE_BYTES, VIDEO_MIME_TO_EXTENSION, VIDEO_TMP_DIR, } from "./course-lessons.constants.js";
let CourseLessonsController = class CourseLessonsController {
    lessons;
    constructor(lessons) {
        this.lessons = lessons;
    }
    list(businessId, productId) {
        return this.lessons.list(businessId, productId);
    }
    create(businessId, productId, dto, file) {
        if (!file)
            throw new BadRequestException("فایل ویدیو ارسال نشد");
        return this.lessons.createWithUpload(businessId, productId, dto, file.path, file.mimetype);
    }
    update(businessId, productId, id, dto) {
        return this.lessons.update(businessId, productId, id, dto);
    }
    remove(businessId, productId, id) {
        return this.lessons.remove(businessId, productId, id);
    }
};
__decorate([
    Get(),
    __param(0, CurrentBusinessId()),
    __param(1, Param("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CourseLessonsController.prototype, "list", null);
__decorate([
    Post(),
    UseInterceptors(FileInterceptor("file", {
        storage: diskStorage({
            destination: async (_req, _file, cb) => {
                await mkdir(VIDEO_TMP_DIR, { recursive: true });
                cb(null, VIDEO_TMP_DIR);
            },
            filename: (_req, file, cb) => {
                const ext = VIDEO_MIME_TO_EXTENSION[file.mimetype] ?? "";
                cb(null, `${randomUUID()}${ext}`);
            },
        }),
        limits: { fileSize: MAX_VIDEO_SIZE_BYTES },
        fileFilter: (_req, file, cb) => {
            if (!ALLOWED_VIDEO_MIME_TYPES.includes(file.mimetype)) {
                cb(new BadRequestException("فرمت ویدیو مجاز نیست (فقط mp4/mov/mkv/webm)"), false);
                return;
            }
            cb(null, true);
        },
    })),
    __param(0, CurrentBusinessId()),
    __param(1, Param("productId")),
    __param(2, Body()),
    __param(3, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpsertCourseLessonDto, Object]),
    __metadata("design:returntype", void 0)
], CourseLessonsController.prototype, "create", null);
__decorate([
    Put(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("productId")),
    __param(2, Param("id")),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, UpsertCourseLessonDto]),
    __metadata("design:returntype", void 0)
], CourseLessonsController.prototype, "update", null);
__decorate([
    Delete(":id"),
    __param(0, CurrentBusinessId()),
    __param(1, Param("productId")),
    __param(2, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], CourseLessonsController.prototype, "remove", null);
CourseLessonsController = __decorate([
    Controller("products/:productId/lessons"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [CourseLessonsService])
], CourseLessonsController);
export { CourseLessonsController };
//# sourceMappingURL=course-lessons.controller.js.map