import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { LessonStatus } from "../generated/prisma/enums.js";
import { ARVAN_VIDEO_DEFAULT_BASE_URL, TUS_RESUMABLE_VERSION } from "./arvan-video.constants.js";

export interface ArvanUploadResult {
  arvanVideoId: string;
}

export interface ArvanVideoStatus {
  status: LessonStatus;
  durationSeconds: number | null;
}

/**
 * Talks to ArvanCloud's Video Platform (VOD). Endpoint paths, the TUS-based
 * upload flow, and the base URL below are taken directly from ArvanCloud's
 * official PHP SDK source (github.com/arvancloud/vodapisdk — src/Config/Routes.php,
 * src/Api/V2_0/File.php, src/Configuration.php), read file-by-file since the
 * hosted docs (docs.arvancloud.ir) redirect-loop from this environment and
 * couldn't be fetched.
 *
 * Two things could NOT be confirmed from any reachable source and are
 * handled defensively rather than guessed:
 *  - The exact JSON field name(s) ArvanCloud uses for a video's playable
 *    URL. `extractPlaybackUrl` below probes a list of plausible field names
 *    and throws a clear, loud error (with the raw response logged) if none
 *    match, instead of silently returning something wrong.
 *  - Secure/expiring signed-link generation (`secure_link_key` signing
 *    algorithm). NOT implemented — `getPlaybackUrl` returns whatever plain
 *    URL ArvanCloud's API reports. Access control for course videos is
 *    enforced at delivery time (CourseAccess lookup before we ever send the
 *    link to a student), not by the video URL being unguessable — treat the
 *    URL itself as visible-if-leaked, not secret.
 *
 * Uses a single, pre-created ArvanCloud "channel" shared by the whole
 * Telebino platform (its id is ARVAN_VIDEO_CHANNEL_ID) rather than
 * provisioning one channel per business — course videos don't need
 * per-tenant channel settings, and this avoids building channel-management
 * UI that business owners would never need to touch.
 */
@Injectable()
export class ArvanVideoService {
  private readonly logger = new Logger(ArvanVideoService.name);

  constructor(private readonly config: ConfigService) {}

  private get apiKey(): string {
    const key = this.config.get<string>("ARVAN_VIDEO_API_KEY");
    if (!key) {
      throw new InternalServerErrorException(
        "سرویس ویدیو پیکربندی نشده است (ARVAN_VIDEO_API_KEY تنظیم نشده)",
      );
    }
    return key;
  }

  private get channelId(): string {
    const id = this.config.get<string>("ARVAN_VIDEO_CHANNEL_ID");
    if (!id) {
      throw new InternalServerErrorException(
        "سرویس ویدیو پیکربندی نشده است (ARVAN_VIDEO_CHANNEL_ID تنظیم نشده)",
      );
    }
    return id;
  }

  private get baseUrl(): string {
    return this.config.get<string>("ARVAN_VIDEO_BASE_URL") ?? ARVAN_VIDEO_DEFAULT_BASE_URL;
  }

  /** Uploads a local video file to ArvanCloud and registers it as a video in our shared channel. */
  async uploadVideo(localFilePath: string, title: string, mimeType: string): Promise<ArvanUploadResult> {
    const fileId = await this.createFileAndUploadBytes(localFilePath, mimeType);
    const arvanVideoId = await this.registerVideo(fileId, title);
    return { arvanVideoId };
  }

  /** Polls ArvanCloud for a video's processing status. */
  async getStatus(arvanVideoId: string): Promise<ArvanVideoStatus> {
    const body = await this.request<Record<string, unknown>>(`/videos/${arvanVideoId}`, { method: "GET" });
    const data = (body.data ?? body) as Record<string, unknown>;
    return {
      status: this.normalizeStatus(data.status),
      durationSeconds: typeof data.duration === "number" ? Math.round(data.duration) : null,
    };
  }

  /**
   * Returns a playable URL for a video. Fetches fresh from ArvanCloud every
   * time (rather than caching a URL we extracted once) so that if/when real
   * secure-link signing is added, signing can happen here at request time.
   */
  async getPlaybackUrl(arvanVideoId: string): Promise<string> {
    const body = await this.request<Record<string, unknown>>(`/videos/${arvanVideoId}`, { method: "GET" });
    const data = (body.data ?? body) as Record<string, unknown>;
    const url = this.extractPlaybackUrl(data);
    if (!url) {
      this.logger.error(`Could not find a playback URL field on Arvan video response: ${JSON.stringify(body)}`);
      throw new InternalServerErrorException("پخش این ویدیو در حال حاضر امکان‌پذیر نیست");
    }
    return url;
  }

  /** Field name unconfirmed from docs — probes plausible candidates, logs+throws if none match (see class comment). */
  private extractPlaybackUrl(data: Record<string, unknown>): string | null {
    const candidates = ["public_url", "player_url", "play_url", "embed_url", "hls_url", "url"];
    for (const key of candidates) {
      const value = data[key];
      if (typeof value === "string" && value.length > 0) return value;
    }
    return null;
  }

  private normalizeStatus(raw: unknown): LessonStatus {
    const text = typeof raw === "string" ? raw.toLowerCase() : "";
    if (text.includes("complete") || text.includes("ready") || text.includes("success")) return LessonStatus.READY;
    if (text.includes("fail") || text.includes("error")) return LessonStatus.FAILED;
    return LessonStatus.PROCESSING;
  }

  private async createFileAndUploadBytes(localFilePath: string, mimeType: string): Promise<string> {
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

  private async registerVideo(fileId: string, title: string): Promise<string> {
    const body = await this.request<Record<string, unknown>>(`/channels/${this.channelId}/videos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, file_id: fileId, convert_mode: "auto" }),
    });
    const data = (body.data ?? body) as Record<string, unknown>;
    const id = data.id ?? data.uuid;
    if (typeof id !== "string") {
      this.logger.error(`Could not find video id in Arvan response: ${JSON.stringify(body)}`);
      throw new InternalServerErrorException("ثبت ویدیو با خطا مواجه شد");
    }
    return id;
  }

  private authHeader(): string {
    return `Apikey ${this.apiKey}`;
  }

  private async rawRequest(path: string, init: RequestInit): Promise<Response> {
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

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const res = await this.rawRequest(path, init);
    return (await res.json()) as T;
  }
}
