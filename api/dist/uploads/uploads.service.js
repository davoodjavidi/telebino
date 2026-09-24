var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@nestjs/common";
import { mkdir } from "node:fs/promises";
import { basename, join } from "node:path";
import { UPLOADS_DIR } from "./uploads.constants.js";
let UploadsService = class UploadsService {
    async onModuleInit() {
        await mkdir(UPLOADS_DIR, { recursive: true });
    }
    publicUrlFor(filename) {
        const base = process.env.PUBLIC_API_URL ?? `http://localhost:${process.env.PORT ?? 4000}/api`;
        return `${base}/uploads/${filename}`;
    }
    diskPathFromUrl(imageUrl) {
        return join(UPLOADS_DIR, basename(new URL(imageUrl).pathname));
    }
};
UploadsService = __decorate([
    Injectable()
], UploadsService);
export { UploadsService };
//# sourceMappingURL=uploads.service.js.map