import { BadRequestException, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { randomUUID } from "node:crypto";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard.js";
import { UploadsService } from "./uploads.service.js";
import { ALLOWED_MIME_TYPES, MAX_IMAGE_SIZE_BYTES, MIME_TO_EXTENSION, UPLOADS_DIR } from "./uploads.constants.js";

@Controller("uploads")
@UseGuards(JwtAuthGuard)
export class UploadsController {
  constructor(private readonly uploads: UploadsService) {}

  @Post("image")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: UPLOADS_DIR,
        filename: (_req, file, cb) => {
          const ext = MIME_TO_EXTENSION[file.mimetype] ?? "";
          cb(null, `${randomUUID()}${ext}`);
        },
      }),
      limits: { fileSize: MAX_IMAGE_SIZE_BYTES },
      fileFilter: (_req, file, cb) => {
        if (!ALLOWED_MIME_TYPES.includes(file.mimetype as (typeof ALLOWED_MIME_TYPES)[number])) {
          cb(new BadRequestException("فرمت فایل مجاز نیست (فقط jpg/png/webp)"), false);
          return;
        }
        cb(null, true);
      },
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("فایلی ارسال نشد");
    return { url: this.uploads.publicUrlFor(file.filename) };
  }
}
