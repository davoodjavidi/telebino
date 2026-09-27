import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BusinessModel = runtime.Types.Result.DefaultSelection<Prisma.$BusinessPayload>;
export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
};
export type BusinessMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.BusinessType | null;
    planTier: $Enums.PlanTier | null;
    isSubscriptionActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BusinessMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.BusinessType | null;
    planTier: $Enums.PlanTier | null;
    isSubscriptionActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BusinessCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    planTier: number;
    isSubscriptionActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BusinessMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    planTier?: true;
    isSubscriptionActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BusinessMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    planTier?: true;
    isSubscriptionActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BusinessCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    planTier?: true;
    isSubscriptionActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BusinessAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BusinessCountAggregateInputType;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
};
export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBusiness[P]> : Prisma.GetScalarType<T[P], AggregateBusiness[P]>;
};
export type BusinessGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithAggregationInput | Prisma.BusinessOrderByWithAggregationInput[];
    by: Prisma.BusinessScalarFieldEnum[] | Prisma.BusinessScalarFieldEnum;
    having?: Prisma.BusinessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
};
export type BusinessGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.BusinessType;
    planTier: $Enums.PlanTier;
    isSubscriptionActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
};
export type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BusinessGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BusinessGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BusinessGroupByOutputType[P]>;
}>>;
export type BusinessWhereInput = {
    AND?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    OR?: Prisma.BusinessWhereInput[];
    NOT?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    id?: Prisma.StringFilter<"Business"> | string;
    name?: Prisma.StringFilter<"Business"> | string;
    type?: Prisma.EnumBusinessTypeFilter<"Business"> | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFilter<"Business"> | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFilter<"Business"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    faqEntries?: Prisma.FaqEntryListRelationFilter;
    lookupEntries?: Prisma.LookupEntryListRelationFilter;
    customers?: Prisma.CustomerListRelationFilter;
    forms?: Prisma.FormDefListRelationFilter;
    bots?: Prisma.BotListRelationFilter;
    broadcasts?: Prisma.BroadcastListRelationFilter;
    unansweredQuestions?: Prisma.UnansweredQuestionListRelationFilter;
    courseAccess?: Prisma.CourseAccessListRelationFilter;
};
export type BusinessOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    isSubscriptionActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    faqEntries?: Prisma.FaqEntryOrderByRelationAggregateInput;
    lookupEntries?: Prisma.LookupEntryOrderByRelationAggregateInput;
    customers?: Prisma.CustomerOrderByRelationAggregateInput;
    forms?: Prisma.FormDefOrderByRelationAggregateInput;
    bots?: Prisma.BotOrderByRelationAggregateInput;
    broadcasts?: Prisma.BroadcastOrderByRelationAggregateInput;
    unansweredQuestions?: Prisma.UnansweredQuestionOrderByRelationAggregateInput;
    courseAccess?: Prisma.CourseAccessOrderByRelationAggregateInput;
};
export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    OR?: Prisma.BusinessWhereInput[];
    NOT?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    name?: Prisma.StringFilter<"Business"> | string;
    type?: Prisma.EnumBusinessTypeFilter<"Business"> | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFilter<"Business"> | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFilter<"Business"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    faqEntries?: Prisma.FaqEntryListRelationFilter;
    lookupEntries?: Prisma.LookupEntryListRelationFilter;
    customers?: Prisma.CustomerListRelationFilter;
    forms?: Prisma.FormDefListRelationFilter;
    bots?: Prisma.BotListRelationFilter;
    broadcasts?: Prisma.BroadcastListRelationFilter;
    unansweredQuestions?: Prisma.UnansweredQuestionListRelationFilter;
    courseAccess?: Prisma.CourseAccessListRelationFilter;
}, "id">;
export type BusinessOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    isSubscriptionActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BusinessCountOrderByAggregateInput;
    _max?: Prisma.BusinessMaxOrderByAggregateInput;
    _min?: Prisma.BusinessMinOrderByAggregateInput;
};
export type BusinessScalarWhereWithAggregatesInput = {
    AND?: Prisma.BusinessScalarWhereWithAggregatesInput | Prisma.BusinessScalarWhereWithAggregatesInput[];
    OR?: Prisma.BusinessScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BusinessScalarWhereWithAggregatesInput | Prisma.BusinessScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Business"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Business"> | string;
    type?: Prisma.EnumBusinessTypeWithAggregatesFilter<"Business"> | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierWithAggregatesFilter<"Business"> | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolWithAggregatesFilter<"Business"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Business"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Business"> | Date | string;
};
export type BusinessCreateInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateManyInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    isSubscriptionActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BusinessMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    isSubscriptionActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BusinessMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    planTier?: Prisma.SortOrder;
    isSubscriptionActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BusinessScalarRelationFilter = {
    is?: Prisma.BusinessWhereInput;
    isNot?: Prisma.BusinessWhereInput;
};
export type EnumBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusinessType;
};
export type EnumPlanTierFieldUpdateOperationsInput = {
    set?: $Enums.PlanTier;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type BusinessCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutUsersInput, Prisma.BusinessUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutUsersInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutUsersInput, Prisma.BusinessUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.BusinessUpsertWithoutUsersInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutUsersInput, Prisma.BusinessUpdateWithoutUsersInput>, Prisma.BusinessUncheckedUpdateWithoutUsersInput>;
};
export type BusinessCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutProductsInput, Prisma.BusinessUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutProductsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutProductsInput, Prisma.BusinessUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.BusinessUpsertWithoutProductsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutProductsInput, Prisma.BusinessUpdateWithoutProductsInput>, Prisma.BusinessUncheckedUpdateWithoutProductsInput>;
};
export type BusinessCreateNestedOneWithoutCourseAccessInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutCourseAccessInput, Prisma.BusinessUncheckedCreateWithoutCourseAccessInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutCourseAccessInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutCourseAccessNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutCourseAccessInput, Prisma.BusinessUncheckedCreateWithoutCourseAccessInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutCourseAccessInput;
    upsert?: Prisma.BusinessUpsertWithoutCourseAccessInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutCourseAccessInput, Prisma.BusinessUpdateWithoutCourseAccessInput>, Prisma.BusinessUncheckedUpdateWithoutCourseAccessInput>;
};
export type BusinessCreateNestedOneWithoutFaqEntriesInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutFaqEntriesInput, Prisma.BusinessUncheckedCreateWithoutFaqEntriesInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutFaqEntriesInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutFaqEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutFaqEntriesInput, Prisma.BusinessUncheckedCreateWithoutFaqEntriesInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutFaqEntriesInput;
    upsert?: Prisma.BusinessUpsertWithoutFaqEntriesInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutFaqEntriesInput, Prisma.BusinessUpdateWithoutFaqEntriesInput>, Prisma.BusinessUncheckedUpdateWithoutFaqEntriesInput>;
};
export type BusinessCreateNestedOneWithoutLookupEntriesInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutLookupEntriesInput, Prisma.BusinessUncheckedCreateWithoutLookupEntriesInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutLookupEntriesInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutLookupEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutLookupEntriesInput, Prisma.BusinessUncheckedCreateWithoutLookupEntriesInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutLookupEntriesInput;
    upsert?: Prisma.BusinessUpsertWithoutLookupEntriesInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutLookupEntriesInput, Prisma.BusinessUpdateWithoutLookupEntriesInput>, Prisma.BusinessUncheckedUpdateWithoutLookupEntriesInput>;
};
export type BusinessCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutCustomersInput, Prisma.BusinessUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutCustomersInput, Prisma.BusinessUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.BusinessUpsertWithoutCustomersInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutCustomersInput, Prisma.BusinessUpdateWithoutCustomersInput>, Prisma.BusinessUncheckedUpdateWithoutCustomersInput>;
};
export type BusinessCreateNestedOneWithoutFormsInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutFormsInput, Prisma.BusinessUncheckedCreateWithoutFormsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutFormsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutFormsNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutFormsInput, Prisma.BusinessUncheckedCreateWithoutFormsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutFormsInput;
    upsert?: Prisma.BusinessUpsertWithoutFormsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutFormsInput, Prisma.BusinessUpdateWithoutFormsInput>, Prisma.BusinessUncheckedUpdateWithoutFormsInput>;
};
export type BusinessCreateNestedOneWithoutBotsInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutBotsInput, Prisma.BusinessUncheckedCreateWithoutBotsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutBotsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutBotsNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutBotsInput, Prisma.BusinessUncheckedCreateWithoutBotsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutBotsInput;
    upsert?: Prisma.BusinessUpsertWithoutBotsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutBotsInput, Prisma.BusinessUpdateWithoutBotsInput>, Prisma.BusinessUncheckedUpdateWithoutBotsInput>;
};
export type BusinessCreateNestedOneWithoutBroadcastsInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutBroadcastsInput, Prisma.BusinessUncheckedCreateWithoutBroadcastsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutBroadcastsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutBroadcastsNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutBroadcastsInput, Prisma.BusinessUncheckedCreateWithoutBroadcastsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutBroadcastsInput;
    upsert?: Prisma.BusinessUpsertWithoutBroadcastsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutBroadcastsInput, Prisma.BusinessUpdateWithoutBroadcastsInput>, Prisma.BusinessUncheckedUpdateWithoutBroadcastsInput>;
};
export type BusinessCreateNestedOneWithoutUnansweredQuestionsInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutUnansweredQuestionsInput, Prisma.BusinessUncheckedCreateWithoutUnansweredQuestionsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutUnansweredQuestionsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutUnansweredQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutUnansweredQuestionsInput, Prisma.BusinessUncheckedCreateWithoutUnansweredQuestionsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutUnansweredQuestionsInput;
    upsert?: Prisma.BusinessUpsertWithoutUnansweredQuestionsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutUnansweredQuestionsInput, Prisma.BusinessUpdateWithoutUnansweredQuestionsInput>, Prisma.BusinessUncheckedUpdateWithoutUnansweredQuestionsInput>;
};
export type BusinessCreateWithoutUsersInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutUsersInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutUsersInput, Prisma.BusinessUncheckedCreateWithoutUsersInput>;
};
export type BusinessUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutUsersInput, Prisma.BusinessUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutUsersInput, Prisma.BusinessUncheckedCreateWithoutUsersInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutUsersInput, Prisma.BusinessUncheckedUpdateWithoutUsersInput>;
};
export type BusinessUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutProductsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutProductsInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutProductsInput, Prisma.BusinessUncheckedCreateWithoutProductsInput>;
};
export type BusinessUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutProductsInput, Prisma.BusinessUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutProductsInput, Prisma.BusinessUncheckedCreateWithoutProductsInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutProductsInput, Prisma.BusinessUncheckedUpdateWithoutProductsInput>;
};
export type BusinessUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutCourseAccessInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutCourseAccessInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutCourseAccessInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutCourseAccessInput, Prisma.BusinessUncheckedCreateWithoutCourseAccessInput>;
};
export type BusinessUpsertWithoutCourseAccessInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutCourseAccessInput, Prisma.BusinessUncheckedUpdateWithoutCourseAccessInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutCourseAccessInput, Prisma.BusinessUncheckedCreateWithoutCourseAccessInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutCourseAccessInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutCourseAccessInput, Prisma.BusinessUncheckedUpdateWithoutCourseAccessInput>;
};
export type BusinessUpdateWithoutCourseAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutCourseAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutFaqEntriesInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutFaqEntriesInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutFaqEntriesInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutFaqEntriesInput, Prisma.BusinessUncheckedCreateWithoutFaqEntriesInput>;
};
export type BusinessUpsertWithoutFaqEntriesInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutFaqEntriesInput, Prisma.BusinessUncheckedUpdateWithoutFaqEntriesInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutFaqEntriesInput, Prisma.BusinessUncheckedCreateWithoutFaqEntriesInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutFaqEntriesInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutFaqEntriesInput, Prisma.BusinessUncheckedUpdateWithoutFaqEntriesInput>;
};
export type BusinessUpdateWithoutFaqEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutFaqEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutLookupEntriesInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutLookupEntriesInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutLookupEntriesInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutLookupEntriesInput, Prisma.BusinessUncheckedCreateWithoutLookupEntriesInput>;
};
export type BusinessUpsertWithoutLookupEntriesInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutLookupEntriesInput, Prisma.BusinessUncheckedUpdateWithoutLookupEntriesInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutLookupEntriesInput, Prisma.BusinessUncheckedCreateWithoutLookupEntriesInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutLookupEntriesInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutLookupEntriesInput, Prisma.BusinessUncheckedUpdateWithoutLookupEntriesInput>;
};
export type BusinessUpdateWithoutLookupEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutLookupEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutCustomersInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutCustomersInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutCustomersInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutCustomersInput, Prisma.BusinessUncheckedCreateWithoutCustomersInput>;
};
export type BusinessUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutCustomersInput, Prisma.BusinessUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutCustomersInput, Prisma.BusinessUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutCustomersInput, Prisma.BusinessUncheckedUpdateWithoutCustomersInput>;
};
export type BusinessUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutFormsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutFormsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutFormsInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutFormsInput, Prisma.BusinessUncheckedCreateWithoutFormsInput>;
};
export type BusinessUpsertWithoutFormsInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutFormsInput, Prisma.BusinessUncheckedUpdateWithoutFormsInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutFormsInput, Prisma.BusinessUncheckedCreateWithoutFormsInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutFormsInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutFormsInput, Prisma.BusinessUncheckedUpdateWithoutFormsInput>;
};
export type BusinessUpdateWithoutFormsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutFormsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutBotsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutBotsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutBotsInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutBotsInput, Prisma.BusinessUncheckedCreateWithoutBotsInput>;
};
export type BusinessUpsertWithoutBotsInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutBotsInput, Prisma.BusinessUncheckedUpdateWithoutBotsInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutBotsInput, Prisma.BusinessUncheckedCreateWithoutBotsInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutBotsInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutBotsInput, Prisma.BusinessUncheckedUpdateWithoutBotsInput>;
};
export type BusinessUpdateWithoutBotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutBotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutBroadcastsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutBroadcastsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutBroadcastsInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutBroadcastsInput, Prisma.BusinessUncheckedCreateWithoutBroadcastsInput>;
};
export type BusinessUpsertWithoutBroadcastsInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutBroadcastsInput, Prisma.BusinessUncheckedUpdateWithoutBroadcastsInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutBroadcastsInput, Prisma.BusinessUncheckedCreateWithoutBroadcastsInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutBroadcastsInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutBroadcastsInput, Prisma.BusinessUncheckedUpdateWithoutBroadcastsInput>;
};
export type BusinessUpdateWithoutBroadcastsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutBroadcastsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    unansweredQuestions?: Prisma.UnansweredQuestionUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutUnansweredQuestionsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutUnansweredQuestionsInput = {
    id?: string;
    name: string;
    type: $Enums.BusinessType;
    planTier?: $Enums.PlanTier;
    isSubscriptionActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBusinessInput;
    faqEntries?: Prisma.FaqEntryUncheckedCreateNestedManyWithoutBusinessInput;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutBusinessInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutBusinessInput;
    forms?: Prisma.FormDefUncheckedCreateNestedManyWithoutBusinessInput;
    bots?: Prisma.BotUncheckedCreateNestedManyWithoutBusinessInput;
    broadcasts?: Prisma.BroadcastUncheckedCreateNestedManyWithoutBusinessInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutUnansweredQuestionsInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutUnansweredQuestionsInput, Prisma.BusinessUncheckedCreateWithoutUnansweredQuestionsInput>;
};
export type BusinessUpsertWithoutUnansweredQuestionsInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutUnansweredQuestionsInput, Prisma.BusinessUncheckedUpdateWithoutUnansweredQuestionsInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutUnansweredQuestionsInput, Prisma.BusinessUncheckedCreateWithoutUnansweredQuestionsInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutUnansweredQuestionsInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutUnansweredQuestionsInput, Prisma.BusinessUncheckedUpdateWithoutUnansweredQuestionsInput>;
};
export type BusinessUpdateWithoutUnansweredQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutUnansweredQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType;
    planTier?: Prisma.EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier;
    isSubscriptionActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutBusinessNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBusinessNestedInput;
    faqEntries?: Prisma.FaqEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutBusinessNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutBusinessNestedInput;
    forms?: Prisma.FormDefUncheckedUpdateManyWithoutBusinessNestedInput;
    bots?: Prisma.BotUncheckedUpdateManyWithoutBusinessNestedInput;
    broadcasts?: Prisma.BroadcastUncheckedUpdateManyWithoutBusinessNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCountOutputType = {
    users: number;
    products: number;
    faqEntries: number;
    lookupEntries: number;
    customers: number;
    forms: number;
    bots: number;
    broadcasts: number;
    unansweredQuestions: number;
    courseAccess: number;
};
export type BusinessCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | BusinessCountOutputTypeCountUsersArgs;
    products?: boolean | BusinessCountOutputTypeCountProductsArgs;
    faqEntries?: boolean | BusinessCountOutputTypeCountFaqEntriesArgs;
    lookupEntries?: boolean | BusinessCountOutputTypeCountLookupEntriesArgs;
    customers?: boolean | BusinessCountOutputTypeCountCustomersArgs;
    forms?: boolean | BusinessCountOutputTypeCountFormsArgs;
    bots?: boolean | BusinessCountOutputTypeCountBotsArgs;
    broadcasts?: boolean | BusinessCountOutputTypeCountBroadcastsArgs;
    unansweredQuestions?: boolean | BusinessCountOutputTypeCountUnansweredQuestionsArgs;
    courseAccess?: boolean | BusinessCountOutputTypeCountCourseAccessArgs;
};
export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessCountOutputTypeSelect<ExtArgs> | null;
};
export type BusinessCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type BusinessCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type BusinessCountOutputTypeCountFaqEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaqEntryWhereInput;
};
export type BusinessCountOutputTypeCountLookupEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LookupEntryWhereInput;
};
export type BusinessCountOutputTypeCountCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
};
export type BusinessCountOutputTypeCountFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormDefWhereInput;
};
export type BusinessCountOutputTypeCountBotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BotWhereInput;
};
export type BusinessCountOutputTypeCountBroadcastsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BroadcastWhereInput;
};
export type BusinessCountOutputTypeCountUnansweredQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UnansweredQuestionWhereInput;
};
export type BusinessCountOutputTypeCountCourseAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseAccessWhereInput;
};
export type BusinessSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    planTier?: boolean;
    isSubscriptionActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.Business$usersArgs<ExtArgs>;
    products?: boolean | Prisma.Business$productsArgs<ExtArgs>;
    faqEntries?: boolean | Prisma.Business$faqEntriesArgs<ExtArgs>;
    lookupEntries?: boolean | Prisma.Business$lookupEntriesArgs<ExtArgs>;
    customers?: boolean | Prisma.Business$customersArgs<ExtArgs>;
    forms?: boolean | Prisma.Business$formsArgs<ExtArgs>;
    bots?: boolean | Prisma.Business$botsArgs<ExtArgs>;
    broadcasts?: boolean | Prisma.Business$broadcastsArgs<ExtArgs>;
    unansweredQuestions?: boolean | Prisma.Business$unansweredQuestionsArgs<ExtArgs>;
    courseAccess?: boolean | Prisma.Business$courseAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.BusinessCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["business"]>;
