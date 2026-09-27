import { ConfigService } from "@nestjs/config";
import { LessonStatus } from "../generated/prisma/enums.js";
export interface ArvanUploadResult {
    arvanVideoId: string;
}
export interface ArvanVideoStatus {
    status: LessonStatus;
    durationSeconds: number | null;
}
export declare class ArvanVideoService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    private get apiKey();
    private get channelId();
    private get baseUrl();
    uploadVideo(localFilePath: string, title: string, mimeType: string): Promise<ArvanUploadResult>;
    getStatus(arvanVideoId: string): Promise<ArvanVideoStatus>;
    getPlaybackUrl(arvanVideoId: string): Promise<string>;
    private extractPlaybackUrl;
    private normalizeStatus;
    private createFileAndUploadBytes;
    private registerVideo;
    private authHeader;
    private rawRequest;
    private request;
}
