import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BroadcastModel = runtime.Types.Result.DefaultSelection<Prisma.$BroadcastPayload>;
export type AggregateBroadcast = {
    _count: BroadcastCountAggregateOutputType | null;
    _avg: BroadcastAvgAggregateOutputType | null;
    _sum: BroadcastSumAggregateOutputType | null;
    _min: BroadcastMinAggregateOutputType | null;
    _max: BroadcastMaxAggregateOutputType | null;
};
export type BroadcastAvgAggregateOutputType = {
    sentCount: number | null;
    failCount: number | null;
};
export type BroadcastSumAggregateOutputType = {
    sentCount: number | null;
    failCount: number | null;
};
export type BroadcastMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    text: string | null;
    mediaUrl: string | null;
    status: $Enums.BroadcastStatus | null;
    sentCount: number | null;
    failCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BroadcastMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    text: string | null;
    mediaUrl: string | null;
    status: $Enums.BroadcastStatus | null;
    sentCount: number | null;
    failCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BroadcastCountAggregateOutputType = {
    id: number;
    businessId: number;
    text: number;
    mediaUrl: number;
    status: number;
    sentCount: number;
    failCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BroadcastAvgAggregateInputType = {
    sentCount?: true;
    failCount?: true;
};
export type BroadcastSumAggregateInputType = {
    sentCount?: true;
    failCount?: true;
};
export type BroadcastMinAggregateInputType = {
    id?: true;
    businessId?: true;
    text?: true;
    mediaUrl?: true;
    status?: true;
    sentCount?: true;
    failCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BroadcastMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    text?: true;
    mediaUrl?: true;
    status?: true;
    sentCount?: true;
    failCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BroadcastCountAggregateInputType = {
    id?: true;
    businessId?: true;
    text?: true;
    mediaUrl?: true;
    status?: true;
    sentCount?: true;
    failCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BroadcastAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BroadcastWhereInput;
    orderBy?: Prisma.BroadcastOrderByWithRelationInput | Prisma.BroadcastOrderByWithRelationInput[];
    cursor?: Prisma.BroadcastWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BroadcastCountAggregateInputType;
    _avg?: BroadcastAvgAggregateInputType;
    _sum?: BroadcastSumAggregateInputType;
    _min?: BroadcastMinAggregateInputType;
    _max?: BroadcastMaxAggregateInputType;
};
export type GetBroadcastAggregateType<T extends BroadcastAggregateArgs> = {
    [P in keyof T & keyof AggregateBroadcast]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBroadcast[P]> : Prisma.GetScalarType<T[P], AggregateBroadcast[P]>;
};
export type BroadcastGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BroadcastWhereInput;
    orderBy?: Prisma.BroadcastOrderByWithAggregationInput | Prisma.BroadcastOrderByWithAggregationInput[];
    by: Prisma.BroadcastScalarFieldEnum[] | Prisma.BroadcastScalarFieldEnum;
    having?: Prisma.BroadcastScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BroadcastCountAggregateInputType | true;
    _avg?: BroadcastAvgAggregateInputType;
    _sum?: BroadcastSumAggregateInputType;
    _min?: BroadcastMinAggregateInputType;
    _max?: BroadcastMaxAggregateInputType;
};
export type BroadcastGroupByOutputType = {
    id: string;
    businessId: string;
    text: string;
    mediaUrl: string | null;
    status: $Enums.BroadcastStatus;
    sentCount: number;
    failCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: BroadcastCountAggregateOutputType | null;
    _avg: BroadcastAvgAggregateOutputType | null;
    _sum: BroadcastSumAggregateOutputType | null;
    _min: BroadcastMinAggregateOutputType | null;
    _max: BroadcastMaxAggregateOutputType | null;
};
export type GetBroadcastGroupByPayload<T extends BroadcastGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BroadcastGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BroadcastGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BroadcastGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BroadcastGroupByOutputType[P]>;
}>>;
export type BroadcastWhereInput = {
    AND?: Prisma.BroadcastWhereInput | Prisma.BroadcastWhereInput[];
    OR?: Prisma.BroadcastWhereInput[];
    NOT?: Prisma.BroadcastWhereInput | Prisma.BroadcastWhereInput[];
    id?: Prisma.StringFilter<"Broadcast"> | string;
    businessId?: Prisma.StringFilter<"Broadcast"> | string;
    text?: Prisma.StringFilter<"Broadcast"> | string;
    mediaUrl?: Prisma.StringNullableFilter<"Broadcast"> | string | null;
    status?: Prisma.EnumBroadcastStatusFilter<"Broadcast"> | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFilter<"Broadcast"> | number;
    failCount?: Prisma.IntFilter<"Broadcast"> | number;
    createdAt?: Prisma.DateTimeFilter<"Broadcast"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Broadcast"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type BroadcastOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type BroadcastWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BroadcastWhereInput | Prisma.BroadcastWhereInput[];
    OR?: Prisma.BroadcastWhereInput[];
    NOT?: Prisma.BroadcastWhereInput | Prisma.BroadcastWhereInput[];
    businessId?: Prisma.StringFilter<"Broadcast"> | string;
    text?: Prisma.StringFilter<"Broadcast"> | string;
    mediaUrl?: Prisma.StringNullableFilter<"Broadcast"> | string | null;
    status?: Prisma.EnumBroadcastStatusFilter<"Broadcast"> | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFilter<"Broadcast"> | number;
    failCount?: Prisma.IntFilter<"Broadcast"> | number;
    createdAt?: Prisma.DateTimeFilter<"Broadcast"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Broadcast"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id">;
export type BroadcastOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BroadcastCountOrderByAggregateInput;
    _avg?: Prisma.BroadcastAvgOrderByAggregateInput;
    _max?: Prisma.BroadcastMaxOrderByAggregateInput;
    _min?: Prisma.BroadcastMinOrderByAggregateInput;
    _sum?: Prisma.BroadcastSumOrderByAggregateInput;
};
export type BroadcastScalarWhereWithAggregatesInput = {
    AND?: Prisma.BroadcastScalarWhereWithAggregatesInput | Prisma.BroadcastScalarWhereWithAggregatesInput[];
    OR?: Prisma.BroadcastScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BroadcastScalarWhereWithAggregatesInput | Prisma.BroadcastScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Broadcast"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Broadcast"> | string;
    text?: Prisma.StringWithAggregatesFilter<"Broadcast"> | string;
    mediaUrl?: Prisma.StringNullableWithAggregatesFilter<"Broadcast"> | string | null;
    status?: Prisma.EnumBroadcastStatusWithAggregatesFilter<"Broadcast"> | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntWithAggregatesFilter<"Broadcast"> | number;
    failCount?: Prisma.IntWithAggregatesFilter<"Broadcast"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Broadcast"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Broadcast"> | Date | string;
};
export type BroadcastCreateInput = {
    id?: string;
    text: string;
    mediaUrl?: string | null;
    status?: $Enums.BroadcastStatus;
    sentCount?: number;
    failCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutBroadcastsInput;
};
export type BroadcastUncheckedCreateInput = {
    id?: string;
    businessId: string;
    text: string;
    mediaUrl?: string | null;
    status?: $Enums.BroadcastStatus;
    sentCount?: number;
    failCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BroadcastUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutBroadcastsNestedInput;
};
export type BroadcastUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BroadcastCreateManyInput = {
    id?: string;
    businessId: string;
    text: string;
    mediaUrl?: string | null;
    status?: $Enums.BroadcastStatus;
    sentCount?: number;
    failCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BroadcastUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BroadcastUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BroadcastListRelationFilter = {
    every?: Prisma.BroadcastWhereInput;
    some?: Prisma.BroadcastWhereInput;
    none?: Prisma.BroadcastWhereInput;
};
export type BroadcastOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BroadcastCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BroadcastAvgOrderByAggregateInput = {
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
};
export type BroadcastMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BroadcastMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BroadcastSumOrderByAggregateInput = {
    sentCount?: Prisma.SortOrder;
    failCount?: Prisma.SortOrder;
};
export type BroadcastCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.BroadcastCreateWithoutBusinessInput, Prisma.BroadcastUncheckedCreateWithoutBusinessInput> | Prisma.BroadcastCreateWithoutBusinessInput[] | Prisma.BroadcastUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BroadcastCreateOrConnectWithoutBusinessInput | Prisma.BroadcastCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.BroadcastCreateManyBusinessInputEnvelope;
    connect?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
};
export type BroadcastUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.BroadcastCreateWithoutBusinessInput, Prisma.BroadcastUncheckedCreateWithoutBusinessInput> | Prisma.BroadcastCreateWithoutBusinessInput[] | Prisma.BroadcastUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BroadcastCreateOrConnectWithoutBusinessInput | Prisma.BroadcastCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.BroadcastCreateManyBusinessInputEnvelope;
    connect?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
};
export type BroadcastUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.BroadcastCreateWithoutBusinessInput, Prisma.BroadcastUncheckedCreateWithoutBusinessInput> | Prisma.BroadcastCreateWithoutBusinessInput[] | Prisma.BroadcastUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BroadcastCreateOrConnectWithoutBusinessInput | Prisma.BroadcastCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.BroadcastUpsertWithWhereUniqueWithoutBusinessInput | Prisma.BroadcastUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.BroadcastCreateManyBusinessInputEnvelope;
    set?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    disconnect?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    delete?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    connect?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    update?: Prisma.BroadcastUpdateWithWhereUniqueWithoutBusinessInput | Prisma.BroadcastUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.BroadcastUpdateManyWithWhereWithoutBusinessInput | Prisma.BroadcastUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.BroadcastScalarWhereInput | Prisma.BroadcastScalarWhereInput[];
};
export type BroadcastUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.BroadcastCreateWithoutBusinessInput, Prisma.BroadcastUncheckedCreateWithoutBusinessInput> | Prisma.BroadcastCreateWithoutBusinessInput[] | Prisma.BroadcastUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BroadcastCreateOrConnectWithoutBusinessInput | Prisma.BroadcastCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.BroadcastUpsertWithWhereUniqueWithoutBusinessInput | Prisma.BroadcastUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.BroadcastCreateManyBusinessInputEnvelope;
    set?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    disconnect?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    delete?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    connect?: Prisma.BroadcastWhereUniqueInput | Prisma.BroadcastWhereUniqueInput[];
    update?: Prisma.BroadcastUpdateWithWhereUniqueWithoutBusinessInput | Prisma.BroadcastUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.BroadcastUpdateManyWithWhereWithoutBusinessInput | Prisma.BroadcastUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.BroadcastScalarWhereInput | Prisma.BroadcastScalarWhereInput[];
};
export type EnumBroadcastStatusFieldUpdateOperationsInput = {
    set?: $Enums.BroadcastStatus;
};
export type BroadcastCreateWithoutBusinessInput = {
    id?: string;
    text: string;
    mediaUrl?: string | null;
    status?: $Enums.BroadcastStatus;
    sentCount?: number;
    failCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BroadcastUncheckedCreateWithoutBusinessInput = {
    id?: string;
    text: string;
    mediaUrl?: string | null;
    status?: $Enums.BroadcastStatus;
    sentCount?: number;
    failCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BroadcastCreateOrConnectWithoutBusinessInput = {
    where: Prisma.BroadcastWhereUniqueInput;
    create: Prisma.XOR<Prisma.BroadcastCreateWithoutBusinessInput, Prisma.BroadcastUncheckedCreateWithoutBusinessInput>;
};
export type BroadcastCreateManyBusinessInputEnvelope = {
    data: Prisma.BroadcastCreateManyBusinessInput | Prisma.BroadcastCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type BroadcastUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.BroadcastWhereUniqueInput;
    update: Prisma.XOR<Prisma.BroadcastUpdateWithoutBusinessInput, Prisma.BroadcastUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.BroadcastCreateWithoutBusinessInput, Prisma.BroadcastUncheckedCreateWithoutBusinessInput>;
};
export type BroadcastUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.BroadcastWhereUniqueInput;
    data: Prisma.XOR<Prisma.BroadcastUpdateWithoutBusinessInput, Prisma.BroadcastUncheckedUpdateWithoutBusinessInput>;
};
export type BroadcastUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.BroadcastScalarWhereInput;
    data: Prisma.XOR<Prisma.BroadcastUpdateManyMutationInput, Prisma.BroadcastUncheckedUpdateManyWithoutBusinessInput>;
};
export type BroadcastScalarWhereInput = {
    AND?: Prisma.BroadcastScalarWhereInput | Prisma.BroadcastScalarWhereInput[];
    OR?: Prisma.BroadcastScalarWhereInput[];
    NOT?: Prisma.BroadcastScalarWhereInput | Prisma.BroadcastScalarWhereInput[];
    id?: Prisma.StringFilter<"Broadcast"> | string;
    businessId?: Prisma.StringFilter<"Broadcast"> | string;
    text?: Prisma.StringFilter<"Broadcast"> | string;
    mediaUrl?: Prisma.StringNullableFilter<"Broadcast"> | string | null;
    status?: Prisma.EnumBroadcastStatusFilter<"Broadcast"> | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFilter<"Broadcast"> | number;
    failCount?: Prisma.IntFilter<"Broadcast"> | number;
    createdAt?: Prisma.DateTimeFilter<"Broadcast"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Broadcast"> | Date | string;
};
export type BroadcastCreateManyBusinessInput = {
    id?: string;
    text: string;
    mediaUrl?: string | null;
    status?: $Enums.BroadcastStatus;
    sentCount?: number;
    failCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BroadcastUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BroadcastUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BroadcastUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBroadcastStatusFieldUpdateOperationsInput | $Enums.BroadcastStatus;
    sentCount?: Prisma.IntFieldUpdateOperationsInput | number;
    failCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BroadcastSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    text?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    sentCount?: boolean;
    failCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["broadcast"]>;
export type BroadcastSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    text?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    sentCount?: boolean;
    failCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["broadcast"]>;
export type BroadcastSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    text?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    sentCount?: boolean;
    failCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["broadcast"]>;
export type BroadcastSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    text?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    sentCount?: boolean;
    failCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BroadcastOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "text" | "mediaUrl" | "status" | "sentCount" | "failCount" | "createdAt" | "updatedAt", ExtArgs["result"]["broadcast"]>;
export type BroadcastInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type BroadcastIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type BroadcastIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $BroadcastPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Broadcast";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        text: string;
        mediaUrl: string | null;
        status: $Enums.BroadcastStatus;
        sentCount: number;
        failCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["broadcast"]>;
    composites: {};
};
export type BroadcastGetPayload<S extends boolean | null | undefined | BroadcastDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BroadcastPayload, S>;
export type BroadcastCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BroadcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BroadcastCountAggregateInputType | true;
};
export interface BroadcastDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Broadcast'];
        meta: {
            name: 'Broadcast';
        };
    };
    findUnique<T extends BroadcastFindUniqueArgs>(args: Prisma.SelectSubset<T, BroadcastFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BroadcastFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BroadcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BroadcastFindFirstArgs>(args?: Prisma.SelectSubset<T, BroadcastFindFirstArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BroadcastFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BroadcastFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BroadcastFindManyArgs>(args?: Prisma.SelectSubset<T, BroadcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BroadcastCreateArgs>(args: Prisma.SelectSubset<T, BroadcastCreateArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BroadcastCreateManyArgs>(args?: Prisma.SelectSubset<T, BroadcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BroadcastCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BroadcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BroadcastDeleteArgs>(args: Prisma.SelectSubset<T, BroadcastDeleteArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BroadcastUpdateArgs>(args: Prisma.SelectSubset<T, BroadcastUpdateArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BroadcastDeleteManyArgs>(args?: Prisma.SelectSubset<T, BroadcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BroadcastUpdateManyArgs>(args: Prisma.SelectSubset<T, BroadcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BroadcastUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BroadcastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BroadcastUpsertArgs>(args: Prisma.SelectSubset<T, BroadcastUpsertArgs<ExtArgs>>): Prisma.Prisma__BroadcastClient<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BroadcastCountArgs>(args?: Prisma.Subset<T, BroadcastCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BroadcastCountAggregateOutputType> : number>;
    aggregate<T extends BroadcastAggregateArgs>(args: Prisma.Subset<T, BroadcastAggregateArgs>): Prisma.PrismaPromise<GetBroadcastAggregateType<T>>;
    groupBy<T extends BroadcastGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BroadcastGroupByArgs['orderBy'];
    } : {
        orderBy?: BroadcastGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BroadcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BroadcastFieldRefs;
}
export interface Prisma__BroadcastClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BroadcastFieldRefs {
    readonly id: Prisma.FieldRef<"Broadcast", 'String'>;
    readonly businessId: Prisma.FieldRef<"Broadcast", 'String'>;
    readonly text: Prisma.FieldRef<"Broadcast", 'String'>;
    readonly mediaUrl: Prisma.FieldRef<"Broadcast", 'String'>;
    readonly status: Prisma.FieldRef<"Broadcast", 'BroadcastStatus'>;
    readonly sentCount: Prisma.FieldRef<"Broadcast", 'Int'>;
    readonly failCount: Prisma.FieldRef<"Broadcast", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Broadcast", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Broadcast", 'DateTime'>;
}
export type BroadcastFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where: Prisma.BroadcastWhereUniqueInput;
};
export type BroadcastFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where: Prisma.BroadcastWhereUniqueInput;
};
export type BroadcastFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where?: Prisma.BroadcastWhereInput;
    orderBy?: Prisma.BroadcastOrderByWithRelationInput | Prisma.BroadcastOrderByWithRelationInput[];
    cursor?: Prisma.BroadcastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BroadcastScalarFieldEnum | Prisma.BroadcastScalarFieldEnum[];
};
export type BroadcastFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where?: Prisma.BroadcastWhereInput;
    orderBy?: Prisma.BroadcastOrderByWithRelationInput | Prisma.BroadcastOrderByWithRelationInput[];
    cursor?: Prisma.BroadcastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BroadcastScalarFieldEnum | Prisma.BroadcastScalarFieldEnum[];
};
export type BroadcastFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where?: Prisma.BroadcastWhereInput;
    orderBy?: Prisma.BroadcastOrderByWithRelationInput | Prisma.BroadcastOrderByWithRelationInput[];
    cursor?: Prisma.BroadcastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BroadcastScalarFieldEnum | Prisma.BroadcastScalarFieldEnum[];
};
export type BroadcastCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BroadcastCreateInput, Prisma.BroadcastUncheckedCreateInput>;
};
export type BroadcastCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BroadcastCreateManyInput | Prisma.BroadcastCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BroadcastCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    data: Prisma.BroadcastCreateManyInput | Prisma.BroadcastCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BroadcastIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BroadcastUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BroadcastUpdateInput, Prisma.BroadcastUncheckedUpdateInput>;
    where: Prisma.BroadcastWhereUniqueInput;
};
export type BroadcastUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BroadcastUpdateManyMutationInput, Prisma.BroadcastUncheckedUpdateManyInput>;
    where?: Prisma.BroadcastWhereInput;
    limit?: number;
};
export type BroadcastUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BroadcastUpdateManyMutationInput, Prisma.BroadcastUncheckedUpdateManyInput>;
    where?: Prisma.BroadcastWhereInput;
    limit?: number;
    include?: Prisma.BroadcastIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BroadcastUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where: Prisma.BroadcastWhereUniqueInput;
    create: Prisma.XOR<Prisma.BroadcastCreateInput, Prisma.BroadcastUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BroadcastUpdateInput, Prisma.BroadcastUncheckedUpdateInput>;
};
export type BroadcastDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
    where: Prisma.BroadcastWhereUniqueInput;
};
export type BroadcastDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BroadcastWhereInput;
    limit?: number;
};
export type BroadcastDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BroadcastSelect<ExtArgs> | null;
    omit?: Prisma.BroadcastOmit<ExtArgs> | null;
    include?: Prisma.BroadcastInclude<ExtArgs> | null;
};
