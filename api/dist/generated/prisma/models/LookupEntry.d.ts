import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LookupEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$LookupEntryPayload>;
export type AggregateLookupEntry = {
    _count: LookupEntryCountAggregateOutputType | null;
    _min: LookupEntryMinAggregateOutputType | null;
    _max: LookupEntryMaxAggregateOutputType | null;
};
export type LookupEntryMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    kind: $Enums.LookupKind | null;
    identifier: string | null;
    status: string | null;
    customerPhone: string | null;
    note: string | null;
    notifyOnUpdate: boolean | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LookupEntryMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    kind: $Enums.LookupKind | null;
    identifier: string | null;
    status: string | null;
    customerPhone: string | null;
    note: string | null;
    notifyOnUpdate: boolean | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LookupEntryCountAggregateOutputType = {
    id: number;
    businessId: number;
    kind: number;
    identifier: number;
    status: number;
    customerPhone: number;
    note: number;
    notifyOnUpdate: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LookupEntryMinAggregateInputType = {
    id?: true;
    businessId?: true;
    kind?: true;
    identifier?: true;
    status?: true;
    customerPhone?: true;
    note?: true;
    notifyOnUpdate?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LookupEntryMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    kind?: true;
    identifier?: true;
    status?: true;
    customerPhone?: true;
    note?: true;
    notifyOnUpdate?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LookupEntryCountAggregateInputType = {
    id?: true;
    businessId?: true;
    kind?: true;
    identifier?: true;
    status?: true;
    customerPhone?: true;
    note?: true;
    notifyOnUpdate?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LookupEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LookupEntryWhereInput;
    orderBy?: Prisma.LookupEntryOrderByWithRelationInput | Prisma.LookupEntryOrderByWithRelationInput[];
    cursor?: Prisma.LookupEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LookupEntryCountAggregateInputType;
    _min?: LookupEntryMinAggregateInputType;
    _max?: LookupEntryMaxAggregateInputType;
};
export type GetLookupEntryAggregateType<T extends LookupEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateLookupEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLookupEntry[P]> : Prisma.GetScalarType<T[P], AggregateLookupEntry[P]>;
};
export type LookupEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LookupEntryWhereInput;
    orderBy?: Prisma.LookupEntryOrderByWithAggregationInput | Prisma.LookupEntryOrderByWithAggregationInput[];
    by: Prisma.LookupEntryScalarFieldEnum[] | Prisma.LookupEntryScalarFieldEnum;
    having?: Prisma.LookupEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LookupEntryCountAggregateInputType | true;
    _min?: LookupEntryMinAggregateInputType;
    _max?: LookupEntryMaxAggregateInputType;
};
export type LookupEntryGroupByOutputType = {
    id: string;
    businessId: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone: string | null;
    note: string | null;
    notifyOnUpdate: boolean;
    productId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LookupEntryCountAggregateOutputType | null;
    _min: LookupEntryMinAggregateOutputType | null;
    _max: LookupEntryMaxAggregateOutputType | null;
};
export type GetLookupEntryGroupByPayload<T extends LookupEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LookupEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LookupEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LookupEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LookupEntryGroupByOutputType[P]>;
}>>;
export type LookupEntryWhereInput = {
    AND?: Prisma.LookupEntryWhereInput | Prisma.LookupEntryWhereInput[];
    OR?: Prisma.LookupEntryWhereInput[];
    NOT?: Prisma.LookupEntryWhereInput | Prisma.LookupEntryWhereInput[];
    id?: Prisma.StringFilter<"LookupEntry"> | string;
    businessId?: Prisma.StringFilter<"LookupEntry"> | string;
    kind?: Prisma.EnumLookupKindFilter<"LookupEntry"> | $Enums.LookupKind;
    identifier?: Prisma.StringFilter<"LookupEntry"> | string;
    status?: Prisma.StringFilter<"LookupEntry"> | string;
    customerPhone?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    note?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    notifyOnUpdate?: Prisma.BoolFilter<"LookupEntry"> | boolean;
    productId?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LookupEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LookupEntry"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
};
export type LookupEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    notifyOnUpdate?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type LookupEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    businessId_kind_identifier?: Prisma.LookupEntryBusinessIdKindIdentifierCompoundUniqueInput;
    AND?: Prisma.LookupEntryWhereInput | Prisma.LookupEntryWhereInput[];
    OR?: Prisma.LookupEntryWhereInput[];
    NOT?: Prisma.LookupEntryWhereInput | Prisma.LookupEntryWhereInput[];
    businessId?: Prisma.StringFilter<"LookupEntry"> | string;
    kind?: Prisma.EnumLookupKindFilter<"LookupEntry"> | $Enums.LookupKind;
    identifier?: Prisma.StringFilter<"LookupEntry"> | string;
    status?: Prisma.StringFilter<"LookupEntry"> | string;
    customerPhone?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    note?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    notifyOnUpdate?: Prisma.BoolFilter<"LookupEntry"> | boolean;
    productId?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LookupEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LookupEntry"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
}, "id" | "businessId_kind_identifier">;
export type LookupEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    notifyOnUpdate?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LookupEntryCountOrderByAggregateInput;
    _max?: Prisma.LookupEntryMaxOrderByAggregateInput;
    _min?: Prisma.LookupEntryMinOrderByAggregateInput;
};
export type LookupEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.LookupEntryScalarWhereWithAggregatesInput | Prisma.LookupEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.LookupEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LookupEntryScalarWhereWithAggregatesInput | Prisma.LookupEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LookupEntry"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"LookupEntry"> | string;
    kind?: Prisma.EnumLookupKindWithAggregatesFilter<"LookupEntry"> | $Enums.LookupKind;
    identifier?: Prisma.StringWithAggregatesFilter<"LookupEntry"> | string;
    status?: Prisma.StringWithAggregatesFilter<"LookupEntry"> | string;
    customerPhone?: Prisma.StringNullableWithAggregatesFilter<"LookupEntry"> | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"LookupEntry"> | string | null;
    notifyOnUpdate?: Prisma.BoolWithAggregatesFilter<"LookupEntry"> | boolean;
    productId?: Prisma.StringNullableWithAggregatesFilter<"LookupEntry"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LookupEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LookupEntry"> | Date | string;
};
export type LookupEntryCreateInput = {
    id?: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutLookupEntriesInput;
    product?: Prisma.ProductCreateNestedOneWithoutLookupEntriesInput;
};
export type LookupEntryUncheckedCreateInput = {
    id?: string;
    businessId: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    productId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LookupEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutLookupEntriesNestedInput;
    product?: Prisma.ProductUpdateOneWithoutLookupEntriesNestedInput;
};
export type LookupEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntryCreateManyInput = {
    id?: string;
    businessId: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    productId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LookupEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntryListRelationFilter = {
    every?: Prisma.LookupEntryWhereInput;
    some?: Prisma.LookupEntryWhereInput;
    none?: Prisma.LookupEntryWhereInput;
};
export type LookupEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LookupEntryBusinessIdKindIdentifierCompoundUniqueInput = {
    businessId: string;
    kind: $Enums.LookupKind;
    identifier: string;
};
export type LookupEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    notifyOnUpdate?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LookupEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    notifyOnUpdate?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LookupEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    kind?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    notifyOnUpdate?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LookupEntryCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutBusinessInput, Prisma.LookupEntryUncheckedCreateWithoutBusinessInput> | Prisma.LookupEntryCreateWithoutBusinessInput[] | Prisma.LookupEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutBusinessInput | Prisma.LookupEntryCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.LookupEntryCreateManyBusinessInputEnvelope;
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
};
export type LookupEntryUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutBusinessInput, Prisma.LookupEntryUncheckedCreateWithoutBusinessInput> | Prisma.LookupEntryCreateWithoutBusinessInput[] | Prisma.LookupEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutBusinessInput | Prisma.LookupEntryCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.LookupEntryCreateManyBusinessInputEnvelope;
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
};
export type LookupEntryUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutBusinessInput, Prisma.LookupEntryUncheckedCreateWithoutBusinessInput> | Prisma.LookupEntryCreateWithoutBusinessInput[] | Prisma.LookupEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutBusinessInput | Prisma.LookupEntryCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.LookupEntryUpsertWithWhereUniqueWithoutBusinessInput | Prisma.LookupEntryUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.LookupEntryCreateManyBusinessInputEnvelope;
    set?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    disconnect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    delete?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    update?: Prisma.LookupEntryUpdateWithWhereUniqueWithoutBusinessInput | Prisma.LookupEntryUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.LookupEntryUpdateManyWithWhereWithoutBusinessInput | Prisma.LookupEntryUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.LookupEntryScalarWhereInput | Prisma.LookupEntryScalarWhereInput[];
};
export type LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutBusinessInput, Prisma.LookupEntryUncheckedCreateWithoutBusinessInput> | Prisma.LookupEntryCreateWithoutBusinessInput[] | Prisma.LookupEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutBusinessInput | Prisma.LookupEntryCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.LookupEntryUpsertWithWhereUniqueWithoutBusinessInput | Prisma.LookupEntryUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.LookupEntryCreateManyBusinessInputEnvelope;
    set?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    disconnect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    delete?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    update?: Prisma.LookupEntryUpdateWithWhereUniqueWithoutBusinessInput | Prisma.LookupEntryUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.LookupEntryUpdateManyWithWhereWithoutBusinessInput | Prisma.LookupEntryUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.LookupEntryScalarWhereInput | Prisma.LookupEntryScalarWhereInput[];
};
export type LookupEntryCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutProductInput, Prisma.LookupEntryUncheckedCreateWithoutProductInput> | Prisma.LookupEntryCreateWithoutProductInput[] | Prisma.LookupEntryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutProductInput | Prisma.LookupEntryCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.LookupEntryCreateManyProductInputEnvelope;
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
};
export type LookupEntryUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutProductInput, Prisma.LookupEntryUncheckedCreateWithoutProductInput> | Prisma.LookupEntryCreateWithoutProductInput[] | Prisma.LookupEntryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutProductInput | Prisma.LookupEntryCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.LookupEntryCreateManyProductInputEnvelope;
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
};
export type LookupEntryUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutProductInput, Prisma.LookupEntryUncheckedCreateWithoutProductInput> | Prisma.LookupEntryCreateWithoutProductInput[] | Prisma.LookupEntryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutProductInput | Prisma.LookupEntryCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.LookupEntryUpsertWithWhereUniqueWithoutProductInput | Prisma.LookupEntryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.LookupEntryCreateManyProductInputEnvelope;
    set?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    disconnect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    delete?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    update?: Prisma.LookupEntryUpdateWithWhereUniqueWithoutProductInput | Prisma.LookupEntryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.LookupEntryUpdateManyWithWhereWithoutProductInput | Prisma.LookupEntryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.LookupEntryScalarWhereInput | Prisma.LookupEntryScalarWhereInput[];
};
export type LookupEntryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.LookupEntryCreateWithoutProductInput, Prisma.LookupEntryUncheckedCreateWithoutProductInput> | Prisma.LookupEntryCreateWithoutProductInput[] | Prisma.LookupEntryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.LookupEntryCreateOrConnectWithoutProductInput | Prisma.LookupEntryCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.LookupEntryUpsertWithWhereUniqueWithoutProductInput | Prisma.LookupEntryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.LookupEntryCreateManyProductInputEnvelope;
    set?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    disconnect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    delete?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    connect?: Prisma.LookupEntryWhereUniqueInput | Prisma.LookupEntryWhereUniqueInput[];
    update?: Prisma.LookupEntryUpdateWithWhereUniqueWithoutProductInput | Prisma.LookupEntryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.LookupEntryUpdateManyWithWhereWithoutProductInput | Prisma.LookupEntryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.LookupEntryScalarWhereInput | Prisma.LookupEntryScalarWhereInput[];
};
export type EnumLookupKindFieldUpdateOperationsInput = {
    set?: $Enums.LookupKind;
};
export type LookupEntryCreateWithoutBusinessInput = {
    id?: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product?: Prisma.ProductCreateNestedOneWithoutLookupEntriesInput;
};
export type LookupEntryUncheckedCreateWithoutBusinessInput = {
    id?: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    productId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LookupEntryCreateOrConnectWithoutBusinessInput = {
    where: Prisma.LookupEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LookupEntryCreateWithoutBusinessInput, Prisma.LookupEntryUncheckedCreateWithoutBusinessInput>;
};
export type LookupEntryCreateManyBusinessInputEnvelope = {
    data: Prisma.LookupEntryCreateManyBusinessInput | Prisma.LookupEntryCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type LookupEntryUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.LookupEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LookupEntryUpdateWithoutBusinessInput, Prisma.LookupEntryUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.LookupEntryCreateWithoutBusinessInput, Prisma.LookupEntryUncheckedCreateWithoutBusinessInput>;
};
export type LookupEntryUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.LookupEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LookupEntryUpdateWithoutBusinessInput, Prisma.LookupEntryUncheckedUpdateWithoutBusinessInput>;
};
export type LookupEntryUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.LookupEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.LookupEntryUpdateManyMutationInput, Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessInput>;
};
export type LookupEntryScalarWhereInput = {
    AND?: Prisma.LookupEntryScalarWhereInput | Prisma.LookupEntryScalarWhereInput[];
    OR?: Prisma.LookupEntryScalarWhereInput[];
    NOT?: Prisma.LookupEntryScalarWhereInput | Prisma.LookupEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"LookupEntry"> | string;
    businessId?: Prisma.StringFilter<"LookupEntry"> | string;
    kind?: Prisma.EnumLookupKindFilter<"LookupEntry"> | $Enums.LookupKind;
    identifier?: Prisma.StringFilter<"LookupEntry"> | string;
    status?: Prisma.StringFilter<"LookupEntry"> | string;
    customerPhone?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    note?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    notifyOnUpdate?: Prisma.BoolFilter<"LookupEntry"> | boolean;
    productId?: Prisma.StringNullableFilter<"LookupEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LookupEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LookupEntry"> | Date | string;
};
export type LookupEntryCreateWithoutProductInput = {
    id?: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutLookupEntriesInput;
};
export type LookupEntryUncheckedCreateWithoutProductInput = {
    id?: string;
    businessId: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LookupEntryCreateOrConnectWithoutProductInput = {
    where: Prisma.LookupEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LookupEntryCreateWithoutProductInput, Prisma.LookupEntryUncheckedCreateWithoutProductInput>;
};
export type LookupEntryCreateManyProductInputEnvelope = {
    data: Prisma.LookupEntryCreateManyProductInput | Prisma.LookupEntryCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type LookupEntryUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.LookupEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LookupEntryUpdateWithoutProductInput, Prisma.LookupEntryUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.LookupEntryCreateWithoutProductInput, Prisma.LookupEntryUncheckedCreateWithoutProductInput>;
};
export type LookupEntryUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.LookupEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LookupEntryUpdateWithoutProductInput, Prisma.LookupEntryUncheckedUpdateWithoutProductInput>;
};
export type LookupEntryUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.LookupEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.LookupEntryUpdateManyMutationInput, Prisma.LookupEntryUncheckedUpdateManyWithoutProductInput>;
};
export type LookupEntryCreateManyBusinessInput = {
    id?: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    productId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LookupEntryUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneWithoutLookupEntriesNestedInput;
};
export type LookupEntryUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntryUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntryCreateManyProductInput = {
    id?: string;
    businessId: string;
    kind: $Enums.LookupKind;
    identifier: string;
    status: string;
    customerPhone?: string | null;
    note?: string | null;
    notifyOnUpdate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LookupEntryUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutLookupEntriesNestedInput;
};
export type LookupEntryUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntryUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    kind?: Prisma.EnumLookupKindFieldUpdateOperationsInput | $Enums.LookupKind;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notifyOnUpdate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LookupEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    kind?: boolean;
    identifier?: boolean;
    status?: boolean;
    customerPhone?: boolean;
    note?: boolean;
    notifyOnUpdate?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.LookupEntry$productArgs<ExtArgs>;
}, ExtArgs["result"]["lookupEntry"]>;
export type LookupEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    kind?: boolean;
    identifier?: boolean;
    status?: boolean;
    customerPhone?: boolean;
    note?: boolean;
    notifyOnUpdate?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.LookupEntry$productArgs<ExtArgs>;
}, ExtArgs["result"]["lookupEntry"]>;
export type LookupEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    kind?: boolean;
    identifier?: boolean;
    status?: boolean;
    customerPhone?: boolean;
    note?: boolean;
    notifyOnUpdate?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.LookupEntry$productArgs<ExtArgs>;
}, ExtArgs["result"]["lookupEntry"]>;
export type LookupEntrySelectScalar = {
    id?: boolean;
    businessId?: boolean;
    kind?: boolean;
    identifier?: boolean;
    status?: boolean;
    customerPhone?: boolean;
    note?: boolean;
    notifyOnUpdate?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LookupEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "kind" | "identifier" | "status" | "customerPhone" | "note" | "notifyOnUpdate" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["lookupEntry"]>;
export type LookupEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.LookupEntry$productArgs<ExtArgs>;
};
export type LookupEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.LookupEntry$productArgs<ExtArgs>;
};
export type LookupEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.LookupEntry$productArgs<ExtArgs>;
};
export type $LookupEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LookupEntry";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        kind: $Enums.LookupKind;
        identifier: string;
        status: string;
        customerPhone: string | null;
        note: string | null;
        notifyOnUpdate: boolean;
        productId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lookupEntry"]>;
    composites: {};
};
export type LookupEntryGetPayload<S extends boolean | null | undefined | LookupEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload, S>;
export type LookupEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LookupEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LookupEntryCountAggregateInputType | true;
};
export interface LookupEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LookupEntry'];
        meta: {
            name: 'LookupEntry';
        };
    };
    findUnique<T extends LookupEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, LookupEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LookupEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LookupEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LookupEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, LookupEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LookupEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LookupEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LookupEntryFindManyArgs>(args?: Prisma.SelectSubset<T, LookupEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LookupEntryCreateArgs>(args: Prisma.SelectSubset<T, LookupEntryCreateArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LookupEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, LookupEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LookupEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LookupEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LookupEntryDeleteArgs>(args: Prisma.SelectSubset<T, LookupEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LookupEntryUpdateArgs>(args: Prisma.SelectSubset<T, LookupEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LookupEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, LookupEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LookupEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, LookupEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LookupEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LookupEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LookupEntryUpsertArgs>(args: Prisma.SelectSubset<T, LookupEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__LookupEntryClient<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LookupEntryCountArgs>(args?: Prisma.Subset<T, LookupEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LookupEntryCountAggregateOutputType> : number>;
    aggregate<T extends LookupEntryAggregateArgs>(args: Prisma.Subset<T, LookupEntryAggregateArgs>): Prisma.PrismaPromise<GetLookupEntryAggregateType<T>>;
    groupBy<T extends LookupEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LookupEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: LookupEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LookupEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLookupEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LookupEntryFieldRefs;
}
export interface Prisma__LookupEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.LookupEntry$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LookupEntry$productArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LookupEntryFieldRefs {
    readonly id: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly businessId: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly kind: Prisma.FieldRef<"LookupEntry", 'LookupKind'>;
    readonly identifier: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly status: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly customerPhone: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly note: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly notifyOnUpdate: Prisma.FieldRef<"LookupEntry", 'Boolean'>;
    readonly productId: Prisma.FieldRef<"LookupEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LookupEntry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LookupEntry", 'DateTime'>;
}
export type LookupEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where: Prisma.LookupEntryWhereUniqueInput;
};
export type LookupEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where: Prisma.LookupEntryWhereUniqueInput;
};
export type LookupEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where?: Prisma.LookupEntryWhereInput;
    orderBy?: Prisma.LookupEntryOrderByWithRelationInput | Prisma.LookupEntryOrderByWithRelationInput[];
    cursor?: Prisma.LookupEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LookupEntryScalarFieldEnum | Prisma.LookupEntryScalarFieldEnum[];
};
export type LookupEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where?: Prisma.LookupEntryWhereInput;
    orderBy?: Prisma.LookupEntryOrderByWithRelationInput | Prisma.LookupEntryOrderByWithRelationInput[];
    cursor?: Prisma.LookupEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LookupEntryScalarFieldEnum | Prisma.LookupEntryScalarFieldEnum[];
};
export type LookupEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where?: Prisma.LookupEntryWhereInput;
    orderBy?: Prisma.LookupEntryOrderByWithRelationInput | Prisma.LookupEntryOrderByWithRelationInput[];
    cursor?: Prisma.LookupEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LookupEntryScalarFieldEnum | Prisma.LookupEntryScalarFieldEnum[];
};
export type LookupEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LookupEntryCreateInput, Prisma.LookupEntryUncheckedCreateInput>;
};
export type LookupEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LookupEntryCreateManyInput | Prisma.LookupEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LookupEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    data: Prisma.LookupEntryCreateManyInput | Prisma.LookupEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LookupEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LookupEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LookupEntryUpdateInput, Prisma.LookupEntryUncheckedUpdateInput>;
    where: Prisma.LookupEntryWhereUniqueInput;
};
export type LookupEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LookupEntryUpdateManyMutationInput, Prisma.LookupEntryUncheckedUpdateManyInput>;
    where?: Prisma.LookupEntryWhereInput;
    limit?: number;
};
export type LookupEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LookupEntryUpdateManyMutationInput, Prisma.LookupEntryUncheckedUpdateManyInput>;
    where?: Prisma.LookupEntryWhereInput;
    limit?: number;
    include?: Prisma.LookupEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LookupEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where: Prisma.LookupEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LookupEntryCreateInput, Prisma.LookupEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LookupEntryUpdateInput, Prisma.LookupEntryUncheckedUpdateInput>;
};
export type LookupEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
    where: Prisma.LookupEntryWhereUniqueInput;
};
export type LookupEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LookupEntryWhereInput;
    limit?: number;
};
export type LookupEntry$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
};
export type LookupEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LookupEntrySelect<ExtArgs> | null;
    omit?: Prisma.LookupEntryOmit<ExtArgs> | null;
    include?: Prisma.LookupEntryInclude<ExtArgs> | null;
};
