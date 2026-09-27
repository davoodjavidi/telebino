import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly AdminUser: "AdminUser";
    readonly Business: "Business";
    readonly User: "User";
    readonly Product: "Product";
    readonly CourseLesson: "CourseLesson";
    readonly CourseAccess: "CourseAccess";
    readonly FaqEntry: "FaqEntry";
    readonly LookupEntry: "LookupEntry";
    readonly Customer: "Customer";
    readonly FormDef: "FormDef";
    readonly FormField: "FormField";
    readonly FormSubmission: "FormSubmission";
    readonly Bot: "Bot";
    readonly Broadcast: "Broadcast";
    readonly UnansweredQuestion: "UnansweredQuestion";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const BusinessScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly planTier: "planTier";
    readonly isSubscriptionActive: "isSubscriptionActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly phone: "phone";
    readonly role: "role";
    readonly businessId: "businessId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly imageUrl: "imageUrl";
    readonly attributes: "attributes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const CourseLessonScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly title: "title";
    readonly order: "order";
    readonly arvanVideoId: "arvanVideoId";
    readonly status: "status";
    readonly durationSeconds: "durationSeconds";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CourseLessonScalarFieldEnum = (typeof CourseLessonScalarFieldEnum)[keyof typeof CourseLessonScalarFieldEnum];
export declare const CourseAccessScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly productId: "productId";
    readonly telegramUserId: "telegramUserId";
    readonly grantedAt: "grantedAt";
};
export type CourseAccessScalarFieldEnum = (typeof CourseAccessScalarFieldEnum)[keyof typeof CourseAccessScalarFieldEnum];
export declare const FaqEntryScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly question: "question";
    readonly alternatePhrases: "alternatePhrases";
    readonly answer: "answer";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FaqEntryScalarFieldEnum = (typeof FaqEntryScalarFieldEnum)[keyof typeof FaqEntryScalarFieldEnum];
export declare const LookupEntryScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly kind: "kind";
    readonly identifier: "identifier";
    readonly status: "status";
    readonly customerPhone: "customerPhone";
    readonly customerTelegramUserId: "customerTelegramUserId";
    readonly note: "note";
    readonly notifyOnUpdate: "notifyOnUpdate";
    readonly productId: "productId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LookupEntryScalarFieldEnum = (typeof LookupEntryScalarFieldEnum)[keyof typeof LookupEntryScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly telegramUserId: "telegramUserId";
    readonly telegramUsername: "telegramUsername";
    readonly phone: "phone";
    readonly messageCount: "messageCount";
    readonly blocked: "blocked";
    readonly firstSeenAt: "firstSeenAt";
    readonly lastSeenAt: "lastSeenAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const FormDefScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly title: "title";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FormDefScalarFieldEnum = (typeof FormDefScalarFieldEnum)[keyof typeof FormDefScalarFieldEnum];
export declare const FormFieldScalarFieldEnum: {
    readonly id: "id";
    readonly formId: "formId";
    readonly label: "label";
    readonly type: "type";
    readonly required: "required";
    readonly options: "options";
    readonly order: "order";
};
export type FormFieldScalarFieldEnum = (typeof FormFieldScalarFieldEnum)[keyof typeof FormFieldScalarFieldEnum];
export declare const FormSubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly formId: "formId";
    readonly customerId: "customerId";
    readonly answers: "answers";
    readonly createdAt: "createdAt";
};
export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum];
export declare const BotScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly token: "token";
    readonly telegramBotId: "telegramBotId";
    readonly username: "username";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BotScalarFieldEnum = (typeof BotScalarFieldEnum)[keyof typeof BotScalarFieldEnum];
export declare const BroadcastScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly text: "text";
    readonly mediaUrl: "mediaUrl";
    readonly status: "status";
    readonly sentCount: "sentCount";
    readonly failCount: "failCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BroadcastScalarFieldEnum = (typeof BroadcastScalarFieldEnum)[keyof typeof BroadcastScalarFieldEnum];
export declare const UnansweredQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly question: "question";
    readonly askedAt: "askedAt";
};
export type UnansweredQuestionScalarFieldEnum = (typeof UnansweredQuestionScalarFieldEnum)[keyof typeof UnansweredQuestionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
