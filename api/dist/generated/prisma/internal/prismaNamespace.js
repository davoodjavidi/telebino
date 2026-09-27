import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    AdminUser: 'AdminUser',
    Business: 'Business',
    User: 'User',
    Product: 'Product',
    CourseLesson: 'CourseLesson',
    CourseAccess: 'CourseAccess',
    FaqEntry: 'FaqEntry',
    LookupEntry: 'LookupEntry',
    Customer: 'Customer',
    FormDef: 'FormDef',
    FormField: 'FormField',
    FormSubmission: 'FormSubmission',
    Bot: 'Bot',
    Broadcast: 'Broadcast',
    UnansweredQuestion: 'UnansweredQuestion',
    ContactMessage: 'ContactMessage'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const AdminUserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt'
};
export const BusinessScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    planTier: 'planTier',
    isSubscriptionActive: 'isSubscriptionActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    role: 'role',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProductScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    attributes: 'attributes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CourseLessonScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    title: 'title',
    order: 'order',
    arvanVideoId: 'arvanVideoId',
    status: 'status',
    durationSeconds: 'durationSeconds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CourseAccessScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    productId: 'productId',
    telegramUserId: 'telegramUserId',
    grantedAt: 'grantedAt'
};
export const FaqEntryScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    question: 'question',
    alternatePhrases: 'alternatePhrases',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const LookupEntryScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    kind: 'kind',
    identifier: 'identifier',
    status: 'status',
    customerPhone: 'customerPhone',
    customerTelegramUserId: 'customerTelegramUserId',
    note: 'note',
    notifyOnUpdate: 'notifyOnUpdate',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CustomerScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    telegramUserId: 'telegramUserId',
    telegramUsername: 'telegramUsername',
    phone: 'phone',
    messageCount: 'messageCount',
    blocked: 'blocked',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt'
};
export const FormDefScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const FormFieldScalarFieldEnum = {
    id: 'id',
    formId: 'formId',
    label: 'label',
    type: 'type',
    required: 'required',
    options: 'options',
    order: 'order'
};
export const FormSubmissionScalarFieldEnum = {
    id: 'id',
    formId: 'formId',
    customerId: 'customerId',
    answers: 'answers',
    createdAt: 'createdAt'
};
export const BotScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    token: 'token',
    telegramBotId: 'telegramBotId',
    username: 'username',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BroadcastScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    text: 'text',
    mediaUrl: 'mediaUrl',
    status: 'status',
    sentCount: 'sentCount',
    failCount: 'failCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UnansweredQuestionScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    question: 'question',
    askedAt: 'askedAt'
};
export const ContactMessageScalarFieldEnum = {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    topic: 'topic',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map