import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourseAccessModel = runtime.Types.Result.DefaultSelection<Prisma.$CourseAccessPayload>;
export type AggregateCourseAccess = {
    _count: CourseAccessCountAggregateOutputType | null;
    _min: CourseAccessMinAggregateOutputType | null;
    _max: CourseAccessMaxAggregateOutputType | null;
};
export type CourseAccessMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    productId: string | null;
    telegramUserId: string | null;
    grantedAt: Date | null;
};
export type CourseAccessMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    productId: string | null;
    telegramUserId: string | null;
    grantedAt: Date | null;
};
export type CourseAccessCountAggregateOutputType = {
    id: number;
    businessId: number;
    productId: number;
    telegramUserId: number;
    grantedAt: number;
    _all: number;
};
export type CourseAccessMinAggregateInputType = {
    id?: true;
    businessId?: true;
    productId?: true;
    telegramUserId?: true;
    grantedAt?: true;
};
export type CourseAccessMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    productId?: true;
    telegramUserId?: true;
    grantedAt?: true;
};
export type CourseAccessCountAggregateInputType = {
    id?: true;
    businessId?: true;
    productId?: true;
    telegramUserId?: true;
    grantedAt?: true;
    _all?: true;
};
export type CourseAccessAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseAccessWhereInput;
    orderBy?: Prisma.CourseAccessOrderByWithRelationInput | Prisma.CourseAccessOrderByWithRelationInput[];
    cursor?: Prisma.CourseAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourseAccessCountAggregateInputType;
    _min?: CourseAccessMinAggregateInputType;
    _max?: CourseAccessMaxAggregateInputType;
};
export type GetCourseAccessAggregateType<T extends CourseAccessAggregateArgs> = {
    [P in keyof T & keyof AggregateCourseAccess]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourseAccess[P]> : Prisma.GetScalarType<T[P], AggregateCourseAccess[P]>;
};
export type CourseAccessGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseAccessWhereInput;
    orderBy?: Prisma.CourseAccessOrderByWithAggregationInput | Prisma.CourseAccessOrderByWithAggregationInput[];
    by: Prisma.CourseAccessScalarFieldEnum[] | Prisma.CourseAccessScalarFieldEnum;
    having?: Prisma.CourseAccessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseAccessCountAggregateInputType | true;
    _min?: CourseAccessMinAggregateInputType;
    _max?: CourseAccessMaxAggregateInputType;
};
export type CourseAccessGroupByOutputType = {
    id: string;
    businessId: string;
    productId: string;
    telegramUserId: string;
    grantedAt: Date;
    _count: CourseAccessCountAggregateOutputType | null;
    _min: CourseAccessMinAggregateOutputType | null;
    _max: CourseAccessMaxAggregateOutputType | null;
};
export type GetCourseAccessGroupByPayload<T extends CourseAccessGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseAccessGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseAccessGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseAccessGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseAccessGroupByOutputType[P]>;
}>>;
export type CourseAccessWhereInput = {
    AND?: Prisma.CourseAccessWhereInput | Prisma.CourseAccessWhereInput[];
    OR?: Prisma.CourseAccessWhereInput[];
    NOT?: Prisma.CourseAccessWhereInput | Prisma.CourseAccessWhereInput[];
    id?: Prisma.StringFilter<"CourseAccess"> | string;
    businessId?: Prisma.StringFilter<"CourseAccess"> | string;
    productId?: Prisma.StringFilter<"CourseAccess"> | string;
    telegramUserId?: Prisma.StringFilter<"CourseAccess"> | string;
    grantedAt?: Prisma.DateTimeFilter<"CourseAccess"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type CourseAccessOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type CourseAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    businessId_productId_telegramUserId?: Prisma.CourseAccessBusinessIdProductIdTelegramUserIdCompoundUniqueInput;
    AND?: Prisma.CourseAccessWhereInput | Prisma.CourseAccessWhereInput[];
    OR?: Prisma.CourseAccessWhereInput[];
    NOT?: Prisma.CourseAccessWhereInput | Prisma.CourseAccessWhereInput[];
    businessId?: Prisma.StringFilter<"CourseAccess"> | string;
    productId?: Prisma.StringFilter<"CourseAccess"> | string;
    telegramUserId?: Prisma.StringFilter<"CourseAccess"> | string;
    grantedAt?: Prisma.DateTimeFilter<"CourseAccess"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "businessId_productId_telegramUserId">;
export type CourseAccessOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseAccessCountOrderByAggregateInput;
    _max?: Prisma.CourseAccessMaxOrderByAggregateInput;
    _min?: Prisma.CourseAccessMinOrderByAggregateInput;
};
export type CourseAccessScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseAccessScalarWhereWithAggregatesInput | Prisma.CourseAccessScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseAccessScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseAccessScalarWhereWithAggregatesInput | Prisma.CourseAccessScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CourseAccess"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"CourseAccess"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"CourseAccess"> | string;
    telegramUserId?: Prisma.StringWithAggregatesFilter<"CourseAccess"> | string;
    grantedAt?: Prisma.DateTimeWithAggregatesFilter<"CourseAccess"> | Date | string;
};
export type CourseAccessCreateInput = {
    id?: string;
    telegramUserId: string;
    grantedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCourseAccessInput;
    product: Prisma.ProductCreateNestedOneWithoutCourseAccessInput;
};
export type CourseAccessUncheckedCreateInput = {
    id?: string;
    businessId: string;
    productId: string;
    telegramUserId: string;
    grantedAt?: Date | string;
};
export type CourseAccessUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCourseAccessNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutCourseAccessNestedInput;
};
export type CourseAccessUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessCreateManyInput = {
    id?: string;
    businessId: string;
    productId: string;
    telegramUserId: string;
    grantedAt?: Date | string;
};
export type CourseAccessUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessListRelationFilter = {
    every?: Prisma.CourseAccessWhereInput;
    some?: Prisma.CourseAccessWhereInput;
    none?: Prisma.CourseAccessWhereInput;
};
export type CourseAccessOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourseAccessBusinessIdProductIdTelegramUserIdCompoundUniqueInput = {
    businessId: string;
    productId: string;
    telegramUserId: string;
};
export type CourseAccessCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type CourseAccessMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type CourseAccessMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
};
export type CourseAccessCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutBusinessInput, Prisma.CourseAccessUncheckedCreateWithoutBusinessInput> | Prisma.CourseAccessCreateWithoutBusinessInput[] | Prisma.CourseAccessUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutBusinessInput | Prisma.CourseAccessCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.CourseAccessCreateManyBusinessInputEnvelope;
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
};
export type CourseAccessUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutBusinessInput, Prisma.CourseAccessUncheckedCreateWithoutBusinessInput> | Prisma.CourseAccessCreateWithoutBusinessInput[] | Prisma.CourseAccessUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutBusinessInput | Prisma.CourseAccessCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.CourseAccessCreateManyBusinessInputEnvelope;
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
};
export type CourseAccessUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutBusinessInput, Prisma.CourseAccessUncheckedCreateWithoutBusinessInput> | Prisma.CourseAccessCreateWithoutBusinessInput[] | Prisma.CourseAccessUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutBusinessInput | Prisma.CourseAccessCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.CourseAccessUpsertWithWhereUniqueWithoutBusinessInput | Prisma.CourseAccessUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.CourseAccessCreateManyBusinessInputEnvelope;
    set?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    disconnect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    delete?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    update?: Prisma.CourseAccessUpdateWithWhereUniqueWithoutBusinessInput | Prisma.CourseAccessUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.CourseAccessUpdateManyWithWhereWithoutBusinessInput | Prisma.CourseAccessUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.CourseAccessScalarWhereInput | Prisma.CourseAccessScalarWhereInput[];
};
export type CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutBusinessInput, Prisma.CourseAccessUncheckedCreateWithoutBusinessInput> | Prisma.CourseAccessCreateWithoutBusinessInput[] | Prisma.CourseAccessUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutBusinessInput | Prisma.CourseAccessCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.CourseAccessUpsertWithWhereUniqueWithoutBusinessInput | Prisma.CourseAccessUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.CourseAccessCreateManyBusinessInputEnvelope;
    set?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    disconnect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    delete?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    update?: Prisma.CourseAccessUpdateWithWhereUniqueWithoutBusinessInput | Prisma.CourseAccessUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.CourseAccessUpdateManyWithWhereWithoutBusinessInput | Prisma.CourseAccessUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.CourseAccessScalarWhereInput | Prisma.CourseAccessScalarWhereInput[];
};
export type CourseAccessCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutProductInput, Prisma.CourseAccessUncheckedCreateWithoutProductInput> | Prisma.CourseAccessCreateWithoutProductInput[] | Prisma.CourseAccessUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutProductInput | Prisma.CourseAccessCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CourseAccessCreateManyProductInputEnvelope;
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
};
export type CourseAccessUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutProductInput, Prisma.CourseAccessUncheckedCreateWithoutProductInput> | Prisma.CourseAccessCreateWithoutProductInput[] | Prisma.CourseAccessUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutProductInput | Prisma.CourseAccessCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CourseAccessCreateManyProductInputEnvelope;
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
};
export type CourseAccessUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutProductInput, Prisma.CourseAccessUncheckedCreateWithoutProductInput> | Prisma.CourseAccessCreateWithoutProductInput[] | Prisma.CourseAccessUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutProductInput | Prisma.CourseAccessCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CourseAccessUpsertWithWhereUniqueWithoutProductInput | Prisma.CourseAccessUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CourseAccessCreateManyProductInputEnvelope;
    set?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    disconnect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    delete?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    update?: Prisma.CourseAccessUpdateWithWhereUniqueWithoutProductInput | Prisma.CourseAccessUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CourseAccessUpdateManyWithWhereWithoutProductInput | Prisma.CourseAccessUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CourseAccessScalarWhereInput | Prisma.CourseAccessScalarWhereInput[];
};
export type CourseAccessUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CourseAccessCreateWithoutProductInput, Prisma.CourseAccessUncheckedCreateWithoutProductInput> | Prisma.CourseAccessCreateWithoutProductInput[] | Prisma.CourseAccessUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseAccessCreateOrConnectWithoutProductInput | Prisma.CourseAccessCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CourseAccessUpsertWithWhereUniqueWithoutProductInput | Prisma.CourseAccessUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CourseAccessCreateManyProductInputEnvelope;
    set?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    disconnect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    delete?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    connect?: Prisma.CourseAccessWhereUniqueInput | Prisma.CourseAccessWhereUniqueInput[];
    update?: Prisma.CourseAccessUpdateWithWhereUniqueWithoutProductInput | Prisma.CourseAccessUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CourseAccessUpdateManyWithWhereWithoutProductInput | Prisma.CourseAccessUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CourseAccessScalarWhereInput | Prisma.CourseAccessScalarWhereInput[];
};
export type CourseAccessCreateWithoutBusinessInput = {
    id?: string;
    telegramUserId: string;
    grantedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutCourseAccessInput;
};
export type CourseAccessUncheckedCreateWithoutBusinessInput = {
    id?: string;
    productId: string;
    telegramUserId: string;
    grantedAt?: Date | string;
};
export type CourseAccessCreateOrConnectWithoutBusinessInput = {
    where: Prisma.CourseAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseAccessCreateWithoutBusinessInput, Prisma.CourseAccessUncheckedCreateWithoutBusinessInput>;
};
export type CourseAccessCreateManyBusinessInputEnvelope = {
    data: Prisma.CourseAccessCreateManyBusinessInput | Prisma.CourseAccessCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type CourseAccessUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.CourseAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseAccessUpdateWithoutBusinessInput, Prisma.CourseAccessUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.CourseAccessCreateWithoutBusinessInput, Prisma.CourseAccessUncheckedCreateWithoutBusinessInput>;
};
export type CourseAccessUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.CourseAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseAccessUpdateWithoutBusinessInput, Prisma.CourseAccessUncheckedUpdateWithoutBusinessInput>;
};
export type CourseAccessUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.CourseAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseAccessUpdateManyMutationInput, Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessInput>;
};
export type CourseAccessScalarWhereInput = {
    AND?: Prisma.CourseAccessScalarWhereInput | Prisma.CourseAccessScalarWhereInput[];
    OR?: Prisma.CourseAccessScalarWhereInput[];
    NOT?: Prisma.CourseAccessScalarWhereInput | Prisma.CourseAccessScalarWhereInput[];
    id?: Prisma.StringFilter<"CourseAccess"> | string;
    businessId?: Prisma.StringFilter<"CourseAccess"> | string;
    productId?: Prisma.StringFilter<"CourseAccess"> | string;
    telegramUserId?: Prisma.StringFilter<"CourseAccess"> | string;
    grantedAt?: Prisma.DateTimeFilter<"CourseAccess"> | Date | string;
};
export type CourseAccessCreateWithoutProductInput = {
    id?: string;
    telegramUserId: string;
    grantedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCourseAccessInput;
};
export type CourseAccessUncheckedCreateWithoutProductInput = {
    id?: string;
    businessId: string;
    telegramUserId: string;
    grantedAt?: Date | string;
};
export type CourseAccessCreateOrConnectWithoutProductInput = {
    where: Prisma.CourseAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseAccessCreateWithoutProductInput, Prisma.CourseAccessUncheckedCreateWithoutProductInput>;
};
export type CourseAccessCreateManyProductInputEnvelope = {
    data: Prisma.CourseAccessCreateManyProductInput | Prisma.CourseAccessCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type CourseAccessUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.CourseAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseAccessUpdateWithoutProductInput, Prisma.CourseAccessUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.CourseAccessCreateWithoutProductInput, Prisma.CourseAccessUncheckedCreateWithoutProductInput>;
};
export type CourseAccessUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.CourseAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseAccessUpdateWithoutProductInput, Prisma.CourseAccessUncheckedUpdateWithoutProductInput>;
};
export type CourseAccessUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.CourseAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseAccessUpdateManyMutationInput, Prisma.CourseAccessUncheckedUpdateManyWithoutProductInput>;
};
export type CourseAccessCreateManyBusinessInput = {
    id?: string;
    productId: string;
    telegramUserId: string;
    grantedAt?: Date | string;
};
export type CourseAccessUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutCourseAccessNestedInput;
};
export type CourseAccessUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessCreateManyProductInput = {
    id?: string;
    businessId: string;
    telegramUserId: string;
    grantedAt?: Date | string;
};
export type CourseAccessUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCourseAccessNestedInput;
};
export type CourseAccessUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseAccessSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    productId?: boolean;
    telegramUserId?: boolean;
    grantedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseAccess"]>;
