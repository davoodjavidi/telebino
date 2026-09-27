import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourseLessonModel = runtime.Types.Result.DefaultSelection<Prisma.$CourseLessonPayload>;
export type AggregateCourseLesson = {
    _count: CourseLessonCountAggregateOutputType | null;
    _avg: CourseLessonAvgAggregateOutputType | null;
    _sum: CourseLessonSumAggregateOutputType | null;
    _min: CourseLessonMinAggregateOutputType | null;
    _max: CourseLessonMaxAggregateOutputType | null;
};
export type CourseLessonAvgAggregateOutputType = {
    order: number | null;
    durationSeconds: number | null;
};
export type CourseLessonSumAggregateOutputType = {
    order: number | null;
    durationSeconds: number | null;
};
export type CourseLessonMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    title: string | null;
    order: number | null;
    arvanVideoId: string | null;
    status: $Enums.LessonStatus | null;
    durationSeconds: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseLessonMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    title: string | null;
    order: number | null;
    arvanVideoId: string | null;
    status: $Enums.LessonStatus | null;
    durationSeconds: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseLessonCountAggregateOutputType = {
    id: number;
    productId: number;
    title: number;
    order: number;
    arvanVideoId: number;
    status: number;
    durationSeconds: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CourseLessonAvgAggregateInputType = {
    order?: true;
    durationSeconds?: true;
};
export type CourseLessonSumAggregateInputType = {
    order?: true;
    durationSeconds?: true;
};
export type CourseLessonMinAggregateInputType = {
    id?: true;
    productId?: true;
    title?: true;
    order?: true;
    arvanVideoId?: true;
    status?: true;
    durationSeconds?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseLessonMaxAggregateInputType = {
    id?: true;
    productId?: true;
    title?: true;
    order?: true;
    arvanVideoId?: true;
    status?: true;
    durationSeconds?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseLessonCountAggregateInputType = {
    id?: true;
    productId?: true;
    title?: true;
    order?: true;
    arvanVideoId?: true;
    status?: true;
    durationSeconds?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CourseLessonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseLessonWhereInput;
    orderBy?: Prisma.CourseLessonOrderByWithRelationInput | Prisma.CourseLessonOrderByWithRelationInput[];
    cursor?: Prisma.CourseLessonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourseLessonCountAggregateInputType;
    _avg?: CourseLessonAvgAggregateInputType;
    _sum?: CourseLessonSumAggregateInputType;
    _min?: CourseLessonMinAggregateInputType;
    _max?: CourseLessonMaxAggregateInputType;
};
export type GetCourseLessonAggregateType<T extends CourseLessonAggregateArgs> = {
    [P in keyof T & keyof AggregateCourseLesson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourseLesson[P]> : Prisma.GetScalarType<T[P], AggregateCourseLesson[P]>;
};
export type CourseLessonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseLessonWhereInput;
    orderBy?: Prisma.CourseLessonOrderByWithAggregationInput | Prisma.CourseLessonOrderByWithAggregationInput[];
    by: Prisma.CourseLessonScalarFieldEnum[] | Prisma.CourseLessonScalarFieldEnum;
    having?: Prisma.CourseLessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseLessonCountAggregateInputType | true;
    _avg?: CourseLessonAvgAggregateInputType;
    _sum?: CourseLessonSumAggregateInputType;
    _min?: CourseLessonMinAggregateInputType;
    _max?: CourseLessonMaxAggregateInputType;
};
export type CourseLessonGroupByOutputType = {
    id: string;
    productId: string;
    title: string;
    order: number;
    arvanVideoId: string | null;
    status: $Enums.LessonStatus;
    durationSeconds: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseLessonCountAggregateOutputType | null;
    _avg: CourseLessonAvgAggregateOutputType | null;
    _sum: CourseLessonSumAggregateOutputType | null;
    _min: CourseLessonMinAggregateOutputType | null;
    _max: CourseLessonMaxAggregateOutputType | null;
};
export type GetCourseLessonGroupByPayload<T extends CourseLessonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseLessonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseLessonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseLessonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseLessonGroupByOutputType[P]>;
}>>;
export type CourseLessonWhereInput = {
    AND?: Prisma.CourseLessonWhereInput | Prisma.CourseLessonWhereInput[];
    OR?: Prisma.CourseLessonWhereInput[];
    NOT?: Prisma.CourseLessonWhereInput | Prisma.CourseLessonWhereInput[];
    id?: Prisma.StringFilter<"CourseLesson"> | string;
    productId?: Prisma.StringFilter<"CourseLesson"> | string;
    title?: Prisma.StringFilter<"CourseLesson"> | string;
    order?: Prisma.IntFilter<"CourseLesson"> | number;
    arvanVideoId?: Prisma.StringNullableFilter<"CourseLesson"> | string | null;
    status?: Prisma.EnumLessonStatusFilter<"CourseLesson"> | $Enums.LessonStatus;
    durationSeconds?: Prisma.IntNullableFilter<"CourseLesson"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"CourseLesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CourseLesson"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type CourseLessonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    arvanVideoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type CourseLessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CourseLessonWhereInput | Prisma.CourseLessonWhereInput[];
    OR?: Prisma.CourseLessonWhereInput[];
    NOT?: Prisma.CourseLessonWhereInput | Prisma.CourseLessonWhereInput[];
    productId?: Prisma.StringFilter<"CourseLesson"> | string;
    title?: Prisma.StringFilter<"CourseLesson"> | string;
    order?: Prisma.IntFilter<"CourseLesson"> | number;
    arvanVideoId?: Prisma.StringNullableFilter<"CourseLesson"> | string | null;
    status?: Prisma.EnumLessonStatusFilter<"CourseLesson"> | $Enums.LessonStatus;
    durationSeconds?: Prisma.IntNullableFilter<"CourseLesson"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"CourseLesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CourseLesson"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type CourseLessonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    arvanVideoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseLessonCountOrderByAggregateInput;
    _avg?: Prisma.CourseLessonAvgOrderByAggregateInput;
    _max?: Prisma.CourseLessonMaxOrderByAggregateInput;
    _min?: Prisma.CourseLessonMinOrderByAggregateInput;
    _sum?: Prisma.CourseLessonSumOrderByAggregateInput;
};
export type CourseLessonScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseLessonScalarWhereWithAggregatesInput | Prisma.CourseLessonScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseLessonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseLessonScalarWhereWithAggregatesInput | Prisma.CourseLessonScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CourseLesson"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"CourseLesson"> | string;
    title?: Prisma.StringWithAggregatesFilter<"CourseLesson"> | string;
    order?: Prisma.IntWithAggregatesFilter<"CourseLesson"> | number;
    arvanVideoId?: Prisma.StringNullableWithAggregatesFilter<"CourseLesson"> | string | null;
    status?: Prisma.EnumLessonStatusWithAggregatesFilter<"CourseLesson"> | $Enums.LessonStatus;
    durationSeconds?: Prisma.IntNullableWithAggregatesFilter<"CourseLesson"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CourseLesson"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CourseLesson"> | Date | string;
};
export type CourseLessonCreateInput = {
    id?: string;
    title: string;
    order?: number;
    arvanVideoId?: string | null;
    status?: $Enums.LessonStatus;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutCourseLessonsInput;
};
export type CourseLessonUncheckedCreateInput = {
    id?: string;
    productId: string;
    title: string;
    order?: number;
    arvanVideoId?: string | null;
    status?: $Enums.LessonStatus;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseLessonUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutCourseLessonsNestedInput;
};
export type CourseLessonUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseLessonCreateManyInput = {
    id?: string;
    productId: string;
    title: string;
    order?: number;
    arvanVideoId?: string | null;
    status?: $Enums.LessonStatus;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseLessonUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseLessonUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseLessonListRelationFilter = {
    every?: Prisma.CourseLessonWhereInput;
    some?: Prisma.CourseLessonWhereInput;
    none?: Prisma.CourseLessonWhereInput;
};
export type CourseLessonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourseLessonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    arvanVideoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseLessonAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
};
export type CourseLessonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    arvanVideoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseLessonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    arvanVideoId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseLessonSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
};
export type CourseLessonCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CourseLessonCreateWithoutProductInput, Prisma.CourseLessonUncheckedCreateWithoutProductInput> | Prisma.CourseLessonCreateWithoutProductInput[] | Prisma.CourseLessonUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseLessonCreateOrConnectWithoutProductInput | Prisma.CourseLessonCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CourseLessonCreateManyProductInputEnvelope;
    connect?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
};
export type CourseLessonUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CourseLessonCreateWithoutProductInput, Prisma.CourseLessonUncheckedCreateWithoutProductInput> | Prisma.CourseLessonCreateWithoutProductInput[] | Prisma.CourseLessonUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseLessonCreateOrConnectWithoutProductInput | Prisma.CourseLessonCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CourseLessonCreateManyProductInputEnvelope;
    connect?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
};
export type CourseLessonUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CourseLessonCreateWithoutProductInput, Prisma.CourseLessonUncheckedCreateWithoutProductInput> | Prisma.CourseLessonCreateWithoutProductInput[] | Prisma.CourseLessonUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseLessonCreateOrConnectWithoutProductInput | Prisma.CourseLessonCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CourseLessonUpsertWithWhereUniqueWithoutProductInput | Prisma.CourseLessonUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CourseLessonCreateManyProductInputEnvelope;
    set?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    disconnect?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    delete?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    connect?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    update?: Prisma.CourseLessonUpdateWithWhereUniqueWithoutProductInput | Prisma.CourseLessonUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CourseLessonUpdateManyWithWhereWithoutProductInput | Prisma.CourseLessonUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CourseLessonScalarWhereInput | Prisma.CourseLessonScalarWhereInput[];
};
export type CourseLessonUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CourseLessonCreateWithoutProductInput, Prisma.CourseLessonUncheckedCreateWithoutProductInput> | Prisma.CourseLessonCreateWithoutProductInput[] | Prisma.CourseLessonUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CourseLessonCreateOrConnectWithoutProductInput | Prisma.CourseLessonCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CourseLessonUpsertWithWhereUniqueWithoutProductInput | Prisma.CourseLessonUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CourseLessonCreateManyProductInputEnvelope;
    set?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    disconnect?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    delete?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    connect?: Prisma.CourseLessonWhereUniqueInput | Prisma.CourseLessonWhereUniqueInput[];
    update?: Prisma.CourseLessonUpdateWithWhereUniqueWithoutProductInput | Prisma.CourseLessonUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CourseLessonUpdateManyWithWhereWithoutProductInput | Prisma.CourseLessonUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CourseLessonScalarWhereInput | Prisma.CourseLessonScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumLessonStatusFieldUpdateOperationsInput = {
    set?: $Enums.LessonStatus;
};
export type CourseLessonCreateWithoutProductInput = {
    id?: string;
    title: string;
    order?: number;
    arvanVideoId?: string | null;
    status?: $Enums.LessonStatus;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseLessonUncheckedCreateWithoutProductInput = {
    id?: string;
    title: string;
    order?: number;
    arvanVideoId?: string | null;
    status?: $Enums.LessonStatus;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseLessonCreateOrConnectWithoutProductInput = {
    where: Prisma.CourseLessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseLessonCreateWithoutProductInput, Prisma.CourseLessonUncheckedCreateWithoutProductInput>;
};
export type CourseLessonCreateManyProductInputEnvelope = {
    data: Prisma.CourseLessonCreateManyProductInput | Prisma.CourseLessonCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type CourseLessonUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.CourseLessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseLessonUpdateWithoutProductInput, Prisma.CourseLessonUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.CourseLessonCreateWithoutProductInput, Prisma.CourseLessonUncheckedCreateWithoutProductInput>;
};
export type CourseLessonUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.CourseLessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseLessonUpdateWithoutProductInput, Prisma.CourseLessonUncheckedUpdateWithoutProductInput>;
};
export type CourseLessonUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.CourseLessonScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseLessonUpdateManyMutationInput, Prisma.CourseLessonUncheckedUpdateManyWithoutProductInput>;
};
export type CourseLessonScalarWhereInput = {
    AND?: Prisma.CourseLessonScalarWhereInput | Prisma.CourseLessonScalarWhereInput[];
    OR?: Prisma.CourseLessonScalarWhereInput[];
    NOT?: Prisma.CourseLessonScalarWhereInput | Prisma.CourseLessonScalarWhereInput[];
    id?: Prisma.StringFilter<"CourseLesson"> | string;
    productId?: Prisma.StringFilter<"CourseLesson"> | string;
    title?: Prisma.StringFilter<"CourseLesson"> | string;
    order?: Prisma.IntFilter<"CourseLesson"> | number;
    arvanVideoId?: Prisma.StringNullableFilter<"CourseLesson"> | string | null;
    status?: Prisma.EnumLessonStatusFilter<"CourseLesson"> | $Enums.LessonStatus;
    durationSeconds?: Prisma.IntNullableFilter<"CourseLesson"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"CourseLesson"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CourseLesson"> | Date | string;
};
export type CourseLessonCreateManyProductInput = {
    id?: string;
    title: string;
    order?: number;
    arvanVideoId?: string | null;
    status?: $Enums.LessonStatus;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseLessonUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseLessonUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseLessonUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    arvanVideoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseLessonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    title?: boolean;
    order?: boolean;
    arvanVideoId?: boolean;
    status?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseLesson"]>;
export type CourseLessonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    title?: boolean;
    order?: boolean;
    arvanVideoId?: boolean;
    status?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseLesson"]>;
export type CourseLessonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    title?: boolean;
    order?: boolean;
    arvanVideoId?: boolean;
    status?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["courseLesson"]>;
export type CourseLessonSelectScalar = {
    id?: boolean;
    productId?: boolean;
    title?: boolean;
    order?: boolean;
    arvanVideoId?: boolean;
    status?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CourseLessonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "title" | "order" | "arvanVideoId" | "status" | "durationSeconds" | "createdAt" | "updatedAt", ExtArgs["result"]["courseLesson"]>;
export type CourseLessonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type CourseLessonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type CourseLessonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $CourseLessonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CourseLesson";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        title: string;
        order: number;
        arvanVideoId: string | null;
        status: $Enums.LessonStatus;
        durationSeconds: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["courseLesson"]>;
    composites: {};
};
export type CourseLessonGetPayload<S extends boolean | null | undefined | CourseLessonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload, S>;
export type CourseLessonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseLessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseLessonCountAggregateInputType | true;
};
export interface CourseLessonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CourseLesson'];
        meta: {
            name: 'CourseLesson';
        };
    };
    findUnique<T extends CourseLessonFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseLessonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourseLessonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseLessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourseLessonFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseLessonFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourseLessonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseLessonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourseLessonFindManyArgs>(args?: Prisma.SelectSubset<T, CourseLessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourseLessonCreateArgs>(args: Prisma.SelectSubset<T, CourseLessonCreateArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourseLessonCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseLessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourseLessonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourseLessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourseLessonDeleteArgs>(args: Prisma.SelectSubset<T, CourseLessonDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourseLessonUpdateArgs>(args: Prisma.SelectSubset<T, CourseLessonUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourseLessonDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseLessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourseLessonUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseLessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourseLessonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourseLessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourseLessonUpsertArgs>(args: Prisma.SelectSubset<T, CourseLessonUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseLessonClient<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourseLessonCountArgs>(args?: Prisma.Subset<T, CourseLessonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseLessonCountAggregateOutputType> : number>;
    aggregate<T extends CourseLessonAggregateArgs>(args: Prisma.Subset<T, CourseLessonAggregateArgs>): Prisma.PrismaPromise<GetCourseLessonAggregateType<T>>;
    groupBy<T extends CourseLessonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseLessonGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseLessonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseLessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourseLessonFieldRefs;
}
export interface Prisma__CourseLessonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourseLessonFieldRefs {
    readonly id: Prisma.FieldRef<"CourseLesson", 'String'>;
    readonly productId: Prisma.FieldRef<"CourseLesson", 'String'>;
    readonly title: Prisma.FieldRef<"CourseLesson", 'String'>;
    readonly order: Prisma.FieldRef<"CourseLesson", 'Int'>;
    readonly arvanVideoId: Prisma.FieldRef<"CourseLesson", 'String'>;
    readonly status: Prisma.FieldRef<"CourseLesson", 'LessonStatus'>;
    readonly durationSeconds: Prisma.FieldRef<"CourseLesson", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CourseLesson", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CourseLesson", 'DateTime'>;
}
export type CourseLessonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where: Prisma.CourseLessonWhereUniqueInput;
};
export type CourseLessonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where: Prisma.CourseLessonWhereUniqueInput;
};
export type CourseLessonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where?: Prisma.CourseLessonWhereInput;
    orderBy?: Prisma.CourseLessonOrderByWithRelationInput | Prisma.CourseLessonOrderByWithRelationInput[];
    cursor?: Prisma.CourseLessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseLessonScalarFieldEnum | Prisma.CourseLessonScalarFieldEnum[];
};
export type CourseLessonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where?: Prisma.CourseLessonWhereInput;
    orderBy?: Prisma.CourseLessonOrderByWithRelationInput | Prisma.CourseLessonOrderByWithRelationInput[];
    cursor?: Prisma.CourseLessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseLessonScalarFieldEnum | Prisma.CourseLessonScalarFieldEnum[];
};
export type CourseLessonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where?: Prisma.CourseLessonWhereInput;
    orderBy?: Prisma.CourseLessonOrderByWithRelationInput | Prisma.CourseLessonOrderByWithRelationInput[];
    cursor?: Prisma.CourseLessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseLessonScalarFieldEnum | Prisma.CourseLessonScalarFieldEnum[];
};
export type CourseLessonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseLessonCreateInput, Prisma.CourseLessonUncheckedCreateInput>;
};
export type CourseLessonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourseLessonCreateManyInput | Prisma.CourseLessonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseLessonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    data: Prisma.CourseLessonCreateManyInput | Prisma.CourseLessonCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourseLessonIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourseLessonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseLessonUpdateInput, Prisma.CourseLessonUncheckedUpdateInput>;
    where: Prisma.CourseLessonWhereUniqueInput;
};
export type CourseLessonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourseLessonUpdateManyMutationInput, Prisma.CourseLessonUncheckedUpdateManyInput>;
    where?: Prisma.CourseLessonWhereInput;
    limit?: number;
};
export type CourseLessonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseLessonUpdateManyMutationInput, Prisma.CourseLessonUncheckedUpdateManyInput>;
    where?: Prisma.CourseLessonWhereInput;
    limit?: number;
    include?: Prisma.CourseLessonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourseLessonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where: Prisma.CourseLessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseLessonCreateInput, Prisma.CourseLessonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourseLessonUpdateInput, Prisma.CourseLessonUncheckedUpdateInput>;
};
export type CourseLessonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
    where: Prisma.CourseLessonWhereUniqueInput;
};
export type CourseLessonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseLessonWhereInput;
    limit?: number;
};
export type CourseLessonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseLessonSelect<ExtArgs> | null;
    omit?: Prisma.CourseLessonOmit<ExtArgs> | null;
    include?: Prisma.CourseLessonInclude<ExtArgs> | null;
};
