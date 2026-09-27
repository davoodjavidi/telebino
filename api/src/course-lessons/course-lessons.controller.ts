import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { CurrentBusinessId } from "../common/decorators/current-business-id.decorator.js";
import { CourseLessonsService } from "./course-lessons.service.js";
import { UpsertCourseLessonDto } from "./dto/upsert-course-lesson.dto.js";
import {
  ALLOWED_VIDEO_MIME_TYPES,
  MAX_VIDEO_SIZE_BYTES,
  VIDEO_MIME_TO_EXTENSION,
  VIDEO_TMP_DIR,
} from "./course-lessons.constants.js";

@Controller("products/:productId/lessons")
@UseGuards(JwtAuthGuard)
export class CourseLessonsController {
  constructor(private readonly lessons: CourseLessonsService) {}

  @Get()
  list(@CurrentBusinessId() businessId: string, @Param("productId") productId: string) {
    return this.lessons.list(businessId, productId);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor("file", {
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
        if (!ALLOWED_VIDEO_MIME_TYPES.includes(file.mimetype as (typeof ALLOWED_VIDEO_MIME_TYPES)[number])) {
          cb(new BadRequestException("فرمت ویدیو مجاز نیست (فقط mp4/mov/mkv/webm)"), false);
          return;
        }
        cb(null, true);
      },
    }),
  )
  create(
    @CurrentBusinessId() businessId: string,
    @Param("productId") productId: string,
    @Body() dto: UpsertCourseLessonDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException("فایل ویدیو ارسال نشد");
    return this.lessons.createWithUpload(businessId, productId, dto, file.path, file.mimetype);
  }

  @Put(":id")
  update(
    @CurrentBusinessId() businessId: string,
    @Param("productId") productId: string,
    @Param("id") id: string,
    @Body() dto: UpsertCourseLessonDto,
  ) {
    return this.lessons.update(businessId, productId, id, dto);
  }

  @Delete(":id")
  remove(
    @CurrentBusinessId() businessId: string,
    @Param("productId") productId: string,
    @Param("id") id: string,
  ) {
    return this.lessons.remove(businessId, productId, id);
  }
}
