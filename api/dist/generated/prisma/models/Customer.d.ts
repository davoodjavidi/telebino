import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerAvgAggregateOutputType = {
    messageCount: number | null;
};
export type CustomerSumAggregateOutputType = {
    messageCount: number | null;
};
export type CustomerMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    telegramUserId: string | null;
    telegramUsername: string | null;
    phone: string | null;
    messageCount: number | null;
    blocked: boolean | null;
    firstSeenAt: Date | null;
    lastSeenAt: Date | null;
};
export type CustomerMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    telegramUserId: string | null;
    telegramUsername: string | null;
    phone: string | null;
    messageCount: number | null;
    blocked: boolean | null;
    firstSeenAt: Date | null;
    lastSeenAt: Date | null;
};
export type CustomerCountAggregateOutputType = {
    id: number;
    businessId: number;
    telegramUserId: number;
    telegramUsername: number;
    phone: number;
    messageCount: number;
    blocked: number;
    firstSeenAt: number;
    lastSeenAt: number;
    _all: number;
};
export type CustomerAvgAggregateInputType = {
    messageCount?: true;
};
export type CustomerSumAggregateInputType = {
    messageCount?: true;
};
export type CustomerMinAggregateInputType = {
    id?: true;
    businessId?: true;
    telegramUserId?: true;
    telegramUsername?: true;
    phone?: true;
    messageCount?: true;
    blocked?: true;
    firstSeenAt?: true;
    lastSeenAt?: true;
};
export type CustomerMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    telegramUserId?: true;
    telegramUsername?: true;
    phone?: true;
    messageCount?: true;
    blocked?: true;
    firstSeenAt?: true;
    lastSeenAt?: true;
};
export type CustomerCountAggregateInputType = {
    id?: true;
    businessId?: true;
    telegramUserId?: true;
    telegramUsername?: true;
    phone?: true;
    messageCount?: true;
    blocked?: true;
    firstSeenAt?: true;
    lastSeenAt?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type CustomerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithAggregationInput | Prisma.CustomerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    id: string;
    businessId: string;
    telegramUserId: string;
    telegramUsername: string | null;
    phone: string | null;
    messageCount: number;
    blocked: boolean;
    firstSeenAt: Date;
    lastSeenAt: Date;
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type CustomerWhereInput = {
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    id?: Prisma.StringFilter<"Customer"> | string;
    businessId?: Prisma.StringFilter<"Customer"> | string;
    telegramUserId?: Prisma.StringFilter<"Customer"> | string;
    telegramUsername?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    messageCount?: Prisma.IntFilter<"Customer"> | number;
    blocked?: Prisma.BoolFilter<"Customer"> | boolean;
    firstSeenAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    formSubmissions?: Prisma.FormSubmissionListRelationFilter;
};
export type CustomerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    telegramUsername?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    blocked?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    formSubmissions?: Prisma.FormSubmissionOrderByRelationAggregateInput;
};
export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    businessId_telegramUserId?: Prisma.CustomerBusinessIdTelegramUserIdCompoundUniqueInput;
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    businessId?: Prisma.StringFilter<"Customer"> | string;
    telegramUserId?: Prisma.StringFilter<"Customer"> | string;
    telegramUsername?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    messageCount?: Prisma.IntFilter<"Customer"> | number;
    blocked?: Prisma.BoolFilter<"Customer"> | boolean;
    firstSeenAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    formSubmissions?: Prisma.FormSubmissionListRelationFilter;
}, "id" | "businessId_telegramUserId">;
export type CustomerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    telegramUsername?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    blocked?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerCountOrderByAggregateInput;
    _avg?: Prisma.CustomerAvgOrderByAggregateInput;
    _max?: Prisma.CustomerMaxOrderByAggregateInput;
    _min?: Prisma.CustomerMinOrderByAggregateInput;
    _sum?: Prisma.CustomerSumOrderByAggregateInput;
};
export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    telegramUserId?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    telegramUsername?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    messageCount?: Prisma.IntWithAggregatesFilter<"Customer"> | number;
    blocked?: Prisma.BoolWithAggregatesFilter<"Customer"> | boolean;
    firstSeenAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    lastSeenAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
};
export type CustomerCreateInput = {
    id?: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCustomersInput;
    formSubmissions?: Prisma.FormSubmissionCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateInput = {
    id?: string;
    businessId: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    formSubmissions?: Prisma.FormSubmissionUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCustomersNestedInput;
    formSubmissions?: Prisma.FormSubmissionUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formSubmissions?: Prisma.FormSubmissionUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyInput = {
    id?: string;
    businessId: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
};
export type CustomerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerListRelationFilter = {
    every?: Prisma.CustomerWhereInput;
    some?: Prisma.CustomerWhereInput;
    none?: Prisma.CustomerWhereInput;
};
export type CustomerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerBusinessIdTelegramUserIdCompoundUniqueInput = {
    businessId: string;
    telegramUserId: string;
};
export type CustomerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    telegramUsername?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    blocked?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type CustomerAvgOrderByAggregateInput = {
    messageCount?: Prisma.SortOrder;
};
export type CustomerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    telegramUsername?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    blocked?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type CustomerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    telegramUserId?: Prisma.SortOrder;
    telegramUsername?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    blocked?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type CustomerSumOrderByAggregateInput = {
    messageCount?: Prisma.SortOrder;
};
export type CustomerNullableScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput | null;
    isNot?: Prisma.CustomerWhereInput | null;
};
export type CustomerCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput | Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput | Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerCreateNestedOneWithoutFormSubmissionsInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutFormSubmissionsInput, Prisma.CustomerUncheckedCreateWithoutFormSubmissionsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutFormSubmissionsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneWithoutFormSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutFormSubmissionsInput, Prisma.CustomerUncheckedCreateWithoutFormSubmissionsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutFormSubmissionsInput;
    upsert?: Prisma.CustomerUpsertWithoutFormSubmissionsInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutFormSubmissionsInput, Prisma.CustomerUpdateWithoutFormSubmissionsInput>, Prisma.CustomerUncheckedUpdateWithoutFormSubmissionsInput>;
};
export type CustomerCreateWithoutBusinessInput = {
    id?: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    formSubmissions?: Prisma.FormSubmissionCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutBusinessInput = {
    id?: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    formSubmissions?: Prisma.FormSubmissionUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutBusinessInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput>;
};
export type CustomerCreateManyBusinessInputEnvelope = {
    data: Prisma.CustomerCreateManyBusinessInput | Prisma.CustomerCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type CustomerUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.CustomerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutBusinessInput, Prisma.CustomerUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput>;
};
export type CustomerUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutBusinessInput, Prisma.CustomerUncheckedUpdateWithoutBusinessInput>;
};
export type CustomerUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.CustomerScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyWithoutBusinessInput>;
};
export type CustomerScalarWhereInput = {
    AND?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    OR?: Prisma.CustomerScalarWhereInput[];
    NOT?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    id?: Prisma.StringFilter<"Customer"> | string;
    businessId?: Prisma.StringFilter<"Customer"> | string;
    telegramUserId?: Prisma.StringFilter<"Customer"> | string;
    telegramUsername?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    messageCount?: Prisma.IntFilter<"Customer"> | number;
    blocked?: Prisma.BoolFilter<"Customer"> | boolean;
    firstSeenAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
};
export type CustomerCreateWithoutFormSubmissionsInput = {
    id?: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCustomersInput;
};
export type CustomerUncheckedCreateWithoutFormSubmissionsInput = {
    id?: string;
    businessId: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
};
export type CustomerCreateOrConnectWithoutFormSubmissionsInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutFormSubmissionsInput, Prisma.CustomerUncheckedCreateWithoutFormSubmissionsInput>;
};
export type CustomerUpsertWithoutFormSubmissionsInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutFormSubmissionsInput, Prisma.CustomerUncheckedUpdateWithoutFormSubmissionsInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutFormSubmissionsInput, Prisma.CustomerUncheckedCreateWithoutFormSubmissionsInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutFormSubmissionsInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutFormSubmissionsInput, Prisma.CustomerUncheckedUpdateWithoutFormSubmissionsInput>;
};
export type CustomerUpdateWithoutFormSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCustomersNestedInput;
};
export type CustomerUncheckedUpdateWithoutFormSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerCreateManyBusinessInput = {
    id?: string;
    telegramUserId: string;
    telegramUsername?: string | null;
    phone?: string | null;
    messageCount?: number;
    blocked?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
};
export type CustomerUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formSubmissions?: Prisma.FormSubmissionUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formSubmissions?: Prisma.FormSubmissionUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramUsername?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    blocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerCountOutputType = {
    formSubmissions: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    formSubmissions?: boolean | CustomerCountOutputTypeCountFormSubmissionsArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountFormSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormSubmissionWhereInput;
};
export type CustomerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    telegramUserId?: boolean;
    telegramUsername?: boolean;
    phone?: boolean;
    messageCount?: boolean;
    blocked?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    formSubmissions?: boolean | Prisma.Customer$formSubmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    telegramUserId?: boolean;
    telegramUsername?: boolean;
    phone?: boolean;
    messageCount?: boolean;
    blocked?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    telegramUserId?: boolean;
    telegramUsername?: boolean;
    phone?: boolean;
    messageCount?: boolean;
    blocked?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    telegramUserId?: boolean;
    telegramUsername?: boolean;
    phone?: boolean;
    messageCount?: boolean;
    blocked?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
};
export type CustomerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "telegramUserId" | "telegramUsername" | "phone" | "messageCount" | "blocked" | "firstSeenAt" | "lastSeenAt", ExtArgs["result"]["customer"]>;
export type CustomerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    formSubmissions?: boolean | Prisma.Customer$formSubmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $CustomerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Customer";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        formSubmissions: Prisma.$FormSubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        telegramUserId: string;
        telegramUsername: string | null;
        phone: string | null;
        messageCount: number;
        blocked: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerPayload, S>;
