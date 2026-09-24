import { OnModuleInit } from "@nestjs/common";
export declare class UploadsService implements OnModuleInit {
    onModuleInit(): Promise<void>;
    publicUrlFor(filename: string): string;
    diskPathFromUrl(imageUrl: string): string;
}
