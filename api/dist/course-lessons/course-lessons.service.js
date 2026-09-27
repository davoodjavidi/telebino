var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { unlink } from "node:fs/promises";
import { PrismaService } from "../prisma/prisma.service.js";
import { ArvanVideoService } from "../arvan-video/arvan-video.service.js";
import { LessonStatus } from "../generated/prisma/enums.js";
let CourseLessonsService = class CourseLessonsService {
    prisma;
    arvanVideo;
    constructor(prisma, arvanVideo) {
        this.prisma = prisma;
        this.arvanVideo = arvanVideo;
    }
    async list(businessId, productId) {
        await this.assertProductOwned(businessId, productId);
        const lessons = await this.prisma.courseLesson.findMany({
            where: { productId },
            orderBy: { order: "asc" },
        });
        return Promise.all(lessons.map(async (lesson) => {
            if (lesson.status !== LessonStatus.PROCESSING || !lesson.arvanVideoId)
                return lesson;
            try {
                const { status, durationSeconds } = await this.arvanVideo.getStatus(lesson.arvanVideoId);
                if (status !== lesson.status || durationSeconds !== lesson.durationSeconds) {
                    return await this.prisma.courseLesson.update({
                        where: { id: lesson.id },
                        data: { status, durationSeconds },
                    });
                }
            }
            catch {
            }
            return lesson;
        }));
    }
    async createWithUpload(businessId, productId, dto, localFilePath, mimeType) {
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
        }
        finally {
            await unlink(localFilePath).catch(() => { });
        }
    }
    async update(businessId, productId, id, dto) {
        await this.assertLessonOwned(businessId, productId, id);
        return this.prisma.courseLesson.update({
            where: { id },
            data: { title: dto.title, order: dto.order },
        });
    }
    async remove(businessId, productId, id) {
        await this.assertLessonOwned(businessId, productId, id);
        await this.prisma.courseLesson.delete({ where: { id } });
        return { deleted: true };
    }
    async assertProductOwned(businessId, productId) {
        const product = await this.prisma.product.findUnique({ where: { id: productId } });
        if (!product || product.businessId !== businessId) {
            throw new NotFoundException("محصول پیدا نشد");
        }
        return product;
    }
    async assertLessonOwned(businessId, productId, id) {
        await this.assertProductOwned(businessId, productId);
        const lesson = await this.prisma.courseLesson.findUnique({ where: { id } });
        if (!lesson || lesson.productId !== productId) {
            throw new BadRequestException("درس پیدا نشد");
        }
        return lesson;
    }
};
CourseLessonsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ArvanVideoService])
], CourseLessonsService);
export { CourseLessonsService };
//# sourceMappingURL=course-lessons.service.js.map