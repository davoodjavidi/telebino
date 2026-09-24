import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FormSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$FormSubmissionPayload>;
export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null;
    _min: FormSubmissionMinAggregateOutputType | null;
    _max: FormSubmissionMaxAggregateOutputType | null;
};
export type FormSubmissionMinAggregateOutputType = {
    id: string | null;
    formId: string | null;
    customerId: string | null;
    createdAt: Date | null;
};
export type FormSubmissionMaxAggregateOutputType = {
    id: string | null;
    formId: string | null;
    customerId: string | null;
    createdAt: Date | null;
};
export type FormSubmissionCountAggregateOutputType = {
    id: number;
    formId: number;
    customerId: number;
    answers: number;
    createdAt: number;
    _all: number;
};
export type FormSubmissionMinAggregateInputType = {
    id?: true;
    formId?: true;
    customerId?: true;
    createdAt?: true;
};
export type FormSubmissionMaxAggregateInputType = {
    id?: true;
    formId?: true;
    customerId?: true;
    createdAt?: true;
};
export type FormSubmissionCountAggregateInputType = {
    id?: true;
    formId?: true;
    customerId?: true;
    answers?: true;
    createdAt?: true;
    _all?: true;
};
export type FormSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormSubmissionWhereInput;
    orderBy?: Prisma.FormSubmissionOrderByWithRelationInput | Prisma.FormSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.FormSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FormSubmissionCountAggregateInputType;
    _min?: FormSubmissionMinAggregateInputType;
    _max?: FormSubmissionMaxAggregateInputType;
};
export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFormSubmission[P]> : Prisma.GetScalarType<T[P], AggregateFormSubmission[P]>;
};
export type FormSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormSubmissionWhereInput;
    orderBy?: Prisma.FormSubmissionOrderByWithAggregationInput | Prisma.FormSubmissionOrderByWithAggregationInput[];
    by: Prisma.FormSubmissionScalarFieldEnum[] | Prisma.FormSubmissionScalarFieldEnum;
    having?: Prisma.FormSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FormSubmissionCountAggregateInputType | true;
    _min?: FormSubmissionMinAggregateInputType;
    _max?: FormSubmissionMaxAggregateInputType;
};
export type FormSubmissionGroupByOutputType = {
    id: string;
    formId: string;
    customerId: string | null;
    answers: runtime.JsonValue;
    createdAt: Date;
    _count: FormSubmissionCountAggregateOutputType | null;
    _min: FormSubmissionMinAggregateOutputType | null;
    _max: FormSubmissionMaxAggregateOutputType | null;
};
export type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FormSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FormSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>;
}>>;
export type FormSubmissionWhereInput = {
    AND?: Prisma.FormSubmissionWhereInput | Prisma.FormSubmissionWhereInput[];
    OR?: Prisma.FormSubmissionWhereInput[];
    NOT?: Prisma.FormSubmissionWhereInput | Prisma.FormSubmissionWhereInput[];
    id?: Prisma.StringFilter<"FormSubmission"> | string;
    formId?: Prisma.StringFilter<"FormSubmission"> | string;
    customerId?: Prisma.StringNullableFilter<"FormSubmission"> | string | null;
    answers?: Prisma.JsonFilter<"FormSubmission">;
    createdAt?: Prisma.DateTimeFilter<"FormSubmission"> | Date | string;
    form?: Prisma.XOR<Prisma.FormDefScalarRelationFilter, Prisma.FormDefWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
};
export type FormSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    form?: Prisma.FormDefOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FormSubmissionWhereInput | Prisma.FormSubmissionWhereInput[];
    OR?: Prisma.FormSubmissionWhereInput[];
    NOT?: Prisma.FormSubmissionWhereInput | Prisma.FormSubmissionWhereInput[];
    formId?: Prisma.StringFilter<"FormSubmission"> | string;
    customerId?: Prisma.StringNullableFilter<"FormSubmission"> | string | null;
    answers?: Prisma.JsonFilter<"FormSubmission">;
    createdAt?: Prisma.DateTimeFilter<"FormSubmission"> | Date | string;
    form?: Prisma.XOR<Prisma.FormDefScalarRelationFilter, Prisma.FormDefWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
}, "id">;
export type FormSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FormSubmissionCountOrderByAggregateInput;
    _max?: Prisma.FormSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.FormSubmissionMinOrderByAggregateInput;
};
export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.FormSubmissionScalarWhereWithAggregatesInput | Prisma.FormSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.FormSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FormSubmissionScalarWhereWithAggregatesInput | Prisma.FormSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FormSubmission"> | string;
    formId?: Prisma.StringWithAggregatesFilter<"FormSubmission"> | string;
    customerId?: Prisma.StringNullableWithAggregatesFilter<"FormSubmission"> | string | null;
    answers?: Prisma.JsonWithAggregatesFilter<"FormSubmission">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string;
};
export type FormSubmissionCreateInput = {
    id?: string;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    form: Prisma.FormDefCreateNestedOneWithoutSubmissionsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutFormSubmissionsInput;
};
export type FormSubmissionUncheckedCreateInput = {
    id?: string;
    formId: string;
    customerId?: string | null;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FormSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.FormDefUpdateOneRequiredWithoutSubmissionsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutFormSubmissionsNestedInput;
};
export type FormSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionCreateManyInput = {
    id?: string;
    formId: string;
    customerId?: string | null;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FormSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionListRelationFilter = {
    every?: Prisma.FormSubmissionWhereInput;
    some?: Prisma.FormSubmissionWhereInput;
    none?: Prisma.FormSubmissionWhereInput;
};
export type FormSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FormSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FormSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FormSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FormSubmissionCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutCustomerInput, Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput> | Prisma.FormSubmissionCreateWithoutCustomerInput[] | Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput | Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.FormSubmissionCreateManyCustomerInputEnvelope;
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
};
export type FormSubmissionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutCustomerInput, Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput> | Prisma.FormSubmissionCreateWithoutCustomerInput[] | Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput | Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.FormSubmissionCreateManyCustomerInputEnvelope;
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
};
export type FormSubmissionUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutCustomerInput, Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput> | Prisma.FormSubmissionCreateWithoutCustomerInput[] | Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput | Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.FormSubmissionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.FormSubmissionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.FormSubmissionCreateManyCustomerInputEnvelope;
    set?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    disconnect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    delete?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    update?: Prisma.FormSubmissionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.FormSubmissionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.FormSubmissionUpdateManyWithWhereWithoutCustomerInput | Prisma.FormSubmissionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.FormSubmissionScalarWhereInput | Prisma.FormSubmissionScalarWhereInput[];
};
export type FormSubmissionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutCustomerInput, Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput> | Prisma.FormSubmissionCreateWithoutCustomerInput[] | Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput | Prisma.FormSubmissionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.FormSubmissionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.FormSubmissionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.FormSubmissionCreateManyCustomerInputEnvelope;
    set?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    disconnect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    delete?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    update?: Prisma.FormSubmissionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.FormSubmissionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.FormSubmissionUpdateManyWithWhereWithoutCustomerInput | Prisma.FormSubmissionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.FormSubmissionScalarWhereInput | Prisma.FormSubmissionScalarWhereInput[];
};
export type FormSubmissionCreateNestedManyWithoutFormInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutFormInput, Prisma.FormSubmissionUncheckedCreateWithoutFormInput> | Prisma.FormSubmissionCreateWithoutFormInput[] | Prisma.FormSubmissionUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutFormInput | Prisma.FormSubmissionCreateOrConnectWithoutFormInput[];
    createMany?: Prisma.FormSubmissionCreateManyFormInputEnvelope;
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
};
export type FormSubmissionUncheckedCreateNestedManyWithoutFormInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutFormInput, Prisma.FormSubmissionUncheckedCreateWithoutFormInput> | Prisma.FormSubmissionCreateWithoutFormInput[] | Prisma.FormSubmissionUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutFormInput | Prisma.FormSubmissionCreateOrConnectWithoutFormInput[];
    createMany?: Prisma.FormSubmissionCreateManyFormInputEnvelope;
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
};
export type FormSubmissionUpdateManyWithoutFormNestedInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutFormInput, Prisma.FormSubmissionUncheckedCreateWithoutFormInput> | Prisma.FormSubmissionCreateWithoutFormInput[] | Prisma.FormSubmissionUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutFormInput | Prisma.FormSubmissionCreateOrConnectWithoutFormInput[];
    upsert?: Prisma.FormSubmissionUpsertWithWhereUniqueWithoutFormInput | Prisma.FormSubmissionUpsertWithWhereUniqueWithoutFormInput[];
    createMany?: Prisma.FormSubmissionCreateManyFormInputEnvelope;
    set?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    disconnect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    delete?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    update?: Prisma.FormSubmissionUpdateWithWhereUniqueWithoutFormInput | Prisma.FormSubmissionUpdateWithWhereUniqueWithoutFormInput[];
    updateMany?: Prisma.FormSubmissionUpdateManyWithWhereWithoutFormInput | Prisma.FormSubmissionUpdateManyWithWhereWithoutFormInput[];
    deleteMany?: Prisma.FormSubmissionScalarWhereInput | Prisma.FormSubmissionScalarWhereInput[];
};
export type FormSubmissionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: Prisma.XOR<Prisma.FormSubmissionCreateWithoutFormInput, Prisma.FormSubmissionUncheckedCreateWithoutFormInput> | Prisma.FormSubmissionCreateWithoutFormInput[] | Prisma.FormSubmissionUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.FormSubmissionCreateOrConnectWithoutFormInput | Prisma.FormSubmissionCreateOrConnectWithoutFormInput[];
    upsert?: Prisma.FormSubmissionUpsertWithWhereUniqueWithoutFormInput | Prisma.FormSubmissionUpsertWithWhereUniqueWithoutFormInput[];
    createMany?: Prisma.FormSubmissionCreateManyFormInputEnvelope;
    set?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    disconnect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    delete?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    connect?: Prisma.FormSubmissionWhereUniqueInput | Prisma.FormSubmissionWhereUniqueInput[];
    update?: Prisma.FormSubmissionUpdateWithWhereUniqueWithoutFormInput | Prisma.FormSubmissionUpdateWithWhereUniqueWithoutFormInput[];
    updateMany?: Prisma.FormSubmissionUpdateManyWithWhereWithoutFormInput | Prisma.FormSubmissionUpdateManyWithWhereWithoutFormInput[];
    deleteMany?: Prisma.FormSubmissionScalarWhereInput | Prisma.FormSubmissionScalarWhereInput[];
};
export type FormSubmissionCreateWithoutCustomerInput = {
    id?: string;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    form: Prisma.FormDefCreateNestedOneWithoutSubmissionsInput;
};
export type FormSubmissionUncheckedCreateWithoutCustomerInput = {
    id?: string;
    formId: string;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FormSubmissionCreateOrConnectWithoutCustomerInput = {
    where: Prisma.FormSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormSubmissionCreateWithoutCustomerInput, Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput>;
};
export type FormSubmissionCreateManyCustomerInputEnvelope = {
    data: Prisma.FormSubmissionCreateManyCustomerInput | Prisma.FormSubmissionCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type FormSubmissionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.FormSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.FormSubmissionUpdateWithoutCustomerInput, Prisma.FormSubmissionUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.FormSubmissionCreateWithoutCustomerInput, Prisma.FormSubmissionUncheckedCreateWithoutCustomerInput>;
};
export type FormSubmissionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.FormSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.FormSubmissionUpdateWithoutCustomerInput, Prisma.FormSubmissionUncheckedUpdateWithoutCustomerInput>;
};
export type FormSubmissionUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.FormSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.FormSubmissionUpdateManyMutationInput, Prisma.FormSubmissionUncheckedUpdateManyWithoutCustomerInput>;
};
export type FormSubmissionScalarWhereInput = {
    AND?: Prisma.FormSubmissionScalarWhereInput | Prisma.FormSubmissionScalarWhereInput[];
    OR?: Prisma.FormSubmissionScalarWhereInput[];
    NOT?: Prisma.FormSubmissionScalarWhereInput | Prisma.FormSubmissionScalarWhereInput[];
    id?: Prisma.StringFilter<"FormSubmission"> | string;
    formId?: Prisma.StringFilter<"FormSubmission"> | string;
    customerId?: Prisma.StringNullableFilter<"FormSubmission"> | string | null;
    answers?: Prisma.JsonFilter<"FormSubmission">;
    createdAt?: Prisma.DateTimeFilter<"FormSubmission"> | Date | string;
};
export type FormSubmissionCreateWithoutFormInput = {
    id?: string;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutFormSubmissionsInput;
};
export type FormSubmissionUncheckedCreateWithoutFormInput = {
    id?: string;
    customerId?: string | null;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FormSubmissionCreateOrConnectWithoutFormInput = {
    where: Prisma.FormSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormSubmissionCreateWithoutFormInput, Prisma.FormSubmissionUncheckedCreateWithoutFormInput>;
};
export type FormSubmissionCreateManyFormInputEnvelope = {
    data: Prisma.FormSubmissionCreateManyFormInput | Prisma.FormSubmissionCreateManyFormInput[];
    skipDuplicates?: boolean;
};
export type FormSubmissionUpsertWithWhereUniqueWithoutFormInput = {
    where: Prisma.FormSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.FormSubmissionUpdateWithoutFormInput, Prisma.FormSubmissionUncheckedUpdateWithoutFormInput>;
    create: Prisma.XOR<Prisma.FormSubmissionCreateWithoutFormInput, Prisma.FormSubmissionUncheckedCreateWithoutFormInput>;
};
export type FormSubmissionUpdateWithWhereUniqueWithoutFormInput = {
    where: Prisma.FormSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.FormSubmissionUpdateWithoutFormInput, Prisma.FormSubmissionUncheckedUpdateWithoutFormInput>;
};
export type FormSubmissionUpdateManyWithWhereWithoutFormInput = {
    where: Prisma.FormSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.FormSubmissionUpdateManyMutationInput, Prisma.FormSubmissionUncheckedUpdateManyWithoutFormInput>;
};
export type FormSubmissionCreateManyCustomerInput = {
    id?: string;
    formId: string;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FormSubmissionUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.FormDefUpdateOneRequiredWithoutSubmissionsNestedInput;
};
export type FormSubmissionUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionCreateManyFormInput = {
    id?: string;
    customerId?: string | null;
    answers: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type FormSubmissionUpdateWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutFormSubmissionsNestedInput;
};
export type FormSubmissionUncheckedUpdateWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionUncheckedUpdateManyWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    customerId?: boolean;
    answers?: boolean;
    createdAt?: boolean;
    form?: boolean | Prisma.FormDefDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.FormSubmission$customerArgs<ExtArgs>;
}, ExtArgs["result"]["formSubmission"]>;
export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    customerId?: boolean;
    answers?: boolean;
    createdAt?: boolean;
    form?: boolean | Prisma.FormDefDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.FormSubmission$customerArgs<ExtArgs>;
}, ExtArgs["result"]["formSubmission"]>;
export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    customerId?: boolean;
    answers?: boolean;
    createdAt?: boolean;
    form?: boolean | Prisma.FormDefDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.FormSubmission$customerArgs<ExtArgs>;
}, ExtArgs["result"]["formSubmission"]>;
export type FormSubmissionSelectScalar = {
    id?: boolean;
    formId?: boolean;
    customerId?: boolean;
    answers?: boolean;
    createdAt?: boolean;
};
export type FormSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "formId" | "customerId" | "answers" | "createdAt", ExtArgs["result"]["formSubmission"]>;
export type FormSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.FormDefDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.FormSubmission$customerArgs<ExtArgs>;
};
export type FormSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.FormDefDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.FormSubmission$customerArgs<ExtArgs>;
};
export type FormSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.FormDefDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.FormSubmission$customerArgs<ExtArgs>;
};
export type $FormSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FormSubmission";
    objects: {
        form: Prisma.$FormDefPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        formId: string;
        customerId: string | null;
        answers: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["formSubmission"]>;
    composites: {};
};
export type FormSubmissionGetPayload<S extends boolean | null | undefined | FormSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload, S>;
export type FormSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FormSubmissionCountAggregateInputType | true;
};
export interface FormSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FormSubmission'];
        meta: {
            name: 'FormSubmission';
        };
    };
    findUnique<T extends FormSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, FormSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FormSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FormSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, FormSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FormSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FormSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, FormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FormSubmissionCreateArgs>(args: Prisma.SelectSubset<T, FormSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FormSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, FormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FormSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FormSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, FormSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FormSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, FormSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FormSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, FormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FormSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, FormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FormSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FormSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, FormSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__FormSubmissionClient<runtime.Types.Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FormSubmissionCountArgs>(args?: Prisma.Subset<T, FormSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FormSubmissionCountAggregateOutputType> : number>;
    aggregate<T extends FormSubmissionAggregateArgs>(args: Prisma.Subset<T, FormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionAggregateType<T>>;
    groupBy<T extends FormSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FormSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: FormSubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FormSubmissionFieldRefs;
}
export interface Prisma__FormSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    form<T extends Prisma.FormDefDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormDefDefaultArgs<ExtArgs>>): Prisma.Prisma__FormDefClient<runtime.Types.Result.GetResult<Prisma.$FormDefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.FormSubmission$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormSubmission$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FormSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"FormSubmission", 'String'>;
    readonly formId: Prisma.FieldRef<"FormSubmission", 'String'>;
    readonly customerId: Prisma.FieldRef<"FormSubmission", 'String'>;
    readonly answers: Prisma.FieldRef<"FormSubmission", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"FormSubmission", 'DateTime'>;
}
export type FormSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    where: Prisma.FormSubmissionWhereUniqueInput;
};
export type FormSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    where: Prisma.FormSubmissionWhereUniqueInput;
};
export type FormSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormSubmissionCreateInput, Prisma.FormSubmissionUncheckedCreateInput>;
};
export type FormSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FormSubmissionCreateManyInput | Prisma.FormSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FormSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    data: Prisma.FormSubmissionCreateManyInput | Prisma.FormSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FormSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FormSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormSubmissionUpdateInput, Prisma.FormSubmissionUncheckedUpdateInput>;
    where: Prisma.FormSubmissionWhereUniqueInput;
};
export type FormSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FormSubmissionUpdateManyMutationInput, Prisma.FormSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.FormSubmissionWhereInput;
    limit?: number;
};
export type FormSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormSubmissionUpdateManyMutationInput, Prisma.FormSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.FormSubmissionWhereInput;
    limit?: number;
    include?: Prisma.FormSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FormSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    where: Prisma.FormSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormSubmissionCreateInput, Prisma.FormSubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FormSubmissionUpdateInput, Prisma.FormSubmissionUncheckedUpdateInput>;
};
export type FormSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
    where: Prisma.FormSubmissionWhereUniqueInput;
};
export type FormSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormSubmissionWhereInput;
    limit?: number;
};
export type FormSubmission$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type FormSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.FormSubmissionOmit<ExtArgs> | null;
    include?: Prisma.FormSubmissionInclude<ExtArgs> | null;
};
