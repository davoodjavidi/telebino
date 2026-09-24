import { join } from "node:path";

/** Local disk directory uploaded files are written to and served from (see ServeStaticModule in app.module.ts). */
export const UPLOADS_DIR = join(process.cwd(), "uploads");

export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

export const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

/**
 * Maps a validated mimetype to the extension we store the file under.
 * Deliberately NOT derived from the client-supplied original filename —
 * that's attacker-controlled and can claim any extension regardless of the
 * real (mimetype-checked) file content.
 */
export const MIME_TO_EXTENSION: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};
