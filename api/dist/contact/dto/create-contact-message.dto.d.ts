import { type ContactTopic } from "../contact.constants.js";
export declare class CreateContactMessageDto {
    name: string;
    phone: string;
    email?: string;
    topic: ContactTopic;
    message: string;
    website?: string;
}
