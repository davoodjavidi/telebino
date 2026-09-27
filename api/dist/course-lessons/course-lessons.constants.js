import { join } from "node:path";
export const VIDEO_TMP_DIR = join(process.cwd(), "uploads", "tmp-video");
export const MAX_VIDEO_SIZE_BYTES = 500 * 1024 * 1024;
export const ALLOWED_VIDEO_MIME_TYPES = ["video/mp4", "video/quicktime", "video/x-matroska", "video/webm"];
export const VIDEO_MIME_TO_EXTENSION = {
    "video/mp4": ".mp4",
    "video/quicktime": ".mov",
    "video/x-matroska": ".mkv",
    "video/webm": ".webm",
};
//# sourceMappingURL=course-lessons.constants.js.map