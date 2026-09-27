import { CourseLessonsService } from "./course-lessons.service.js";
import { UpsertCourseLessonDto } from "./dto/upsert-course-lesson.dto.js";
export declare class CourseLessonsController {
    private readonly lessons;
    constructor(lessons: CourseLessonsService);
    list(businessId: string, productId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: import("../generated/prisma/enums.js").LessonStatus;
        durationSeconds: number | null;
    }[]>;
    create(businessId: string, productId: string, dto: UpsertCourseLessonDto, file: Express.Multer.File): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: import("../generated/prisma/enums.js").LessonStatus;
        durationSeconds: number | null;
    }>;
    update(businessId: string, productId: string, id: string, dto: UpsertCourseLessonDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: import("../generated/prisma/enums.js").LessonStatus;
        durationSeconds: number | null;
    }>;
    remove(businessId: string, productId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
