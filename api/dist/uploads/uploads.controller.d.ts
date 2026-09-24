import { UploadsService } from "./uploads.service.js";
export declare class UploadsController {
    private readonly uploads;
    constructor(uploads: UploadsService);
    upload(file: Express.Multer.File): {
        url: string;
    };
}
