import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BotModel = runtime.Types.Result.DefaultSelection<Prisma.$BotPayload>;
export type AggregateBot = {
    _count: BotCountAggregateOutputType | null;
    _min: BotMinAggregateOutputType | null;
    _max: BotMaxAggregateOutputType | null;
};
export type BotMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    token: string | null;
    telegramBotId: string | null;
    username: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BotMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    token: string | null;
    telegramBotId: string | null;
    username: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BotCountAggregateOutputType = {
    id: number;
    businessId: number;
    token: number;
    telegramBotId: number;
    username: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BotMinAggregateInputType = {
    id?: true;
    businessId?: true;
    token?: true;
    telegramBotId?: true;
    username?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BotMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    token?: true;
    telegramBotId?: true;
    username?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BotCountAggregateInputType = {
    id?: true;
    businessId?: true;
    token?: true;
    telegramBotId?: true;
    username?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotWhereInput;
    orderBy?: Prisma.BotOrderByWithRelationInput | Prisma.BotOrderByWithRelationInput[];
    cursor?: Prisma.BotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BotCountAggregateInputType;
    _min?: BotMinAggregateInputType;
    _max?: BotMaxAggregateInputType;
};
export type GetBotAggregateType<T extends BotAggregateArgs> = {
    [P in keyof T & keyof AggregateBot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBot[P]> : Prisma.GetScalarType<T[P], AggregateBot[P]>;
};
export type BotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotWhereInput;
    orderBy?: Prisma.BotOrderByWithAggregationInput | Prisma.BotOrderByWithAggregationInput[];
    by: Prisma.BotScalarFieldEnum[] | Prisma.BotScalarFieldEnum;
    having?: Prisma.BotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BotCountAggregateInputType | true;
    _min?: BotMinAggregateInputType;
    _max?: BotMaxAggregateInputType;
};
export type BotGroupByOutputType = {
    id: string;
    businessId: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BotCountAggregateOutputType | null;
    _min: BotMinAggregateOutputType | null;
    _max: BotMaxAggregateOutputType | null;
};
export type GetBotGroupByPayload<T extends BotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BotGroupByOutputType[P]>;
}>>;
export type BotWhereInput = {
    AND?: Prisma.BotWhereInput | Prisma.BotWhereInput[];
    OR?: Prisma.BotWhereInput[];
    NOT?: Prisma.BotWhereInput | Prisma.BotWhereInput[];
    id?: Prisma.StringFilter<"Bot"> | string;
    businessId?: Prisma.StringFilter<"Bot"> | string;
    token?: Prisma.StringFilter<"Bot"> | string;
    telegramBotId?: Prisma.StringFilter<"Bot"> | string;
    username?: Prisma.StringFilter<"Bot"> | string;
    isActive?: Prisma.BoolFilter<"Bot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Bot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bot"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type BotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    telegramBotId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type BotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BotWhereInput | Prisma.BotWhereInput[];
    OR?: Prisma.BotWhereInput[];
    NOT?: Prisma.BotWhereInput | Prisma.BotWhereInput[];
    businessId?: Prisma.StringFilter<"Bot"> | string;
    token?: Prisma.StringFilter<"Bot"> | string;
    telegramBotId?: Prisma.StringFilter<"Bot"> | string;
    username?: Prisma.StringFilter<"Bot"> | string;
    isActive?: Prisma.BoolFilter<"Bot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Bot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bot"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id">;
export type BotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    telegramBotId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BotCountOrderByAggregateInput;
    _max?: Prisma.BotMaxOrderByAggregateInput;
    _min?: Prisma.BotMinOrderByAggregateInput;
};
export type BotScalarWhereWithAggregatesInput = {
    AND?: Prisma.BotScalarWhereWithAggregatesInput | Prisma.BotScalarWhereWithAggregatesInput[];
    OR?: Prisma.BotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BotScalarWhereWithAggregatesInput | Prisma.BotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Bot"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Bot"> | string;
    token?: Prisma.StringWithAggregatesFilter<"Bot"> | string;
    telegramBotId?: Prisma.StringWithAggregatesFilter<"Bot"> | string;
    username?: Prisma.StringWithAggregatesFilter<"Bot"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Bot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Bot"> | Date | string;
};
export type BotCreateInput = {
    id?: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutBotsInput;
};
export type BotUncheckedCreateInput = {
    id?: string;
    businessId: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutBotsNestedInput;
};
export type BotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotCreateManyInput = {
    id?: string;
    businessId: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotListRelationFilter = {
    every?: Prisma.BotWhereInput;
    some?: Prisma.BotWhereInput;
    none?: Prisma.BotWhereInput;
};
export type BotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    telegramBotId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    telegramBotId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    telegramBotId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BotCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.BotCreateWithoutBusinessInput, Prisma.BotUncheckedCreateWithoutBusinessInput> | Prisma.BotCreateWithoutBusinessInput[] | Prisma.BotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BotCreateOrConnectWithoutBusinessInput | Prisma.BotCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.BotCreateManyBusinessInputEnvelope;
    connect?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
};
export type BotUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.BotCreateWithoutBusinessInput, Prisma.BotUncheckedCreateWithoutBusinessInput> | Prisma.BotCreateWithoutBusinessInput[] | Prisma.BotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BotCreateOrConnectWithoutBusinessInput | Prisma.BotCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.BotCreateManyBusinessInputEnvelope;
    connect?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
};
export type BotUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.BotCreateWithoutBusinessInput, Prisma.BotUncheckedCreateWithoutBusinessInput> | Prisma.BotCreateWithoutBusinessInput[] | Prisma.BotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BotCreateOrConnectWithoutBusinessInput | Prisma.BotCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.BotUpsertWithWhereUniqueWithoutBusinessInput | Prisma.BotUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.BotCreateManyBusinessInputEnvelope;
    set?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    disconnect?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    delete?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    connect?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    update?: Prisma.BotUpdateWithWhereUniqueWithoutBusinessInput | Prisma.BotUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.BotUpdateManyWithWhereWithoutBusinessInput | Prisma.BotUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.BotScalarWhereInput | Prisma.BotScalarWhereInput[];
};
export type BotUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.BotCreateWithoutBusinessInput, Prisma.BotUncheckedCreateWithoutBusinessInput> | Prisma.BotCreateWithoutBusinessInput[] | Prisma.BotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BotCreateOrConnectWithoutBusinessInput | Prisma.BotCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.BotUpsertWithWhereUniqueWithoutBusinessInput | Prisma.BotUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.BotCreateManyBusinessInputEnvelope;
    set?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    disconnect?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    delete?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    connect?: Prisma.BotWhereUniqueInput | Prisma.BotWhereUniqueInput[];
    update?: Prisma.BotUpdateWithWhereUniqueWithoutBusinessInput | Prisma.BotUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.BotUpdateManyWithWhereWithoutBusinessInput | Prisma.BotUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.BotScalarWhereInput | Prisma.BotScalarWhereInput[];
};
export type BotCreateWithoutBusinessInput = {
    id?: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BotUncheckedCreateWithoutBusinessInput = {
    id?: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BotCreateOrConnectWithoutBusinessInput = {
    where: Prisma.BotWhereUniqueInput;
    create: Prisma.XOR<Prisma.BotCreateWithoutBusinessInput, Prisma.BotUncheckedCreateWithoutBusinessInput>;
};
export type BotCreateManyBusinessInputEnvelope = {
    data: Prisma.BotCreateManyBusinessInput | Prisma.BotCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type BotUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.BotWhereUniqueInput;
    update: Prisma.XOR<Prisma.BotUpdateWithoutBusinessInput, Prisma.BotUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.BotCreateWithoutBusinessInput, Prisma.BotUncheckedCreateWithoutBusinessInput>;
};
export type BotUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.BotWhereUniqueInput;
    data: Prisma.XOR<Prisma.BotUpdateWithoutBusinessInput, Prisma.BotUncheckedUpdateWithoutBusinessInput>;
};
export type BotUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.BotScalarWhereInput;
    data: Prisma.XOR<Prisma.BotUpdateManyMutationInput, Prisma.BotUncheckedUpdateManyWithoutBusinessInput>;
};
export type BotScalarWhereInput = {
    AND?: Prisma.BotScalarWhereInput | Prisma.BotScalarWhereInput[];
    OR?: Prisma.BotScalarWhereInput[];
    NOT?: Prisma.BotScalarWhereInput | Prisma.BotScalarWhereInput[];
    id?: Prisma.StringFilter<"Bot"> | string;
    businessId?: Prisma.StringFilter<"Bot"> | string;
    token?: Prisma.StringFilter<"Bot"> | string;
    telegramBotId?: Prisma.StringFilter<"Bot"> | string;
    username?: Prisma.StringFilter<"Bot"> | string;
    isActive?: Prisma.BoolFilter<"Bot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Bot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bot"> | Date | string;
};
export type BotCreateManyBusinessInput = {
    id?: string;
    token: string;
    telegramBotId: string;
    username: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BotUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    telegramBotId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    token?: boolean;
    telegramBotId?: boolean;
    username?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bot"]>;
export type BotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    token?: boolean;
    telegramBotId?: boolean;
    username?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bot"]>;
export type BotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    token?: boolean;
    telegramBotId?: boolean;
    username?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bot"]>;
export type BotSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    token?: boolean;
    telegramBotId?: boolean;
    username?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "token" | "telegramBotId" | "username" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bot"]>;
export type BotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type BotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type BotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $BotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bot";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        token: string;
        telegramBotId: string;
        username: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bot"]>;
    composites: {};
};
export type BotGetPayload<S extends boolean | null | undefined | BotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BotPayload, S>;
export type BotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BotCountAggregateInputType | true;
};
export interface BotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bot'];
        meta: {
            name: 'Bot';
        };
    };
    findUnique<T extends BotFindUniqueArgs>(args: Prisma.SelectSubset<T, BotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BotFindFirstArgs>(args?: Prisma.SelectSubset<T, BotFindFirstArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BotFindManyArgs>(args?: Prisma.SelectSubset<T, BotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BotCreateArgs>(args: Prisma.SelectSubset<T, BotCreateArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BotCreateManyArgs>(args?: Prisma.SelectSubset<T, BotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BotDeleteArgs>(args: Prisma.SelectSubset<T, BotDeleteArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BotUpdateArgs>(args: Prisma.SelectSubset<T, BotUpdateArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BotDeleteManyArgs>(args?: Prisma.SelectSubset<T, BotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BotUpdateManyArgs>(args: Prisma.SelectSubset<T, BotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BotUpsertArgs>(args: Prisma.SelectSubset<T, BotUpsertArgs<ExtArgs>>): Prisma.Prisma__BotClient<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BotCountArgs>(args?: Prisma.Subset<T, BotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BotCountAggregateOutputType> : number>;
    aggregate<T extends BotAggregateArgs>(args: Prisma.Subset<T, BotAggregateArgs>): Prisma.PrismaPromise<GetBotAggregateType<T>>;
    groupBy<T extends BotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BotGroupByArgs['orderBy'];
    } : {
        orderBy?: BotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BotFieldRefs;
}
export interface Prisma__BotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BotFieldRefs {
    readonly id: Prisma.FieldRef<"Bot", 'String'>;
    readonly businessId: Prisma.FieldRef<"Bot", 'String'>;
    readonly token: Prisma.FieldRef<"Bot", 'String'>;
    readonly telegramBotId: Prisma.FieldRef<"Bot", 'String'>;
    readonly username: Prisma.FieldRef<"Bot", 'String'>;
    readonly isActive: Prisma.FieldRef<"Bot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Bot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Bot", 'DateTime'>;
}
export type BotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where: Prisma.BotWhereUniqueInput;
};
export type BotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where: Prisma.BotWhereUniqueInput;
};
export type BotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where?: Prisma.BotWhereInput;
    orderBy?: Prisma.BotOrderByWithRelationInput | Prisma.BotOrderByWithRelationInput[];
    cursor?: Prisma.BotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BotScalarFieldEnum | Prisma.BotScalarFieldEnum[];
};
export type BotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where?: Prisma.BotWhereInput;
    orderBy?: Prisma.BotOrderByWithRelationInput | Prisma.BotOrderByWithRelationInput[];
    cursor?: Prisma.BotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BotScalarFieldEnum | Prisma.BotScalarFieldEnum[];
};
export type BotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where?: Prisma.BotWhereInput;
    orderBy?: Prisma.BotOrderByWithRelationInput | Prisma.BotOrderByWithRelationInput[];
    cursor?: Prisma.BotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BotScalarFieldEnum | Prisma.BotScalarFieldEnum[];
};
export type BotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BotCreateInput, Prisma.BotUncheckedCreateInput>;
};
export type BotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BotCreateManyInput | Prisma.BotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    data: Prisma.BotCreateManyInput | Prisma.BotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BotUpdateInput, Prisma.BotUncheckedUpdateInput>;
    where: Prisma.BotWhereUniqueInput;
};
export type BotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BotUpdateManyMutationInput, Prisma.BotUncheckedUpdateManyInput>;
    where?: Prisma.BotWhereInput;
    limit?: number;
};
export type BotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BotUpdateManyMutationInput, Prisma.BotUncheckedUpdateManyInput>;
    where?: Prisma.BotWhereInput;
    limit?: number;
    include?: Prisma.BotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where: Prisma.BotWhereUniqueInput;
    create: Prisma.XOR<Prisma.BotCreateInput, Prisma.BotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BotUpdateInput, Prisma.BotUncheckedUpdateInput>;
};
export type BotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
    where: Prisma.BotWhereUniqueInput;
};
export type BotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotWhereInput;
    limit?: number;
};
export type BotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BotSelect<ExtArgs> | null;
    omit?: Prisma.BotOmit<ExtArgs> | null;
    include?: Prisma.BotInclude<ExtArgs> | null;
};