export type BusinessSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    planTier?: boolean;
    isSubscriptionActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["business"]>;
export type BusinessSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    planTier?: boolean;
    isSubscriptionActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["business"]>;
export type BusinessSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    planTier?: boolean;
    isSubscriptionActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BusinessOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "planTier" | "isSubscriptionActive" | "createdAt" | "updatedAt", ExtArgs["result"]["business"]>;
export type BusinessInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Business$usersArgs<ExtArgs>;
    products?: boolean | Prisma.Business$productsArgs<ExtArgs>;
    faqEntries?: boolean | Prisma.Business$faqEntriesArgs<ExtArgs>;
    lookupEntries?: boolean | Prisma.Business$lookupEntriesArgs<ExtArgs>;
    customers?: boolean | Prisma.Business$customersArgs<ExtArgs>;
    forms?: boolean | Prisma.Business$formsArgs<ExtArgs>;
    bots?: boolean | Prisma.Business$botsArgs<ExtArgs>;
    broadcasts?: boolean | Prisma.Business$broadcastsArgs<ExtArgs>;
    unansweredQuestions?: boolean | Prisma.Business$unansweredQuestionsArgs<ExtArgs>;
    courseAccess?: boolean | Prisma.Business$courseAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.BusinessCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BusinessIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BusinessPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Business";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        faqEntries: Prisma.$FaqEntryPayload<ExtArgs>[];
        lookupEntries: Prisma.$LookupEntryPayload<ExtArgs>[];
        customers: Prisma.$CustomerPayload<ExtArgs>[];
        forms: Prisma.$FormDefPayload<ExtArgs>[];
        bots: Prisma.$BotPayload<ExtArgs>[];
        broadcasts: Prisma.$BroadcastPayload<ExtArgs>[];
        unansweredQuestions: Prisma.$UnansweredQuestionPayload<ExtArgs>[];
        courseAccess: Prisma.$CourseAccessPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        type: $Enums.BusinessType;
        planTier: $Enums.PlanTier;
        isSubscriptionActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["business"]>;
    composites: {};
};
export type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BusinessPayload, S>;
export type BusinessCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BusinessCountAggregateInputType | true;
};
export interface BusinessDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Business'];
        meta: {
            name: 'Business';
        };
    };
    findUnique<T extends BusinessFindUniqueArgs>(args: Prisma.SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BusinessFindFirstArgs>(args?: Prisma.SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BusinessFindManyArgs>(args?: Prisma.SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BusinessCreateArgs>(args: Prisma.SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BusinessCreateManyArgs>(args?: Prisma.SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BusinessDeleteArgs>(args: Prisma.SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BusinessUpdateArgs>(args: Prisma.SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BusinessDeleteManyArgs>(args?: Prisma.SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BusinessUpdateManyArgs>(args: Prisma.SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BusinessUpsertArgs>(args: Prisma.SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BusinessCountArgs>(args?: Prisma.Subset<T, BusinessCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BusinessCountAggregateOutputType> : number>;
    aggregate<T extends BusinessAggregateArgs>(args: Prisma.Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;
    groupBy<T extends BusinessGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BusinessGroupByArgs['orderBy'];
    } : {
        orderBy?: BusinessGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BusinessFieldRefs;
}
export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Business$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.Business$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    faqEntries<T extends Prisma.Business$faqEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$faqEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lookupEntries<T extends Prisma.Business$lookupEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$lookupEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.Business$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$customersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    forms<T extends Prisma.Business$formsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$formsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bots<T extends Prisma.Business$botsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$botsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    broadcasts<T extends Prisma.Business$broadcastsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$broadcastsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    unansweredQuestions<T extends Prisma.Business$unansweredQuestionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$unansweredQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UnansweredQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courseAccess<T extends Prisma.Business$courseAccessArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$courseAccessArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BusinessFieldRefs {
    readonly id: Prisma.FieldRef<"Business", 'String'>;
    readonly name: Prisma.FieldRef<"Business", 'String'>;
    readonly type: Prisma.FieldRef<"Business", 'BusinessType'>;
    readonly planTier: Prisma.FieldRef<"Business", 'PlanTier'>;
    readonly isSubscriptionActive: Prisma.FieldRef<"Business", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Business", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Business", 'DateTime'>;
}
export type BusinessFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessScalarFieldEnum | Prisma.BusinessScalarFieldEnum[];
};
export type BusinessFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessScalarFieldEnum | Prisma.BusinessScalarFieldEnum[];
};
export type BusinessFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessScalarFieldEnum | Prisma.BusinessScalarFieldEnum[];
};
export type BusinessCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessCreateInput, Prisma.BusinessUncheckedCreateInput>;
};
export type BusinessCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BusinessCreateManyInput | Prisma.BusinessCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BusinessCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    data: Prisma.BusinessCreateManyInput | Prisma.BusinessCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BusinessUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessUpdateInput, Prisma.BusinessUncheckedUpdateInput>;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BusinessUpdateManyMutationInput, Prisma.BusinessUncheckedUpdateManyInput>;
    where?: Prisma.BusinessWhereInput;
    limit?: number;
};
export type BusinessUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessUpdateManyMutationInput, Prisma.BusinessUncheckedUpdateManyInput>;
    where?: Prisma.BusinessWhereInput;
    limit?: number;
};
export type BusinessUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateInput, Prisma.BusinessUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BusinessUpdateInput, Prisma.BusinessUncheckedUpdateInput>;
};
export type BusinessDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessWhereInput;
    limit?: number;
};
export type Business$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Business$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Business$faqEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Business$lookupEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Business$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Business$formsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    where?: Prisma.FormDefWhereInput;
    orderBy?: Prisma.FormDefOrderByWithRelationInput | Prisma.FormDefOrderByWithRelationInput[];
    cursor?: Prisma.FormDefWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormDefScalarFieldEnum | Prisma.FormDefScalarFieldEnum[];
};
export type Business$botsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Business$broadcastsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Business$unansweredQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Business$courseAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BusinessDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
};
