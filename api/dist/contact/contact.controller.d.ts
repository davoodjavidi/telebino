import { ContactService } from "./contact.service.js";
import { CreateContactMessageDto } from "./dto/create-contact-message.dto.js";
export declare class ContactController {
    private readonly contact;
    constructor(contact: ContactService);
    create(dto: CreateContactMessageDto): Promise<{
        sent: boolean;
    }>;
}
