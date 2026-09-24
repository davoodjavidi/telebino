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
import { BadRequestException, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { randomUUID } from "node:crypto";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { UploadsService } from "./uploads.service.js";
import { ALLOWED_MIME_TYPES, MAX_IMAGE_SIZE_BYTES, MIME_TO_EXTENSION, UPLOADS_DIR } from "./uploads.constants.js";
let UploadsController = class UploadsController {
    uploads;
    constructor(uploads) {
        this.uploads = uploads;
    }
    upload(file) {
        if (!file)
            throw new BadRequestException("فایلی ارسال نشد");
        return { url: this.uploads.publicUrlFor(file.filename) };
    }
};
__decorate([
    Post("image"),
    UseInterceptors(FileInterceptor("file", {
        storage: diskStorage({
            destination: UPLOADS_DIR,
            filename: (_req, file, cb) => {
                const ext = MIME_TO_EXTENSION[file.mimetype] ?? "";
                cb(null, `${randomUUID()}${ext}`);
            },
        }),
        limits: { fileSize: MAX_IMAGE_SIZE_BYTES },
        fileFilter: (_req, file, cb) => {
            if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
                cb(new BadRequestException("فرمت فایل مجاز نیست (فقط jpg/png/webp)"), false);
                return;
            }
            cb(null, true);
        },
    })),
    __param(0, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "upload", null);
UploadsController = __decorate([
    Controller("uploads"),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [UploadsService])
], UploadsController);
export { UploadsController };
//# sourceMappingURL=uploads.controller.js.map