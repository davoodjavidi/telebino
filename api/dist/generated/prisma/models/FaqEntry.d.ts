import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FaqEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$FaqEntryPayload>;
export type AggregateFaqEntry = {
    _count: FaqEntryCountAggregateOutputType | null;
    _min: FaqEntryMinAggregateOutputType | null;
    _max: FaqEntryMaxAggregateOutputType | null;
};
export type FaqEntryMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    question: string | null;
    answer: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FaqEntryMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    question: string | null;
    answer: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FaqEntryCountAggregateOutputType = {
    id: number;
    businessId: number;
    question: number;
    alternatePhrases: number;
    answer: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FaqEntryMinAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    answer?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FaqEntryMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    answer?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FaqEntryCountAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    alternatePhrases?: true;
    answer?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FaqEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaqEntryWhereInput;
    orderBy?: Prisma.FaqEntryOrderByWithRelationInput | Prisma.FaqEntryOrderByWithRelationInput[];
    cursor?: Prisma.FaqEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FaqEntryCountAggregateInputType;
    _min?: FaqEntryMinAggregateInputType;
    _max?: FaqEntryMaxAggregateInputType;
};
export type GetFaqEntryAggregateType<T extends FaqEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateFaqEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFaqEntry[P]> : Prisma.GetScalarType<T[P], AggregateFaqEntry[P]>;
};
export type FaqEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaqEntryWhereInput;
    orderBy?: Prisma.FaqEntryOrderByWithAggregationInput | Prisma.FaqEntryOrderByWithAggregationInput[];
    by: Prisma.FaqEntryScalarFieldEnum[] | Prisma.FaqEntryScalarFieldEnum;
    having?: Prisma.FaqEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FaqEntryCountAggregateInputType | true;
    _min?: FaqEntryMinAggregateInputType;
    _max?: FaqEntryMaxAggregateInputType;
};
export type FaqEntryGroupByOutputType = {
    id: string;
    businessId: string;
    question: string;
    alternatePhrases: string[];
    answer: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FaqEntryCountAggregateOutputType | null;
    _min: FaqEntryMinAggregateOutputType | null;
    _max: FaqEntryMaxAggregateOutputType | null;
};
export type GetFaqEntryGroupByPayload<T extends FaqEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FaqEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FaqEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FaqEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FaqEntryGroupByOutputType[P]>;
}>>;
export type FaqEntryWhereInput = {
    AND?: Prisma.FaqEntryWhereInput | Prisma.FaqEntryWhereInput[];
    OR?: Prisma.FaqEntryWhereInput[];
    NOT?: Prisma.FaqEntryWhereInput | Prisma.FaqEntryWhereInput[];
    id?: Prisma.StringFilter<"FaqEntry"> | string;
    businessId?: Prisma.StringFilter<"FaqEntry"> | string;
    question?: Prisma.StringFilter<"FaqEntry"> | string;
    alternatePhrases?: Prisma.StringNullableListFilter<"FaqEntry">;
    answer?: Prisma.StringFilter<"FaqEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"FaqEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FaqEntry"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type FaqEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    alternatePhrases?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type FaqEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FaqEntryWhereInput | Prisma.FaqEntryWhereInput[];
    OR?: Prisma.FaqEntryWhereInput[];
    NOT?: Prisma.FaqEntryWhereInput | Prisma.FaqEntryWhereInput[];
    businessId?: Prisma.StringFilter<"FaqEntry"> | string;
    question?: Prisma.StringFilter<"FaqEntry"> | string;
    alternatePhrases?: Prisma.StringNullableListFilter<"FaqEntry">;
    answer?: Prisma.StringFilter<"FaqEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"FaqEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FaqEntry"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id">;
export type FaqEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    alternatePhrases?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FaqEntryCountOrderByAggregateInput;
    _max?: Prisma.FaqEntryMaxOrderByAggregateInput;
    _min?: Prisma.FaqEntryMinOrderByAggregateInput;
};
export type FaqEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.FaqEntryScalarWhereWithAggregatesInput | Prisma.FaqEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.FaqEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FaqEntryScalarWhereWithAggregatesInput | Prisma.FaqEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FaqEntry"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"FaqEntry"> | string;
    question?: Prisma.StringWithAggregatesFilter<"FaqEntry"> | string;
    alternatePhrases?: Prisma.StringNullableListFilter<"FaqEntry">;
    answer?: Prisma.StringWithAggregatesFilter<"FaqEntry"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FaqEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FaqEntry"> | Date | string;
};
export type FaqEntryCreateInput = {
    id?: string;
    question: string;
    alternatePhrases?: Prisma.FaqEntryCreatealternatePhrasesInput | string[];
    answer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutFaqEntriesInput;
};
export type FaqEntryUncheckedCreateInput = {
    id?: string;
    businessId: string;
    question: string;
    alternatePhrases?: Prisma.FaqEntryCreatealternatePhrasesInput | string[];
    answer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaqEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutFaqEntriesNestedInput;
};
export type FaqEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaqEntryCreateManyInput = {
    id?: string;
    businessId: string;
    question: string;
    alternatePhrases?: Prisma.FaqEntryCreatealternatePhrasesInput | string[];
    answer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaqEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaqEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaqEntryListRelationFilter = {
    every?: Prisma.FaqEntryWhereInput;
    some?: Prisma.FaqEntryWhereInput;
    none?: Prisma.FaqEntryWhereInput;
};
export type FaqEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type FaqEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    alternatePhrases?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FaqEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FaqEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FaqEntryCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.FaqEntryCreateWithoutBusinessInput, Prisma.FaqEntryUncheckedCreateWithoutBusinessInput> | Prisma.FaqEntryCreateWithoutBusinessInput[] | Prisma.FaqEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FaqEntryCreateOrConnectWithoutBusinessInput | Prisma.FaqEntryCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.FaqEntryCreateManyBusinessInputEnvelope;
    connect?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
};
export type FaqEntryUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.FaqEntryCreateWithoutBusinessInput, Prisma.FaqEntryUncheckedCreateWithoutBusinessInput> | Prisma.FaqEntryCreateWithoutBusinessInput[] | Prisma.FaqEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FaqEntryCreateOrConnectWithoutBusinessInput | Prisma.FaqEntryCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.FaqEntryCreateManyBusinessInputEnvelope;
    connect?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
};
export type FaqEntryUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.FaqEntryCreateWithoutBusinessInput, Prisma.FaqEntryUncheckedCreateWithoutBusinessInput> | Prisma.FaqEntryCreateWithoutBusinessInput[] | Prisma.FaqEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FaqEntryCreateOrConnectWithoutBusinessInput | Prisma.FaqEntryCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.FaqEntryUpsertWithWhereUniqueWithoutBusinessInput | Prisma.FaqEntryUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.FaqEntryCreateManyBusinessInputEnvelope;
    set?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    disconnect?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    delete?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    connect?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    update?: Prisma.FaqEntryUpdateWithWhereUniqueWithoutBusinessInput | Prisma.FaqEntryUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.FaqEntryUpdateManyWithWhereWithoutBusinessInput | Prisma.FaqEntryUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.FaqEntryScalarWhereInput | Prisma.FaqEntryScalarWhereInput[];
};
export type FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.FaqEntryCreateWithoutBusinessInput, Prisma.FaqEntryUncheckedCreateWithoutBusinessInput> | Prisma.FaqEntryCreateWithoutBusinessInput[] | Prisma.FaqEntryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FaqEntryCreateOrConnectWithoutBusinessInput | Prisma.FaqEntryCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.FaqEntryUpsertWithWhereUniqueWithoutBusinessInput | Prisma.FaqEntryUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.FaqEntryCreateManyBusinessInputEnvelope;
    set?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    disconnect?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    delete?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    connect?: Prisma.FaqEntryWhereUniqueInput | Prisma.FaqEntryWhereUniqueInput[];
    update?: Prisma.FaqEntryUpdateWithWhereUniqueWithoutBusinessInput | Prisma.FaqEntryUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.FaqEntryUpdateManyWithWhereWithoutBusinessInput | Prisma.FaqEntryUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.FaqEntryScalarWhereInput | Prisma.FaqEntryScalarWhereInput[];
};
export type FaqEntryCreatealternatePhrasesInput = {
    set: string[];
};
export type FaqEntryUpdatealternatePhrasesInput = {
    set?: string[];
    push?: string | string[];
};
export type FaqEntryCreateWithoutBusinessInput = {
    id?: string;
    question: string;
    alternatePhrases?: Prisma.FaqEntryCreatealternatePhrasesInput | string[];
    answer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaqEntryUncheckedCreateWithoutBusinessInput = {
    id?: string;
    question: string;
    alternatePhrases?: Prisma.FaqEntryCreatealternatePhrasesInput | string[];
    answer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaqEntryCreateOrConnectWithoutBusinessInput = {
    where: Prisma.FaqEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaqEntryCreateWithoutBusinessInput, Prisma.FaqEntryUncheckedCreateWithoutBusinessInput>;
};
export type FaqEntryCreateManyBusinessInputEnvelope = {
    data: Prisma.FaqEntryCreateManyBusinessInput | Prisma.FaqEntryCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type FaqEntryUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.FaqEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.FaqEntryUpdateWithoutBusinessInput, Prisma.FaqEntryUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.FaqEntryCreateWithoutBusinessInput, Prisma.FaqEntryUncheckedCreateWithoutBusinessInput>;
};
export type FaqEntryUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.FaqEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.FaqEntryUpdateWithoutBusinessInput, Prisma.FaqEntryUncheckedUpdateWithoutBusinessInput>;
};
export type FaqEntryUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.FaqEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.FaqEntryUpdateManyMutationInput, Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessInput>;
};
export type FaqEntryScalarWhereInput = {
    AND?: Prisma.FaqEntryScalarWhereInput | Prisma.FaqEntryScalarWhereInput[];
    OR?: Prisma.FaqEntryScalarWhereInput[];
    NOT?: Prisma.FaqEntryScalarWhereInput | Prisma.FaqEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"FaqEntry"> | string;
    businessId?: Prisma.StringFilter<"FaqEntry"> | string;
    question?: Prisma.StringFilter<"FaqEntry"> | string;
    alternatePhrases?: Prisma.StringNullableListFilter<"FaqEntry">;
    answer?: Prisma.StringFilter<"FaqEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"FaqEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FaqEntry"> | Date | string;
};
export type FaqEntryCreateManyBusinessInput = {
    id?: string;
    question: string;
    alternatePhrases?: Prisma.FaqEntryCreatealternatePhrasesInput | string[];
    answer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaqEntryUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaqEntryUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaqEntryUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    alternatePhrases?: Prisma.FaqEntryUpdatealternatePhrasesInput | string[];
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaqEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    alternatePhrases?: boolean;
    answer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["faqEntry"]>;
export type FaqEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    alternatePhrases?: boolean;
    answer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["faqEntry"]>;
export type FaqEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    alternatePhrases?: boolean;
    answer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["faqEntry"]>;
export type FaqEntrySelectScalar = {
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    alternatePhrases?: boolean;
    answer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FaqEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "question" | "alternatePhrases" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["faqEntry"]>;
export type FaqEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type FaqEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type FaqEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $FaqEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FaqEntry";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        question: string;
        alternatePhrases: string[];
        answer: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["faqEntry"]>;
    composites: {};
};
export type FaqEntryGetPayload<S extends boolean | null | undefined | FaqEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload, S>;
export type FaqEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FaqEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FaqEntryCountAggregateInputType | true;
};
export interface FaqEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FaqEntry'];
        meta: {
            name: 'FaqEntry';
        };
    };
    findUnique<T extends FaqEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, FaqEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FaqEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FaqEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FaqEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, FaqEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FaqEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FaqEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FaqEntryFindManyArgs>(args?: Prisma.SelectSubset<T, FaqEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FaqEntryCreateArgs>(args: Prisma.SelectSubset<T, FaqEntryCreateArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FaqEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, FaqEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FaqEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FaqEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FaqEntryDeleteArgs>(args: Prisma.SelectSubset<T, FaqEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FaqEntryUpdateArgs>(args: Prisma.SelectSubset<T, FaqEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FaqEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, FaqEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FaqEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, FaqEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FaqEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FaqEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FaqEntryUpsertArgs>(args: Prisma.SelectSubset<T, FaqEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__FaqEntryClient<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FaqEntryCountArgs>(args?: Prisma.Subset<T, FaqEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FaqEntryCountAggregateOutputType> : number>;
    aggregate<T extends FaqEntryAggregateArgs>(args: Prisma.Subset<T, FaqEntryAggregateArgs>): Prisma.PrismaPromise<GetFaqEntryAggregateType<T>>;
    groupBy<T extends FaqEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FaqEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: FaqEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FaqEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FaqEntryFieldRefs;
}
export interface Prisma__FaqEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FaqEntryFieldRefs {
    readonly id: Prisma.FieldRef<"FaqEntry", 'String'>;
    readonly businessId: Prisma.FieldRef<"FaqEntry", 'String'>;
    readonly question: Prisma.FieldRef<"FaqEntry", 'String'>;
    readonly alternatePhrases: Prisma.FieldRef<"FaqEntry", 'String[]'>;
    readonly answer: Prisma.FieldRef<"FaqEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FaqEntry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FaqEntry", 'DateTime'>;
}
export type FaqEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where: Prisma.FaqEntryWhereUniqueInput;
};
export type FaqEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where: Prisma.FaqEntryWhereUniqueInput;
};
export type FaqEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where?: Prisma.FaqEntryWhereInput;
    orderBy?: Prisma.FaqEntryOrderByWithRelationInput | Prisma.FaqEntryOrderByWithRelationInput[];
    cursor?: Prisma.FaqEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaqEntryScalarFieldEnum | Prisma.FaqEntryScalarFieldEnum[];
};
export type FaqEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where?: Prisma.FaqEntryWhereInput;
    orderBy?: Prisma.FaqEntryOrderByWithRelationInput | Prisma.FaqEntryOrderByWithRelationInput[];
    cursor?: Prisma.FaqEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaqEntryScalarFieldEnum | Prisma.FaqEntryScalarFieldEnum[];
};
export type FaqEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where?: Prisma.FaqEntryWhereInput;
    orderBy?: Prisma.FaqEntryOrderByWithRelationInput | Prisma.FaqEntryOrderByWithRelationInput[];
    cursor?: Prisma.FaqEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaqEntryScalarFieldEnum | Prisma.FaqEntryScalarFieldEnum[];
};
export type FaqEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaqEntryCreateInput, Prisma.FaqEntryUncheckedCreateInput>;
};
export type FaqEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FaqEntryCreateManyInput | Prisma.FaqEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FaqEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    data: Prisma.FaqEntryCreateManyInput | Prisma.FaqEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FaqEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FaqEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaqEntryUpdateInput, Prisma.FaqEntryUncheckedUpdateInput>;
    where: Prisma.FaqEntryWhereUniqueInput;
};
export type FaqEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FaqEntryUpdateManyMutationInput, Prisma.FaqEntryUncheckedUpdateManyInput>;
    where?: Prisma.FaqEntryWhereInput;
    limit?: number;
};
export type FaqEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaqEntryUpdateManyMutationInput, Prisma.FaqEntryUncheckedUpdateManyInput>;
    where?: Prisma.FaqEntryWhereInput;
    limit?: number;
    include?: Prisma.FaqEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FaqEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where: Prisma.FaqEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaqEntryCreateInput, Prisma.FaqEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FaqEntryUpdateInput, Prisma.FaqEntryUncheckedUpdateInput>;
};
export type FaqEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
    where: Prisma.FaqEntryWhereUniqueInput;
};
export type FaqEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaqEntryWhereInput;
    limit?: number;
};
export type FaqEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaqEntrySelect<ExtArgs> | null;
    omit?: Prisma.FaqEntryOmit<ExtArgs> | null;
    include?: Prisma.FaqEntryInclude<ExtArgs> | null;
};
