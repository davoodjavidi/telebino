var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ArvanVideoService_1;
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { LessonStatus } from "../generated/prisma/enums.js";
import { ARVAN_VIDEO_DEFAULT_BASE_URL, TUS_RESUMABLE_VERSION } from "./arvan-video.constants.js";
let ArvanVideoService = ArvanVideoService_1 = class ArvanVideoService {
    config;
    logger = new Logger(ArvanVideoService_1.name);
    constructor(config) {
        this.config = config;
    }
    get apiKey() {
        const key = this.config.get("ARVAN_VIDEO_API_KEY");
        if (!key) {
            throw new InternalServerErrorException("سرویس ویدیو پیکربندی نشده است (ARVAN_VIDEO_API_KEY تنظیم نشده)");
        }
        return key;
    }
    get channelId() {
        const id = this.config.get("ARVAN_VIDEO_CHANNEL_ID");
        if (!id) {
            throw new InternalServerErrorException("سرویس ویدیو پیکربندی نشده است (ARVAN_VIDEO_CHANNEL_ID تنظیم نشده)");
        }
        return id;
    }
    get baseUrl() {
        return this.config.get("ARVAN_VIDEO_BASE_URL") ?? ARVAN_VIDEO_DEFAULT_BASE_URL;
    }
    async uploadVideo(localFilePath, title, mimeType) {
        const fileId = await this.createFileAndUploadBytes(localFilePath, mimeType);
        const arvanVideoId = await this.registerVideo(fileId, title);
        return { arvanVideoId };
    }
    async getStatus(arvanVideoId) {
        const body = await this.request(`/videos/${arvanVideoId}`, { method: "GET" });
        const data = (body.data ?? body);
        return {
            status: this.normalizeStatus(data.status),
            durationSeconds: typeof data.duration === "number" ? Math.round(data.duration) : null,
        };
    }
    async getPlaybackUrl(arvanVideoId) {
        const body = await this.request(`/videos/${arvanVideoId}`, { method: "GET" });
        const data = (body.data ?? body);
        const url = this.extractPlaybackUrl(data);
        if (!url) {
            this.logger.error(`Could not find a playback URL field on Arvan video response: ${JSON.stringify(body)}`);
            throw new InternalServerErrorException("پخش این ویدیو در حال حاضر امکان‌پذیر نیست");
        }
        return url;
    }
    extractPlaybackUrl(data) {
        const candidates = ["public_url", "player_url", "play_url", "embed_url", "hls_url", "url"];
        for (const key of candidates) {
            const value = data[key];
            if (typeof value === "string" && value.length > 0)
                return value;
        }
        return null;
    }
    normalizeStatus(raw) {
        const text = typeof raw === "string" ? raw.toLowerCase() : "";
        if (text.includes("complete") || text.includes("ready") || text.includes("success"))
            return LessonStatus.READY;
        if (text.includes("fail") || text.includes("error"))
            return LessonStatus.FAILED;
        return LessonStatus.PROCESSING;
    }
    async createFileAndUploadBytes(localFilePath, mimeType) {
        const fileBytes = await readFile(localFilePath);
        const filename = basename(localFilePath);
        const createRes = await this.rawRequest(`/channels/${this.channelId}/files`, {
            method: "POST",
            headers: {
                "tus-resumable": TUS_RESUMABLE_VERSION,
                "upload-length": String(fileBytes.byteLength),
                "upload-metadata": [
                    `filename ${Buffer.from(filename).toString("base64")}`,
                    `filetype ${Buffer.from(mimeType).toString("base64")}`,
                ].join(","),
            },
        });
        const location = createRes.headers.get("location");
        if (!location) {
            throw new InternalServerErrorException("آپلود ویدیو با خطا مواجه شد (بدون آدرس بارگذاری)");
        }
        const uploadUrl = new URL(location, this.baseUrl).toString();
        const fileId = uploadUrl.split("/").filter(Boolean).pop();
        if (!fileId) {
            throw new InternalServerErrorException("آپلود ویدیو با خطا مواجه شد (شناسه فایل نامعتبر)");
        }
        const patchRes = await fetch(uploadUrl, {
            method: "PATCH",
            headers: {
                Authorization: this.authHeader(),
                "tus-resumable": TUS_RESUMABLE_VERSION,
                "upload-offset": "0",
                "Content-Type": "application/offset+octet-stream",
            },
            body: fileBytes,
        });
        if (!patchRes.ok) {
            const text = await patchRes.text().catch(() => "");
            this.logger.error(`Arvan file upload failed: ${patchRes.status} ${text}`);
            throw new InternalServerErrorException("آپلود ویدیو با خطا مواجه شد");
        }
        return fileId;
    }
    async registerVideo(fileId, title) {
        const body = await this.request(`/channels/${this.channelId}/videos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, file_id: fileId, convert_mode: "auto" }),
        });
        const data = (body.data ?? body);
        const id = data.id ?? data.uuid;
        if (typeof id !== "string") {
            this.logger.error(`Could not find video id in Arvan response: ${JSON.stringify(body)}`);
            throw new InternalServerErrorException("ثبت ویدیو با خطا مواجه شد");
        }
        return id;
    }
    authHeader() {
        return `Apikey ${this.apiKey}`;
    }
    async rawRequest(path, init) {
        const res = await fetch(`${this.baseUrl}${path}`, {
            ...init,
            headers: { Authorization: this.authHeader(), ...init.headers },
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            this.logger.error(`Arvan API error on ${path}: ${res.status} ${text}`);
            throw new InternalServerErrorException("ارتباط با سرویس ویدیو با خطا مواجه شد");
        }
        return res;
    }
    async request(path, init) {
        const res = await this.rawRequest(path, init);
        return (await res.json());
    }
};
ArvanVideoService = ArvanVideoService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], ArvanVideoService);
export { ArvanVideoService };
//# sourceMappingURL=arvan-video.service.js.map