export type CustomerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface CustomerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
        meta: {
            name: 'Customer';
        };
    };
    findUnique<T extends CustomerFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerCreateArgs>(args: Prisma.SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerDeleteArgs>(args: Prisma.SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerUpdateArgs>(args: Prisma.SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerUpsertArgs>(args: Prisma.SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerCountArgs>(args?: Prisma.Subset<T, CustomerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends CustomerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerFieldRefs;
}
export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    formSubmissions<T extends Prisma.Customer$formSubmissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$formSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerFieldRefs {
    readonly id: Prisma.FieldRef<"Customer", 'String'>;
    readonly businessId: Prisma.FieldRef<"Customer", 'String'>;
    readonly telegramUserId: Prisma.FieldRef<"Customer", 'String'>;
    readonly telegramUsername: Prisma.FieldRef<"Customer", 'String'>;
    readonly phone: Prisma.FieldRef<"Customer", 'String'>;
    readonly messageCount: Prisma.FieldRef<"Customer", 'Int'>;
    readonly blocked: Prisma.FieldRef<"Customer", 'Boolean'>;
    readonly firstSeenAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly lastSeenAt: Prisma.FieldRef<"Customer", 'DateTime'>;
}
export type CustomerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
};
export type CustomerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
    include?: Prisma.CustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
};
export type CustomerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type Customer$formSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    where?: Prisma.FormSubmissionWhereInput;
    orderBy?: Prisma.FormSubmissionOrderByWithRelationInput | Prisma.FormSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.FormSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormSubmissionScalarFieldEnum | Prisma.FormSubmissionScalarFieldEnum[];
};
export type CustomerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
};
