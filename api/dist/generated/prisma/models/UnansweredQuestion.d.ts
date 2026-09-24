import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UnansweredQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$UnansweredQuestionPayload>;
export type AggregateUnansweredQuestion = {
    _count: UnansweredQuestionCountAggregateOutputType | null;
    _min: UnansweredQuestionMinAggregateOutputType | null;
    _max: UnansweredQuestionMaxAggregateOutputType | null;
};
export type UnansweredQuestionMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    question: string | null;
    askedAt: Date | null;
};
export type UnansweredQuestionMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    question: string | null;
    askedAt: Date | null;
};
export type UnansweredQuestionCountAggregateOutputType = {
    id: number;
    businessId: number;
    question: number;
    askedAt: number;
    _all: number;
};
export type UnansweredQuestionMinAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    askedAt?: true;
};
export type UnansweredQuestionMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    askedAt?: true;
};
export type UnansweredQuestionCountAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    askedAt?: true;
    _all?: true;
};
export type UnansweredQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UnansweredQuestionWhereInput;
    orderBy?: Prisma.UnansweredQuestionOrderByWithRelationInput | Prisma.UnansweredQuestionOrderByWithRelationInput[];
    cursor?: Prisma.UnansweredQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UnansweredQuestionCountAggregateInputType;
    _min?: UnansweredQuestionMinAggregateInputType;
    _max?: UnansweredQuestionMaxAggregateInputType;
};
export type GetUnansweredQuestionAggregateType<T extends UnansweredQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateUnansweredQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUnansweredQuestion[P]> : Prisma.GetScalarType<T[P], AggregateUnansweredQuestion[P]>;
};
export type UnansweredQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UnansweredQuestionWhereInput;
    orderBy?: Prisma.UnansweredQuestionOrderByWithAggregationInput | Prisma.UnansweredQuestionOrderByWithAggregationInput[];
    by: Prisma.UnansweredQuestionScalarFieldEnum[] | Prisma.UnansweredQuestionScalarFieldEnum;
    having?: Prisma.UnansweredQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UnansweredQuestionCountAggregateInputType | true;
    _min?: UnansweredQuestionMinAggregateInputType;
    _max?: UnansweredQuestionMaxAggregateInputType;
};
export type UnansweredQuestionGroupByOutputType = {
    id: string;
    businessId: string;
    question: string;
    askedAt: Date;
    _count: UnansweredQuestionCountAggregateOutputType | null;
    _min: UnansweredQuestionMinAggregateOutputType | null;
    _max: UnansweredQuestionMaxAggregateOutputType | null;
};
export type GetUnansweredQuestionGroupByPayload<T extends UnansweredQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UnansweredQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UnansweredQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UnansweredQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UnansweredQuestionGroupByOutputType[P]>;
}>>;
export type UnansweredQuestionWhereInput = {
    AND?: Prisma.UnansweredQuestionWhereInput | Prisma.UnansweredQuestionWhereInput[];
    OR?: Prisma.UnansweredQuestionWhereInput[];
    NOT?: Prisma.UnansweredQuestionWhereInput | Prisma.UnansweredQuestionWhereInput[];
    id?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    businessId?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    question?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    askedAt?: Prisma.DateTimeFilter<"UnansweredQuestion"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type UnansweredQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    askedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type UnansweredQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UnansweredQuestionWhereInput | Prisma.UnansweredQuestionWhereInput[];
    OR?: Prisma.UnansweredQuestionWhereInput[];
    NOT?: Prisma.UnansweredQuestionWhereInput | Prisma.UnansweredQuestionWhereInput[];
    businessId?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    question?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    askedAt?: Prisma.DateTimeFilter<"UnansweredQuestion"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id">;
export type UnansweredQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    askedAt?: Prisma.SortOrder;
    _count?: Prisma.UnansweredQuestionCountOrderByAggregateInput;
    _max?: Prisma.UnansweredQuestionMaxOrderByAggregateInput;
    _min?: Prisma.UnansweredQuestionMinOrderByAggregateInput;
};
export type UnansweredQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.UnansweredQuestionScalarWhereWithAggregatesInput | Prisma.UnansweredQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.UnansweredQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UnansweredQuestionScalarWhereWithAggregatesInput | Prisma.UnansweredQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UnansweredQuestion"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"UnansweredQuestion"> | string;
    question?: Prisma.StringWithAggregatesFilter<"UnansweredQuestion"> | string;
    askedAt?: Prisma.DateTimeWithAggregatesFilter<"UnansweredQuestion"> | Date | string;
};
export type UnansweredQuestionCreateInput = {
    id?: string;
    question: string;
    askedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutUnansweredQuestionsInput;
};
export type UnansweredQuestionUncheckedCreateInput = {
    id?: string;
    businessId: string;
    question: string;
    askedAt?: Date | string;
};
export type UnansweredQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutUnansweredQuestionsNestedInput;
};
export type UnansweredQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnansweredQuestionCreateManyInput = {
    id?: string;
    businessId: string;
    question: string;
    askedAt?: Date | string;
};
export type UnansweredQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnansweredQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnansweredQuestionListRelationFilter = {
    every?: Prisma.UnansweredQuestionWhereInput;
    some?: Prisma.UnansweredQuestionWhereInput;
    none?: Prisma.UnansweredQuestionWhereInput;
};
export type UnansweredQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UnansweredQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    askedAt?: Prisma.SortOrder;
};
export type UnansweredQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    askedAt?: Prisma.SortOrder;
};
export type UnansweredQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    askedAt?: Prisma.SortOrder;
};
export type UnansweredQuestionCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.UnansweredQuestionCreateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput> | Prisma.UnansweredQuestionCreateWithoutBusinessInput[] | Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput | Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.UnansweredQuestionCreateManyBusinessInputEnvelope;
    connect?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
};
export type UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.UnansweredQuestionCreateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput> | Prisma.UnansweredQuestionCreateWithoutBusinessInput[] | Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput | Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.UnansweredQuestionCreateManyBusinessInputEnvelope;
    connect?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
};
export type UnansweredQuestionUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.UnansweredQuestionCreateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput> | Prisma.UnansweredQuestionCreateWithoutBusinessInput[] | Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput | Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.UnansweredQuestionUpsertWithWhereUniqueWithoutBusinessInput | Prisma.UnansweredQuestionUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.UnansweredQuestionCreateManyBusinessInputEnvelope;
    set?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    disconnect?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    delete?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    connect?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    update?: Prisma.UnansweredQuestionUpdateWithWhereUniqueWithoutBusinessInput | Prisma.UnansweredQuestionUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.UnansweredQuestionUpdateManyWithWhereWithoutBusinessInput | Prisma.UnansweredQuestionUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.UnansweredQuestionScalarWhereInput | Prisma.UnansweredQuestionScalarWhereInput[];
};
export type UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.UnansweredQuestionCreateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput> | Prisma.UnansweredQuestionCreateWithoutBusinessInput[] | Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput | Prisma.UnansweredQuestionCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.UnansweredQuestionUpsertWithWhereUniqueWithoutBusinessInput | Prisma.UnansweredQuestionUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.UnansweredQuestionCreateManyBusinessInputEnvelope;
    set?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    disconnect?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    delete?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    connect?: Prisma.UnansweredQuestionWhereUniqueInput | Prisma.UnansweredQuestionWhereUniqueInput[];
    update?: Prisma.UnansweredQuestionUpdateWithWhereUniqueWithoutBusinessInput | Prisma.UnansweredQuestionUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.UnansweredQuestionUpdateManyWithWhereWithoutBusinessInput | Prisma.UnansweredQuestionUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.UnansweredQuestionScalarWhereInput | Prisma.UnansweredQuestionScalarWhereInput[];
};
export type UnansweredQuestionCreateWithoutBusinessInput = {
    id?: string;
    question: string;
    askedAt?: Date | string;
};
export type UnansweredQuestionUncheckedCreateWithoutBusinessInput = {
    id?: string;
    question: string;
    askedAt?: Date | string;
};
export type UnansweredQuestionCreateOrConnectWithoutBusinessInput = {
    where: Prisma.UnansweredQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.UnansweredQuestionCreateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput>;
};
export type UnansweredQuestionCreateManyBusinessInputEnvelope = {
    data: Prisma.UnansweredQuestionCreateManyBusinessInput | Prisma.UnansweredQuestionCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type UnansweredQuestionUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.UnansweredQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.UnansweredQuestionUpdateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.UnansweredQuestionCreateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedCreateWithoutBusinessInput>;
};
export type UnansweredQuestionUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.UnansweredQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.UnansweredQuestionUpdateWithoutBusinessInput, Prisma.UnansweredQuestionUncheckedUpdateWithoutBusinessInput>;
};
export type UnansweredQuestionUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.UnansweredQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.UnansweredQuestionUpdateManyMutationInput, Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessInput>;
};
export type UnansweredQuestionScalarWhereInput = {
    AND?: Prisma.UnansweredQuestionScalarWhereInput | Prisma.UnansweredQuestionScalarWhereInput[];
    OR?: Prisma.UnansweredQuestionScalarWhereInput[];
    NOT?: Prisma.UnansweredQuestionScalarWhereInput | Prisma.UnansweredQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    businessId?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    question?: Prisma.StringFilter<"UnansweredQuestion"> | string;
    askedAt?: Prisma.DateTimeFilter<"UnansweredQuestion"> | Date | string;
};
export type UnansweredQuestionCreateManyBusinessInput = {
    id?: string;
    question: string;
    askedAt?: Date | string;
};
export type UnansweredQuestionUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnansweredQuestionUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnansweredQuestionUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    askedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnansweredQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    askedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["unansweredQuestion"]>;
export type UnansweredQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    askedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["unansweredQuestion"]>;
export type UnansweredQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    askedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["unansweredQuestion"]>;
export type UnansweredQuestionSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    askedAt?: boolean;
};
export type UnansweredQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "question" | "askedAt", ExtArgs["result"]["unansweredQuestion"]>;
export type UnansweredQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type UnansweredQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type UnansweredQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $UnansweredQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UnansweredQuestion";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        question: string;
        askedAt: Date;
    }, ExtArgs["result"]["unansweredQuestion"]>;
    composites: {};
};
export type UnansweredQuestionGetPayload<S extends boolean | null | undefined | UnansweredQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload, S>;
export type UnansweredQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UnansweredQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UnansweredQuestionCountAggregateInputType | true;
};
export interface UnansweredQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UnansweredQuestion'];
        meta: {
            name: 'UnansweredQuestion';
        };
    };
    findUnique<T extends UnansweredQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UnansweredQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UnansweredQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, UnansweredQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UnansweredQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UnansweredQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UnansweredQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, UnansweredQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UnansweredQuestionCreateArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UnansweredQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, UnansweredQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UnansweredQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UnansweredQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UnansweredQuestionDeleteArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UnansweredQuestionUpdateArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UnansweredQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, UnansweredQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UnansweredQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UnansweredQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UnansweredQuestionUpsertArgs>(args: Prisma.SelectSubset<T, UnansweredQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__UnansweredQuestionClient<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UnansweredQuestionCountArgs>(args?: Prisma.Subset<T, UnansweredQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UnansweredQuestionCountAggregateOutputType> : number>;
    aggregate<T extends UnansweredQuestionAggregateArgs>(args: Prisma.Subset<T, UnansweredQuestionAggregateArgs>): Prisma.PrismaPromise<GetUnansweredQuestionAggregateType<T>>;
    groupBy<T extends UnansweredQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UnansweredQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: UnansweredQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UnansweredQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnansweredQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UnansweredQuestionFieldRefs;
}
export interface Prisma__UnansweredQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UnansweredQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"UnansweredQuestion", 'String'>;
    readonly businessId: Prisma.FieldRef<"UnansweredQuestion", 'String'>;
    readonly question: Prisma.FieldRef<"UnansweredQuestion", 'String'>;
    readonly askedAt: Prisma.FieldRef<"UnansweredQuestion", 'DateTime'>;
}
export type UnansweredQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where: Prisma.UnansweredQuestionWhereUniqueInput;
};
export type UnansweredQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where: Prisma.UnansweredQuestionWhereUniqueInput;
};
export type UnansweredQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where?: Prisma.UnansweredQuestionWhereInput;
    orderBy?: Prisma.UnansweredQuestionOrderByWithRelationInput | Prisma.UnansweredQuestionOrderByWithRelationInput[];
    cursor?: Prisma.UnansweredQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UnansweredQuestionScalarFieldEnum | Prisma.UnansweredQuestionScalarFieldEnum[];
};
export type UnansweredQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where?: Prisma.UnansweredQuestionWhereInput;
    orderBy?: Prisma.UnansweredQuestionOrderByWithRelationInput | Prisma.UnansweredQuestionOrderByWithRelationInput[];
    cursor?: Prisma.UnansweredQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UnansweredQuestionScalarFieldEnum | Prisma.UnansweredQuestionScalarFieldEnum[];
};
export type UnansweredQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where?: Prisma.UnansweredQuestionWhereInput;
    orderBy?: Prisma.UnansweredQuestionOrderByWithRelationInput | Prisma.UnansweredQuestionOrderByWithRelationInput[];
    cursor?: Prisma.UnansweredQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UnansweredQuestionScalarFieldEnum | Prisma.UnansweredQuestionScalarFieldEnum[];
};
export type UnansweredQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UnansweredQuestionCreateInput, Prisma.UnansweredQuestionUncheckedCreateInput>;
};
export type UnansweredQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UnansweredQuestionCreateManyInput | Prisma.UnansweredQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UnansweredQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    data: Prisma.UnansweredQuestionCreateManyInput | Prisma.UnansweredQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UnansweredQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UnansweredQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UnansweredQuestionUpdateInput, Prisma.UnansweredQuestionUncheckedUpdateInput>;
    where: Prisma.UnansweredQuestionWhereUniqueInput;
};
export type UnansweredQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UnansweredQuestionUpdateManyMutationInput, Prisma.UnansweredQuestionUncheckedUpdateManyInput>;
    where?: Prisma.UnansweredQuestionWhereInput;
    limit?: number;
};
export type UnansweredQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UnansweredQuestionUpdateManyMutationInput, Prisma.UnansweredQuestionUncheckedUpdateManyInput>;
    where?: Prisma.UnansweredQuestionWhereInput;
    limit?: number;
    include?: Prisma.UnansweredQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UnansweredQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where: Prisma.UnansweredQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.UnansweredQuestionCreateInput, Prisma.UnansweredQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UnansweredQuestionUpdateInput, Prisma.UnansweredQuestionUncheckedUpdateInput>;
};
export type UnansweredQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
    where: Prisma.UnansweredQuestionWhereUniqueInput;
};
export type UnansweredQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UnansweredQuestionWhereInput;
    limit?: number;
};
export type UnansweredQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnansweredQuestionSelect<ExtArgs> | null;
    omit?: Prisma.UnansweredQuestionOmit<ExtArgs> | null;
    include?: Prisma.UnansweredQuestionInclude<ExtArgs> | null;
};
