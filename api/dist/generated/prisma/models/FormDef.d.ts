import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FormDefModel = runtime.Types.Result.DefaultSelection<Prisma.$FormDefPayload>;
export type AggregateFormDef = {
    _count: FormDefCountAggregateOutputType | null;
    _min: FormDefMinAggregateOutputType | null;
    _max: FormDefMaxAggregateOutputType | null;
};
export type FormDefMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    title: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FormDefMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    title: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FormDefCountAggregateOutputType = {
    id: number;
    businessId: number;
    title: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FormDefMinAggregateInputType = {
    id?: true;
    businessId?: true;
    title?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FormDefMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    title?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FormDefCountAggregateInputType = {
    id?: true;
    businessId?: true;
    title?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FormDefAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormDefWhereInput;
    orderBy?: Prisma.FormDefOrderByWithRelationInput | Prisma.FormDefOrderByWithRelationInput[];
    cursor?: Prisma.FormDefWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FormDefCountAggregateInputType;
    _min?: FormDefMinAggregateInputType;
    _max?: FormDefMaxAggregateInputType;
};
export type GetFormDefAggregateType<T extends FormDefAggregateArgs> = {
    [P in keyof T & keyof AggregateFormDef]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFormDef[P]> : Prisma.GetScalarType<T[P], AggregateFormDef[P]>;
};
export type FormDefGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormDefWhereInput;
    orderBy?: Prisma.FormDefOrderByWithAggregationInput | Prisma.FormDefOrderByWithAggregationInput[];
    by: Prisma.FormDefScalarFieldEnum[] | Prisma.FormDefScalarFieldEnum;
    having?: Prisma.FormDefScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FormDefCountAggregateInputType | true;
    _min?: FormDefMinAggregateInputType;
    _max?: FormDefMaxAggregateInputType;
};
export type FormDefGroupByOutputType = {
    id: string;
    businessId: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FormDefCountAggregateOutputType | null;
    _min: FormDefMinAggregateOutputType | null;
    _max: FormDefMaxAggregateOutputType | null;
};
export type GetFormDefGroupByPayload<T extends FormDefGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FormDefGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FormDefGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FormDefGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FormDefGroupByOutputType[P]>;
}>>;
export type FormDefWhereInput = {
    AND?: Prisma.FormDefWhereInput | Prisma.FormDefWhereInput[];
    OR?: Prisma.FormDefWhereInput[];
    NOT?: Prisma.FormDefWhereInput | Prisma.FormDefWhereInput[];
    id?: Prisma.StringFilter<"FormDef"> | string;
    businessId?: Prisma.StringFilter<"FormDef"> | string;
    title?: Prisma.StringFilter<"FormDef"> | string;
    createdAt?: Prisma.DateTimeFilter<"FormDef"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FormDef"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    fields?: Prisma.FormFieldListRelationFilter;
    submissions?: Prisma.FormSubmissionListRelationFilter;
};
export type FormDefOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    fields?: Prisma.FormFieldOrderByRelationAggregateInput;
    submissions?: Prisma.FormSubmissionOrderByRelationAggregateInput;
};
export type FormDefWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FormDefWhereInput | Prisma.FormDefWhereInput[];
    OR?: Prisma.FormDefWhereInput[];
    NOT?: Prisma.FormDefWhereInput | Prisma.FormDefWhereInput[];
    businessId?: Prisma.StringFilter<"FormDef"> | string;
    title?: Prisma.StringFilter<"FormDef"> | string;
    createdAt?: Prisma.DateTimeFilter<"FormDef"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FormDef"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    fields?: Prisma.FormFieldListRelationFilter;
    submissions?: Prisma.FormSubmissionListRelationFilter;
}, "id">;
export type FormDefOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FormDefCountOrderByAggregateInput;
    _max?: Prisma.FormDefMaxOrderByAggregateInput;
    _min?: Prisma.FormDefMinOrderByAggregateInput;
};
export type FormDefScalarWhereWithAggregatesInput = {
    AND?: Prisma.FormDefScalarWhereWithAggregatesInput | Prisma.FormDefScalarWhereWithAggregatesInput[];
    OR?: Prisma.FormDefScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FormDefScalarWhereWithAggregatesInput | Prisma.FormDefScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FormDef"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"FormDef"> | string;
    title?: Prisma.StringWithAggregatesFilter<"FormDef"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FormDef"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FormDef"> | Date | string;
};
export type FormDefCreateInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutFormsInput;
    fields?: Prisma.FormFieldCreateNestedManyWithoutFormInput;
    submissions?: Prisma.FormSubmissionCreateNestedManyWithoutFormInput;
};
export type FormDefUncheckedCreateInput = {
    id?: string;
    businessId: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutFormInput;
    submissions?: Prisma.FormSubmissionUncheckedCreateNestedManyWithoutFormInput;
};
export type FormDefUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutFormsNestedInput;
    fields?: Prisma.FormFieldUpdateManyWithoutFormNestedInput;
    submissions?: Prisma.FormSubmissionUpdateManyWithoutFormNestedInput;
};
export type FormDefUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutFormNestedInput;
    submissions?: Prisma.FormSubmissionUncheckedUpdateManyWithoutFormNestedInput;
};
export type FormDefCreateManyInput = {
    id?: string;
    businessId: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormDefUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormDefUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormDefListRelationFilter = {
    every?: Prisma.FormDefWhereInput;
    some?: Prisma.FormDefWhereInput;
    none?: Prisma.FormDefWhereInput;
};
export type FormDefOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FormDefCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormDefMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormDefMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormDefScalarRelationFilter = {
    is?: Prisma.FormDefWhereInput;
    isNot?: Prisma.FormDefWhereInput;
};
export type FormDefCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutBusinessInput, Prisma.FormDefUncheckedCreateWithoutBusinessInput> | Prisma.FormDefCreateWithoutBusinessInput[] | Prisma.FormDefUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutBusinessInput | Prisma.FormDefCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.FormDefCreateManyBusinessInputEnvelope;
    connect?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
};
export type FormDefUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutBusinessInput, Prisma.FormDefUncheckedCreateWithoutBusinessInput> | Prisma.FormDefCreateWithoutBusinessInput[] | Prisma.FormDefUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutBusinessInput | Prisma.FormDefCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.FormDefCreateManyBusinessInputEnvelope;
    connect?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
};
export type FormDefUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutBusinessInput, Prisma.FormDefUncheckedCreateWithoutBusinessInput> | Prisma.FormDefCreateWithoutBusinessInput[] | Prisma.FormDefUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutBusinessInput | Prisma.FormDefCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.FormDefUpsertWithWhereUniqueWithoutBusinessInput | Prisma.FormDefUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.FormDefCreateManyBusinessInputEnvelope;
    set?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    disconnect?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    delete?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    connect?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    update?: Prisma.FormDefUpdateWithWhereUniqueWithoutBusinessInput | Prisma.FormDefUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.FormDefUpdateManyWithWhereWithoutBusinessInput | Prisma.FormDefUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.FormDefScalarWhereInput | Prisma.FormDefScalarWhereInput[];
};
export type FormDefUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutBusinessInput, Prisma.FormDefUncheckedCreateWithoutBusinessInput> | Prisma.FormDefCreateWithoutBusinessInput[] | Prisma.FormDefUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutBusinessInput | Prisma.FormDefCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.FormDefUpsertWithWhereUniqueWithoutBusinessInput | Prisma.FormDefUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.FormDefCreateManyBusinessInputEnvelope;
    set?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    disconnect?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    delete?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    connect?: Prisma.FormDefWhereUniqueInput | Prisma.FormDefWhereUniqueInput[];
    update?: Prisma.FormDefUpdateWithWhereUniqueWithoutBusinessInput | Prisma.FormDefUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.FormDefUpdateManyWithWhereWithoutBusinessInput | Prisma.FormDefUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.FormDefScalarWhereInput | Prisma.FormDefScalarWhereInput[];
};
export type FormDefCreateNestedOneWithoutFieldsInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutFieldsInput, Prisma.FormDefUncheckedCreateWithoutFieldsInput>;
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutFieldsInput;
    connect?: Prisma.FormDefWhereUniqueInput;
};
export type FormDefUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutFieldsInput, Prisma.FormDefUncheckedCreateWithoutFieldsInput>;
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutFieldsInput;
    upsert?: Prisma.FormDefUpsertWithoutFieldsInput;
    connect?: Prisma.FormDefWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FormDefUpdateToOneWithWhereWithoutFieldsInput, Prisma.FormDefUpdateWithoutFieldsInput>, Prisma.FormDefUncheckedUpdateWithoutFieldsInput>;
};
export type FormDefCreateNestedOneWithoutSubmissionsInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutSubmissionsInput, Prisma.FormDefUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutSubmissionsInput;
    connect?: Prisma.FormDefWhereUniqueInput;
};
export type FormDefUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.FormDefCreateWithoutSubmissionsInput, Prisma.FormDefUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.FormDefCreateOrConnectWithoutSubmissionsInput;
    upsert?: Prisma.FormDefUpsertWithoutSubmissionsInput;
    connect?: Prisma.FormDefWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FormDefUpdateToOneWithWhereWithoutSubmissionsInput, Prisma.FormDefUpdateWithoutSubmissionsInput>, Prisma.FormDefUncheckedUpdateWithoutSubmissionsInput>;
};
export type FormDefCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldCreateNestedManyWithoutFormInput;
    submissions?: Prisma.FormSubmissionCreateNestedManyWithoutFormInput;
};
export type FormDefUncheckedCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutFormInput;
    submissions?: Prisma.FormSubmissionUncheckedCreateNestedManyWithoutFormInput;
};
export type FormDefCreateOrConnectWithoutBusinessInput = {
    where: Prisma.FormDefWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormDefCreateWithoutBusinessInput, Prisma.FormDefUncheckedCreateWithoutBusinessInput>;
};
export type FormDefCreateManyBusinessInputEnvelope = {
    data: Prisma.FormDefCreateManyBusinessInput | Prisma.FormDefCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type FormDefUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.FormDefWhereUniqueInput;
    update: Prisma.XOR<Prisma.FormDefUpdateWithoutBusinessInput, Prisma.FormDefUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.FormDefCreateWithoutBusinessInput, Prisma.FormDefUncheckedCreateWithoutBusinessInput>;
};
export type FormDefUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.FormDefWhereUniqueInput;
    data: Prisma.XOR<Prisma.FormDefUpdateWithoutBusinessInput, Prisma.FormDefUncheckedUpdateWithoutBusinessInput>;
};
export type FormDefUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.FormDefScalarWhereInput;
    data: Prisma.XOR<Prisma.FormDefUpdateManyMutationInput, Prisma.FormDefUncheckedUpdateManyWithoutBusinessInput>;
};
export type FormDefScalarWhereInput = {
    AND?: Prisma.FormDefScalarWhereInput | Prisma.FormDefScalarWhereInput[];
    OR?: Prisma.FormDefScalarWhereInput[];
    NOT?: Prisma.FormDefScalarWhereInput | Prisma.FormDefScalarWhereInput[];
    id?: Prisma.StringFilter<"FormDef"> | string;
    businessId?: Prisma.StringFilter<"FormDef"> | string;
    title?: Prisma.StringFilter<"FormDef"> | string;
    createdAt?: Prisma.DateTimeFilter<"FormDef"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FormDef"> | Date | string;
};
export type FormDefCreateWithoutFieldsInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutFormsInput;
    submissions?: Prisma.FormSubmissionCreateNestedManyWithoutFormInput;
};
export type FormDefUncheckedCreateWithoutFieldsInput = {
    id?: string;
    businessId: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submissions?: Prisma.FormSubmissionUncheckedCreateNestedManyWithoutFormInput;
};
export type FormDefCreateOrConnectWithoutFieldsInput = {
    where: Prisma.FormDefWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormDefCreateWithoutFieldsInput, Prisma.FormDefUncheckedCreateWithoutFieldsInput>;
};
export type FormDefUpsertWithoutFieldsInput = {
    update: Prisma.XOR<Prisma.FormDefUpdateWithoutFieldsInput, Prisma.FormDefUncheckedUpdateWithoutFieldsInput>;
    create: Prisma.XOR<Prisma.FormDefCreateWithoutFieldsInput, Prisma.FormDefUncheckedCreateWithoutFieldsInput>;
    where?: Prisma.FormDefWhereInput;
};
export type FormDefUpdateToOneWithWhereWithoutFieldsInput = {
    where?: Prisma.FormDefWhereInput;
    data: Prisma.XOR<Prisma.FormDefUpdateWithoutFieldsInput, Prisma.FormDefUncheckedUpdateWithoutFieldsInput>;
};
export type FormDefUpdateWithoutFieldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutFormsNestedInput;
    submissions?: Prisma.FormSubmissionUpdateManyWithoutFormNestedInput;
};
export type FormDefUncheckedUpdateWithoutFieldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submissions?: Prisma.FormSubmissionUncheckedUpdateManyWithoutFormNestedInput;
};
export type FormDefCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutFormsInput;
    fields?: Prisma.FormFieldCreateNestedManyWithoutFormInput;
};
export type FormDefUncheckedCreateWithoutSubmissionsInput = {
    id?: string;
    businessId: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutFormInput;
};
export type FormDefCreateOrConnectWithoutSubmissionsInput = {
    where: Prisma.FormDefWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormDefCreateWithoutSubmissionsInput, Prisma.FormDefUncheckedCreateWithoutSubmissionsInput>;
};
export type FormDefUpsertWithoutSubmissionsInput = {
    update: Prisma.XOR<Prisma.FormDefUpdateWithoutSubmissionsInput, Prisma.FormDefUncheckedUpdateWithoutSubmissionsInput>;
    create: Prisma.XOR<Prisma.FormDefCreateWithoutSubmissionsInput, Prisma.FormDefUncheckedCreateWithoutSubmissionsInput>;
    where?: Prisma.FormDefWhereInput;
};
export type FormDefUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: Prisma.FormDefWhereInput;
    data: Prisma.XOR<Prisma.FormDefUpdateWithoutSubmissionsInput, Prisma.FormDefUncheckedUpdateWithoutSubmissionsInput>;
};
export type FormDefUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutFormsNestedInput;
    fields?: Prisma.FormFieldUpdateManyWithoutFormNestedInput;
};
export type FormDefUncheckedUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutFormNestedInput;
};
export type FormDefCreateManyBusinessInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormDefUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUpdateManyWithoutFormNestedInput;
    submissions?: Prisma.FormSubmissionUpdateManyWithoutFormNestedInput;
};
export type FormDefUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutFormNestedInput;
    submissions?: Prisma.FormSubmissionUncheckedUpdateManyWithoutFormNestedInput;
};
export type FormDefUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormDefCountOutputType = {
    fields: number;
    submissions: number;
};
export type FormDefCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fields?: boolean | FormDefCountOutputTypeCountFieldsArgs;
    submissions?: boolean | FormDefCountOutputTypeCountSubmissionsArgs;
};
export type FormDefCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefCountOutputTypeSelect<ExtArgs> | null;
};
export type FormDefCountOutputTypeCountFieldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormFieldWhereInput;
};
export type FormDefCountOutputTypeCountSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormSubmissionWhereInput;
};
export type FormDefSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    title?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    fields?: boolean | Prisma.FormDef$fieldsArgs<ExtArgs>;
    submissions?: boolean | Prisma.FormDef$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.FormDefCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formDef"]>;
