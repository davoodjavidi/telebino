import { join } from "node:path";
export const UPLOADS_DIR = join(process.cwd(), "uploads");
export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
export const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const MIME_TO_EXTENSION = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
};
//# sourceMappingURL=uploads.constants.js.map