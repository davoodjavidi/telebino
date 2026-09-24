import { Injectable, OnModuleInit } from "@nestjs/common";
import { mkdir } from "node:fs/promises";
import { basename, join } from "node:path";
import { UPLOADS_DIR } from "./uploads.constants.js";

@Injectable()
export class UploadsService implements OnModuleInit {
  async onModuleInit() {
    await mkdir(UPLOADS_DIR, { recursive: true });
  }

  /** Absolute, publicly-fetchable URL for a file just saved into UPLOADS_DIR. */
  publicUrlFor(filename: string): string {
    const base = process.env.PUBLIC_API_URL ?? `http://localhost:${process.env.PORT ?? 4000}/api`;
    return `${base}/uploads/${filename}`;
  }

  /**
   * Maps a stored Product.imageUrl back to a local disk path (the bot runtime
   * reads the bytes to send as a Telegram photo). basename() strips any
   * directory component, so a tampered imageUrl can't escape UPLOADS_DIR.
   */
  diskPathFromUrl(imageUrl: string): string {
    return join(UPLOADS_DIR, basename(new URL(imageUrl).pathname));
  }
}