export type FormDefSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    title?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formDef"]>;
export type FormDefSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    title?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formDef"]>;
export type FormDefSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    title?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FormDefOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["formDef"]>;
export type FormDefInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    fields?: boolean | Prisma.FormDef$fieldsArgs<ExtArgs>;
    submissions?: boolean | Prisma.FormDef$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.FormDefCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FormDefIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type FormDefIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $FormDefPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FormDef";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        fields: Prisma.$FormFieldPayload<ExtArgs>[];
        submissions: Prisma.$FormSubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["formDef"]>;
    composites: {};
};
export type FormDefGetPayload<S extends boolean | null | undefined | FormDefDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FormDefPayload, S>;
export type FormDefCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FormDefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FormDefCountAggregateInputType | true;
};
export interface FormDefDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FormDef'];
        meta: {
            name: 'FormDef';
        };
    };
    findUnique<T extends FormDefFindUniqueArgs>(args: Prisma.SelectSubset<T, FormDefFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FormDefFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FormDefFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FormDefFindFirstArgs>(args?: Prisma.SelectSubset<T, FormDefFindFirstArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FormDefFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FormDefFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FormDefFindManyArgs>(args?: Prisma.SelectSubset<T, FormDefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FormDefCreateArgs>(args: Prisma.SelectSubset<T, FormDefCreateArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FormDefCreateManyArgs>(args?: Prisma.SelectSubset<T, FormDefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FormDefCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FormDefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FormDefDeleteArgs>(args: Prisma.SelectSubset<T, FormDefDeleteArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FormDefUpdateArgs>(args: Prisma.SelectSubset<T, FormDefUpdateArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FormDefDeleteManyArgs>(args?: Prisma.SelectSubset<T, FormDefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FormDefUpdateManyArgs>(args: Prisma.SelectSubset<T, FormDefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FormDefUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FormDefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FormDefUpsertArgs>(args: Prisma.SelectSubset<T, FormDefUpsertArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FormDefCountArgs>(args?: Prisma.Subset<T, FormDefCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FormDefCountAggregateOutputType> : number>;
    aggregate<T extends FormDefAggregateArgs>(args: Prisma.Subset<T, FormDefAggregateArgs>): Prisma.PrismaPromise<GetFormDefAggregateType<T>>;
    groupBy<T extends FormDefGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FormDefGroupByArgs['orderBy'];
    } : {
        orderBy?: FormDefGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FormDefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormDefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FormDefFieldRefs;
}
export interface Prisma__FormDefClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    fields<T extends Prisma.FormDef$fieldsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormDef$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    submissions<T extends Prisma.FormDef$submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormDef$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FormDefFieldRefs {
    readonly id: Prisma.FieldRef<"FormDef", 'String'>;
    readonly businessId: Prisma.FieldRef<"FormDef", 'String'>;
    readonly title: Prisma.FieldRef<"FormDef", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FormDef", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FormDef", 'DateTime'>;
}
export type FormDefFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    where: Prisma.FormDefWhereUniqueInput;
};
export type FormDefFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    where: Prisma.FormDefWhereUniqueInput;
};
export type FormDefFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormDefFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormDefFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormDefCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormDefCreateInput, Prisma.FormDefUncheckedCreateInput>;
};
export type FormDefCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FormDefCreateManyInput | Prisma.FormDefCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FormDefCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    data: Prisma.FormDefCreateManyInput | Prisma.FormDefCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FormDefIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FormDefUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormDefUpdateInput, Prisma.FormDefUncheckedUpdateInput>;
    where: Prisma.FormDefWhereUniqueInput;
};
export type FormDefUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FormDefUpdateManyMutationInput, Prisma.FormDefUncheckedUpdateManyInput>;
    where?: Prisma.FormDefWhereInput;
    limit?: number;
};
export type FormDefUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormDefUpdateManyMutationInput, Prisma.FormDefUncheckedUpdateManyInput>;
    where?: Prisma.FormDefWhereInput;
    limit?: number;
    include?: Prisma.FormDefIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FormDefUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    where: Prisma.FormDefWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormDefCreateInput, Prisma.FormDefUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FormDefUpdateInput, Prisma.FormDefUncheckedUpdateInput>;
};
export type FormDefDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
    where: Prisma.FormDefWhereUniqueInput;
};
export type FormDefDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormDefWhereInput;
    limit?: number;
};
export type FormDef$fieldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    where?: Prisma.FormFieldWhereInput;
    orderBy?: Prisma.FormFieldOrderByWithRelationInput | Prisma.FormFieldOrderByWithRelationInput[];
    cursor?: Prisma.FormFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormFieldScalarFieldEnum | Prisma.FormFieldScalarFieldEnum[];
};
export type FormDef$submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormDefDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormDefSelect<ExtArgs> | null;
    omit?: Prisma.FormDefOmit<ExtArgs> | null;
    include?: Prisma.FormDefInclude<ExtArgs> | null;
};
