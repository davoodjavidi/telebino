import { PrismaService } from "../prisma/prisma.service.js";
import { ArvanVideoService } from "../arvan-video/arvan-video.service.js";
import { LessonStatus } from "../generated/prisma/enums.js";
import type { UpsertCourseLessonDto } from "./dto/upsert-course-lesson.dto.js";
export declare class CourseLessonsService {
    private readonly prisma;
    private readonly arvanVideo;
    constructor(prisma: PrismaService, arvanVideo: ArvanVideoService);
    list(businessId: string, productId: string): Promise<{
        id: string;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: LessonStatus;
        durationSeconds: number | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createWithUpload(businessId: string, productId: string, dto: UpsertCourseLessonDto, localFilePath: string, mimeType: string): Promise<{
        id: string;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: LessonStatus;
        durationSeconds: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(businessId: string, productId: string, id: string, dto: UpsertCourseLessonDto): Promise<{
        id: string;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: LessonStatus;
        durationSeconds: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(businessId: string, productId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    private assertProductOwned;
    private assertLessonOwned;
}
