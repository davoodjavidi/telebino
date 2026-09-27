import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { unlink } from "node:fs/promises";
import { PrismaService } from "../prisma/prisma.service.js";
import { ArvanVideoService } from "../arvan-video/arvan-video.service.js";
import { LessonStatus } from "../generated/prisma/enums.js";
import type { UpsertCourseLessonDto } from "./dto/upsert-course-lesson.dto.js";

@Injectable()
export class CourseLessonsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly arvanVideo: ArvanVideoService,
  ) {}

  async list(businessId: string, productId: string) {
    await this.assertProductOwned(businessId, productId);
    const lessons = await this.prisma.courseLesson.findMany({
      where: { productId },
      orderBy: { order: "asc" },
    });

    // Dev-scale: refresh any still-processing lesson's status inline on read
    // rather than via a background worker/webhook (no queue infra exists yet).
    return Promise.all(
      lessons.map(async (lesson) => {
        if (lesson.status !== LessonStatus.PROCESSING || !lesson.arvanVideoId) return lesson;
        try {
          const { status, durationSeconds } = await this.arvanVideo.getStatus(lesson.arvanVideoId);
          if (status !== lesson.status || durationSeconds !== lesson.durationSeconds) {
            return await this.prisma.courseLesson.update({
              where: { id: lesson.id },
              data: { status, durationSeconds },
            });
          }
        } catch {
          // Arvan unreachable/unconfigured — show last-known status instead of failing the whole list.
        }
        return lesson;
      }),
    );
  }

  /** Uploads the already-saved-to-disk video file to ArvanCloud and creates the lesson row. Always cleans up the temp file. */
  async createWithUpload(
    businessId: string,
    productId: string,
    dto: UpsertCourseLessonDto,
    localFilePath: string,
    mimeType: string,
  ) {
    await this.assertProductOwned(businessId, productId);
    try {
      const { arvanVideoId } = await this.arvanVideo.uploadVideo(localFilePath, dto.title, mimeType);
      return await this.prisma.courseLesson.create({
        data: {
          productId,
          title: dto.title,
          order: dto.order ?? 0,
          arvanVideoId,
          status: LessonStatus.PROCESSING,
        },
      });
    } finally {
      await unlink(localFilePath).catch(() => {});
    }
  }

  async update(businessId: string, productId: string, id: string, dto: UpsertCourseLessonDto) {
    await this.assertLessonOwned(businessId, productId, id);
    return this.prisma.courseLesson.update({
      where: { id },
      data: { title: dto.title, order: dto.order },
    });
  }

  async remove(businessId: string, productId: string, id: string) {
    await this.assertLessonOwned(businessId, productId, id);
    await this.prisma.courseLesson.delete({ where: { id } });
    return { deleted: true };
  }

  private async assertProductOwned(businessId: string, productId: string) {
    const product = await this.prisma.product.findUnique({ where: { id: productId } });
    if (!product || product.businessId !== businessId) {
      throw new NotFoundException("محصول پیدا نشد");
    }
    return product;
  }

  private async assertLessonOwned(businessId: string, productId: string, id: string) {
    await this.assertProductOwned(businessId, productId);
    const lesson = await this.prisma.courseLesson.findUnique({ where: { id } });
    if (!lesson || lesson.productId !== productId) {
      throw new BadRequestException("درس پیدا نشد");
    }
    return lesson;
  }
}