export type CourseAccessSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    productId?: boolean;
    telegramUserId?: boolean;
    grantedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseAccess"]>;
export type CourseAccessSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    productId?: boolean;
    telegramUserId?: boolean;
    grantedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseAccess"]>;
export type CourseAccessSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    productId?: boolean;
    telegramUserId?: boolean;
    grantedAt?: boolean;
};
export type CourseAccessOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "productId" | "telegramUserId" | "grantedAt", ExtArgs["result"]["courseAccess"]>;
export type CourseAccessInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type CourseAccessIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type CourseAccessIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $CourseAccessPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CourseAccess";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        productId: string;
        telegramUserId: string;
        grantedAt: Date;
    }, ExtArgs["result"]["courseAccess"]>;
    composites: {};
};
export type CourseAccessGetPayload<S extends boolean | null | undefined | CourseAccessDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload, S>;
export type CourseAccessCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseAccessCountAggregateInputType | true;
};
export interface CourseAccessDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CourseAccess'];
        meta: {
            name: 'CourseAccess';
        };
    };
    findUnique<T extends CourseAccessFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseAccessFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourseAccessFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourseAccessFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseAccessFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourseAccessFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourseAccessFindManyArgs>(args?: Prisma.SelectSubset<T, CourseAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourseAccessCreateArgs>(args: Prisma.SelectSubset<T, CourseAccessCreateArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourseAccessCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourseAccessCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourseAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourseAccessDeleteArgs>(args: Prisma.SelectSubset<T, CourseAccessDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourseAccessUpdateArgs>(args: Prisma.SelectSubset<T, CourseAccessUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourseAccessDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourseAccessUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourseAccessUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourseAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourseAccessUpsertArgs>(args: Prisma.SelectSubset<T, CourseAccessUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseAccessClient<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourseAccessCountArgs>(args?: Prisma.Subset<T, CourseAccessCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseAccessCountAggregateOutputType> : number>;
    aggregate<T extends CourseAccessAggregateArgs>(args: Prisma.Subset<T, CourseAccessAggregateArgs>): Prisma.PrismaPromise<GetCourseAccessAggregateType<T>>;
    groupBy<T extends CourseAccessGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseAccessGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseAccessGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourseAccessFieldRefs;
}
export interface Prisma__CourseAccessClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourseAccessFieldRefs {
    readonly id: Prisma.FieldRef<"CourseAccess", 'String'>;
    readonly businessId: Prisma.FieldRef<"CourseAccess", 'String'>;
    readonly productId: Prisma.FieldRef<"CourseAccess", 'String'>;
    readonly telegramUserId: Prisma.FieldRef<"CourseAccess", 'String'>;
    readonly grantedAt: Prisma.FieldRef<"CourseAccess", 'DateTime'>;
}
export type CourseAccessFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where: Prisma.CourseAccessWhereUniqueInput;
};
export type CourseAccessFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where: Prisma.CourseAccessWhereUniqueInput;
};
export type CourseAccessFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where?: Prisma.CourseAccessWhereInput;
    orderBy?: Prisma.CourseAccessOrderByWithRelationInput | Prisma.CourseAccessOrderByWithRelationInput[];
    cursor?: Prisma.CourseAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseAccessScalarFieldEnum | Prisma.CourseAccessScalarFieldEnum[];
};
export type CourseAccessFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where?: Prisma.CourseAccessWhereInput;
    orderBy?: Prisma.CourseAccessOrderByWithRelationInput | Prisma.CourseAccessOrderByWithRelationInput[];
    cursor?: Prisma.CourseAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseAccessScalarFieldEnum | Prisma.CourseAccessScalarFieldEnum[];
};
export type CourseAccessFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where?: Prisma.CourseAccessWhereInput;
    orderBy?: Prisma.CourseAccessOrderByWithRelationInput | Prisma.CourseAccessOrderByWithRelationInput[];
    cursor?: Prisma.CourseAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseAccessScalarFieldEnum | Prisma.CourseAccessScalarFieldEnum[];
};
export type CourseAccessCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseAccessCreateInput, Prisma.CourseAccessUncheckedCreateInput>;
};
export type CourseAccessCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourseAccessCreateManyInput | Prisma.CourseAccessCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseAccessCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    data: Prisma.CourseAccessCreateManyInput | Prisma.CourseAccessCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourseAccessIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourseAccessUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseAccessUpdateInput, Prisma.CourseAccessUncheckedUpdateInput>;
    where: Prisma.CourseAccessWhereUniqueInput;
};
export type CourseAccessUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourseAccessUpdateManyMutationInput, Prisma.CourseAccessUncheckedUpdateManyInput>;
    where?: Prisma.CourseAccessWhereInput;
    limit?: number;
};
export type CourseAccessUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseAccessUpdateManyMutationInput, Prisma.CourseAccessUncheckedUpdateManyInput>;
    where?: Prisma.CourseAccessWhereInput;
    limit?: number;
    include?: Prisma.CourseAccessIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourseAccessUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where: Prisma.CourseAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseAccessCreateInput, Prisma.CourseAccessUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourseAccessUpdateInput, Prisma.CourseAccessUncheckedUpdateInput>;
};
export type CourseAccessDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
    where: Prisma.CourseAccessWhereUniqueInput;
};
export type CourseAccessDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseAccessWhereInput;
    limit?: number;
};
export type CourseAccessDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseAccessSelect<ExtArgs> | null;
    omit?: Prisma.CourseAccessOmit<ExtArgs> | null;
    include?: Prisma.CourseAccessInclude<ExtArgs> | null;
};
