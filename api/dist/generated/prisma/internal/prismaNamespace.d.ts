import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
    readonly ContactMessage: "ContactMessage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "adminUser" | "business" | "user" | "product" | "courseLesson" | "courseAccess" | "faqEntry" | "lookupEntry" | "customer" | "formDef" | "formField" | "formSubmission" | "bot" | "broadcast" | "unansweredQuestion" | "contactMessage";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        AdminUser: {
            payload: Prisma.$AdminUserPayload<ExtArgs>;
            fields: Prisma.AdminUserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminUserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findFirst: {
                    args: Prisma.AdminUserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findMany: {
                    args: Prisma.AdminUserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                create: {
                    args: Prisma.AdminUserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                createMany: {
                    args: Prisma.AdminUserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                delete: {
                    args: Prisma.AdminUserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                update: {
                    args: Prisma.AdminUserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminUserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                aggregate: {
                    args: Prisma.AdminUserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminUser>;
                };
                groupBy: {
                    args: Prisma.AdminUserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminUserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserCountAggregateOutputType> | number;
                };
            };
        };
        Business: {
            payload: Prisma.$BusinessPayload<ExtArgs>;
            fields: Prisma.BusinessFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusinessFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                findFirst: {
                    args: Prisma.BusinessFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                findMany: {
                    args: Prisma.BusinessFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>[];
                };
                create: {
                    args: Prisma.BusinessCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                createMany: {
                    args: Prisma.BusinessCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>[];
                };
                delete: {
                    args: Prisma.BusinessDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                update: {
                    args: Prisma.BusinessUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                deleteMany: {
                    args: Prisma.BusinessDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusinessUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>[];
                };
                upsert: {
                    args: Prisma.BusinessUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                aggregate: {
                    args: Prisma.BusinessAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusiness>;
                };
                groupBy: {
                    args: Prisma.BusinessGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusinessCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        CourseLesson: {
            payload: Prisma.$CourseLessonPayload<ExtArgs>;
            fields: Prisma.CourseLessonFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourseLessonFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourseLessonFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>;
                };
                findFirst: {
                    args: Prisma.CourseLessonFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourseLessonFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>;
                };
                findMany: {
                    args: Prisma.CourseLessonFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>[];
                };
                create: {
                    args: Prisma.CourseLessonCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>;
                };
                createMany: {
                    args: Prisma.CourseLessonCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourseLessonCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>[];
                };
                delete: {
                    args: Prisma.CourseLessonDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>;
                };
                update: {
                    args: Prisma.CourseLessonUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>;
                };
                deleteMany: {
                    args: Prisma.CourseLessonDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourseLessonUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourseLessonUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>[];
                };
                upsert: {
                    args: Prisma.CourseLessonUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseLessonPayload>;
                };
                aggregate: {
                    args: Prisma.CourseLessonAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourseLesson>;
                };
                groupBy: {
                    args: Prisma.CourseLessonGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseLessonGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourseLessonCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseLessonCountAggregateOutputType> | number;
                };
            };
        };
        CourseAccess: {
            payload: Prisma.$CourseAccessPayload<ExtArgs>;
            fields: Prisma.CourseAccessFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourseAccessFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourseAccessFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>;
                };
                findFirst: {
                    args: Prisma.CourseAccessFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourseAccessFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>;
                };
                findMany: {
                    args: Prisma.CourseAccessFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>[];
                };
                create: {
                    args: Prisma.CourseAccessCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>;
                };
                createMany: {
                    args: Prisma.CourseAccessCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourseAccessCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>[];
                };
                delete: {
                    args: Prisma.CourseAccessDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>;
                };
                update: {
                    args: Prisma.CourseAccessUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>;
                };
                deleteMany: {
                    args: Prisma.CourseAccessDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourseAccessUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourseAccessUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>[];
                };
                upsert: {
                    args: Prisma.CourseAccessUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourseAccessPayload>;
                };
                aggregate: {
                    args: Prisma.CourseAccessAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourseAccess>;
                };
                groupBy: {
                    args: Prisma.CourseAccessGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseAccessGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourseAccessCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseAccessCountAggregateOutputType> | number;
                };
            };
        };
        FaqEntry: {
            payload: Prisma.$FaqEntryPayload<ExtArgs>;
            fields: Prisma.FaqEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FaqEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FaqEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>;
                };
                findFirst: {
                    args: Prisma.FaqEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FaqEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>;
                };
                findMany: {
                    args: Prisma.FaqEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>[];
                };
                create: {
                    args: Prisma.FaqEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>;
                };
                createMany: {
                    args: Prisma.FaqEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FaqEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>[];
                };
                delete: {
                    args: Prisma.FaqEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>;
                };
                update: {
                    args: Prisma.FaqEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.FaqEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FaqEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FaqEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>[];
                };
                upsert: {
                    args: Prisma.FaqEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqEntryPayload>;
                };
                aggregate: {
                    args: Prisma.FaqEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFaqEntry>;
                };
                groupBy: {
                    args: Prisma.FaqEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaqEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FaqEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaqEntryCountAggregateOutputType> | number;
                };
            };
        };
        LookupEntry: {
            payload: Prisma.$LookupEntryPayload<ExtArgs>;
            fields: Prisma.LookupEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LookupEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LookupEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>;
                };
                findFirst: {
                    args: Prisma.LookupEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LookupEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>;
                };
                findMany: {
                    args: Prisma.LookupEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>[];
                };
                create: {
                    args: Prisma.LookupEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>;
                };
                createMany: {
                    args: Prisma.LookupEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LookupEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>[];
                };
                delete: {
                    args: Prisma.LookupEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>;
                };
                update: {
                    args: Prisma.LookupEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.LookupEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LookupEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LookupEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>[];
                };
                upsert: {
                    args: Prisma.LookupEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LookupEntryPayload>;
                };
                aggregate: {
                    args: Prisma.LookupEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLookupEntry>;
                };
                groupBy: {
                    args: Prisma.LookupEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LookupEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LookupEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LookupEntryCountAggregateOutputType> | number;
                };
            };
        };
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        FormDef: {
            payload: Prisma.$FormDefPayload<ExtArgs>;
            fields: Prisma.FormDefFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FormDefFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FormDefFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>;
                };
                findFirst: {
                    args: Prisma.FormDefFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FormDefFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>;
                };
                findMany: {
                    args: Prisma.FormDefFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>[];
                };
                create: {
                    args: Prisma.FormDefCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>;
                };
                createMany: {
                    args: Prisma.FormDefCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FormDefCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>[];
                };
                delete: {
                    args: Prisma.FormDefDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>;
                };
                update: {
                    args: Prisma.FormDefUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>;
                };
                deleteMany: {
                    args: Prisma.FormDefDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FormDefUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FormDefUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>[];
                };
                upsert: {
                    args: Prisma.FormDefUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormDefPayload>;
                };
                aggregate: {
                    args: Prisma.FormDefAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFormDef>;
                };
                groupBy: {
                    args: Prisma.FormDefGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormDefGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FormDefCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormDefCountAggregateOutputType> | number;
                };
            };
        };
        FormField: {
            payload: Prisma.$FormFieldPayload<ExtArgs>;
            fields: Prisma.FormFieldFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FormFieldFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FormFieldFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>;
                };
                findFirst: {
                    args: Prisma.FormFieldFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FormFieldFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>;
                };
                findMany: {
                    args: Prisma.FormFieldFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>[];
                };
                create: {
                    args: Prisma.FormFieldCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>;
                };
                createMany: {
                    args: Prisma.FormFieldCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FormFieldCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>[];
                };
                delete: {
                    args: Prisma.FormFieldDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>;
                };
                update: {
                    args: Prisma.FormFieldUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>;
                };
                deleteMany: {
                    args: Prisma.FormFieldDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FormFieldUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FormFieldUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>[];
                };
                upsert: {
                    args: Prisma.FormFieldUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormFieldPayload>;
                };
                aggregate: {
                    args: Prisma.FormFieldAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFormField>;
                };
                groupBy: {
                    args: Prisma.FormFieldGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormFieldGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FormFieldCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormFieldCountAggregateOutputType> | number;
                };
            };
        };
        FormSubmission: {
            payload: Prisma.$FormSubmissionPayload<ExtArgs>;
            fields: Prisma.FormSubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FormSubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FormSubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.FormSubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FormSubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>;
                };
                findMany: {
                    args: Prisma.FormSubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[];
                };
                create: {
                    args: Prisma.FormSubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>;
                };
                createMany: {
                    args: Prisma.FormSubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FormSubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[];
                };
                delete: {
                    args: Prisma.FormSubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>;
                };
                update: {
                    args: Prisma.FormSubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.FormSubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FormSubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FormSubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.FormSubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormSubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.FormSubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFormSubmission>;
                };
                groupBy: {
                    args: Prisma.FormSubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormSubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FormSubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormSubmissionCountAggregateOutputType> | number;
                };
            };
        };
        Bot: {
            payload: Prisma.$BotPayload<ExtArgs>;
            fields: Prisma.BotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>;
                };
                findFirst: {
                    args: Prisma.BotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>;
                };
                findMany: {
                    args: Prisma.BotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>[];
                };
                create: {
                    args: Prisma.BotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>;
                };
                createMany: {
                    args: Prisma.BotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>[];
                };
                delete: {
                    args: Prisma.BotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>;
                };
                update: {
                    args: Prisma.BotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>;
                };
                deleteMany: {
                    args: Prisma.BotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>[];
                };
                upsert: {
                    args: Prisma.BotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BotPayload>;
                };
                aggregate: {
                    args: Prisma.BotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBot>;
                };
                groupBy: {
                    args: Prisma.BotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BotCountAggregateOutputType> | number;
                };
            };
        };
        Broadcast: {
            payload: Prisma.$BroadcastPayload<ExtArgs>;
            fields: Prisma.BroadcastFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BroadcastFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BroadcastFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>;
                };
                findFirst: {
                    args: Prisma.BroadcastFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BroadcastFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>;
                };
                findMany: {
                    args: Prisma.BroadcastFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>[];
                };
                create: {
                    args: Prisma.BroadcastCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>;
                };
                createMany: {
                    args: Prisma.BroadcastCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BroadcastCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>[];
                };
                delete: {
                    args: Prisma.BroadcastDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>;
                };
                update: {
                    args: Prisma.BroadcastUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>;
                };
                deleteMany: {
                    args: Prisma.BroadcastDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BroadcastUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BroadcastUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>[];
                };
                upsert: {
                    args: Prisma.BroadcastUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BroadcastPayload>;
                };
                aggregate: {
                    args: Prisma.BroadcastAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBroadcast>;
                };
                groupBy: {
                    args: Prisma.BroadcastGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BroadcastGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BroadcastCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BroadcastCountAggregateOutputType> | number;
                };
            };
        };
        UnansweredQuestion: {
            payload: Prisma.$UnansweredQuestionPayload<ExtArgs>;
            fields: Prisma.UnansweredQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UnansweredQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UnansweredQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.UnansweredQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UnansweredQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>;
                };
                findMany: {
                    args: Prisma.UnansweredQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>[];
                };
                create: {
                    args: Prisma.UnansweredQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>;
                };
                createMany: {
                    args: Prisma.UnansweredQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UnansweredQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>[];
                };
                delete: {
                    args: Prisma.UnansweredQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>;
                };
                update: {
                    args: Prisma.UnansweredQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.UnansweredQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UnansweredQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UnansweredQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.UnansweredQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UnansweredQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.UnansweredQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUnansweredQuestion>;
                };
                groupBy: {
                    args: Prisma.UnansweredQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UnansweredQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UnansweredQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UnansweredQuestionCountAggregateOutputType> | number;
                };
            };
        };
        ContactMessage: {
            payload: Prisma.$ContactMessagePayload<ExtArgs>;
            fields: Prisma.ContactMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                findFirst: {
                    args: Prisma.ContactMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                findMany: {
                    args: Prisma.ContactMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                create: {
                    args: Prisma.ContactMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                createMany: {
                    args: Prisma.ContactMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                delete: {
                    args: Prisma.ContactMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                update: {
                    args: Prisma.ContactMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>[];
                };
                upsert: {
                    args: Prisma.ContactMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactMessagePayload>;
                };
                aggregate: {
                    args: Prisma.ContactMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContactMessage>;
                };
                groupBy: {
                    args: Prisma.ContactMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactMessageCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export declare const ContactMessageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone: "phone";
    readonly email: "email";
    readonly topic: "topic";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType'>;
export type ListEnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType[]'>;
export type EnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier'>;
export type ListEnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumLessonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonStatus'>;
export type ListEnumLessonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonStatus[]'>;
export type EnumLookupKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LookupKind'>;
export type ListEnumLookupKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LookupKind[]'>;
export type EnumFormFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormFieldType'>;
export type ListEnumFormFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormFieldType[]'>;
export type EnumBroadcastStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BroadcastStatus'>;
export type ListEnumBroadcastStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BroadcastStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    adminUser?: Prisma.AdminUserOmit;
    business?: Prisma.BusinessOmit;
    user?: Prisma.UserOmit;
    product?: Prisma.ProductOmit;
    courseLesson?: Prisma.CourseLessonOmit;
    courseAccess?: Prisma.CourseAccessOmit;
    faqEntry?: Prisma.FaqEntryOmit;
    lookupEntry?: Prisma.LookupEntryOmit;
    customer?: Prisma.CustomerOmit;
    formDef?: Prisma.FormDefOmit;
    formField?: Prisma.FormFieldOmit;
    formSubmission?: Prisma.FormSubmissionOmit;
    bot?: Prisma.BotOmit;
    broadcast?: Prisma.BroadcastOmit;
    unansweredQuestion?: Prisma.UnansweredQuestionOmit;
    contactMessage?: Prisma.ContactMessageOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
