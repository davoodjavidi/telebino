import { join } from "node:path";

/** Scratch directory for a video file between the multipart upload and forwarding it to ArvanCloud — cleaned up right after. */
export const VIDEO_TMP_DIR = join(process.cwd(), "uploads", "tmp-video");

export const MAX_VIDEO_SIZE_BYTES = 500 * 1024 * 1024; // 500MB

export const ALLOWED_VIDEO_MIME_TYPES = ["video/mp4", "video/quicktime", "video/x-matroska", "video/webm"] as const;

export const VIDEO_MIME_TO_EXTENSION: Record<string, string> = {
  "video/mp4": ".mp4",
  "video/quicktime": ".mov",
  "video/x-matroska": ".mkv",
  "video/webm": ".webm",
};
