import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    price: number | null;
};
export type ProductSumAggregateOutputType = {
    price: number | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    businessId: number;
    name: number;
    description: number;
    price: number;
    imageUrl: number;
    attributes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    price?: true;
};
export type ProductSumAggregateInputType = {
    price?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    description?: true;
    price?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    description?: true;
    price?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    description?: true;
    price?: true;
    imageUrl?: true;
    attributes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    businessId: string;
    name: string;
    description: string | null;
    price: number | null;
    imageUrl: string | null;
    attributes: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    businessId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.IntNullableFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    attributes?: Prisma.JsonNullableFilter<"Product">;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    lookupEntries?: Prisma.LookupEntryListRelationFilter;
    courseLessons?: Prisma.CourseLessonListRelationFilter;
    courseAccess?: Prisma.CourseAccessListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    attributes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    lookupEntries?: Prisma.LookupEntryOrderByRelationAggregateInput;
    courseLessons?: Prisma.CourseLessonOrderByRelationAggregateInput;
    courseAccess?: Prisma.CourseAccessOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    businessId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.IntNullableFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    attributes?: Prisma.JsonNullableFilter<"Product">;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    lookupEntries?: Prisma.LookupEntryListRelationFilter;
    courseLessons?: Prisma.CourseLessonListRelationFilter;
    courseAccess?: Prisma.CourseAccessListRelationFilter;
}, "id">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    attributes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    price?: Prisma.IntNullableWithAggregatesFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    attributes?: Prisma.JsonNullableWithAggregatesFilter<"Product">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutProductsInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutProductInput;
    courseLessons?: Prisma.CourseLessonCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutProductInput;
    courseLessons?: Prisma.CourseLessonUncheckedCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutProductsNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutProductNestedInput;
    courseLessons?: Prisma.CourseLessonUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutProductNestedInput;
    courseLessons?: Prisma.CourseLessonUncheckedUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductNullableScalarRelationFilter = {
    is?: Prisma.ProductWhereInput | null;
    isNot?: Prisma.ProductWhereInput | null;
};
export type ProductCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBusinessInput, Prisma.ProductUncheckedCreateWithoutBusinessInput> | Prisma.ProductCreateWithoutBusinessInput[] | Prisma.ProductUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBusinessInput | Prisma.ProductCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.ProductCreateManyBusinessInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBusinessInput, Prisma.ProductUncheckedCreateWithoutBusinessInput> | Prisma.ProductCreateWithoutBusinessInput[] | Prisma.ProductUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBusinessInput | Prisma.ProductCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.ProductCreateManyBusinessInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBusinessInput, Prisma.ProductUncheckedCreateWithoutBusinessInput> | Prisma.ProductCreateWithoutBusinessInput[] | Prisma.ProductUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBusinessInput | Prisma.ProductCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutBusinessInput | Prisma.ProductUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.ProductCreateManyBusinessInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutBusinessInput | Prisma.ProductUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutBusinessInput | Prisma.ProductUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBusinessInput, Prisma.ProductUncheckedCreateWithoutBusinessInput> | Prisma.ProductCreateWithoutBusinessInput[] | Prisma.ProductUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBusinessInput | Prisma.ProductCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutBusinessInput | Prisma.ProductUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.ProductCreateManyBusinessInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutBusinessInput | Prisma.ProductUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutBusinessInput | Prisma.ProductUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductCreateNestedOneWithoutCourseLessonsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCourseLessonsInput, Prisma.ProductUncheckedCreateWithoutCourseLessonsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCourseLessonsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutCourseLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCourseLessonsInput, Prisma.ProductUncheckedCreateWithoutCourseLessonsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCourseLessonsInput;
    upsert?: Prisma.ProductUpsertWithoutCourseLessonsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutCourseLessonsInput, Prisma.ProductUpdateWithoutCourseLessonsInput>, Prisma.ProductUncheckedUpdateWithoutCourseLessonsInput>;
};
export type ProductCreateNestedOneWithoutCourseAccessInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCourseAccessInput, Prisma.ProductUncheckedCreateWithoutCourseAccessInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCourseAccessInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutCourseAccessNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCourseAccessInput, Prisma.ProductUncheckedCreateWithoutCourseAccessInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCourseAccessInput;
    upsert?: Prisma.ProductUpsertWithoutCourseAccessInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutCourseAccessInput, Prisma.ProductUpdateWithoutCourseAccessInput>, Prisma.ProductUncheckedUpdateWithoutCourseAccessInput>;
};
export type ProductCreateNestedOneWithoutLookupEntriesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutLookupEntriesInput, Prisma.ProductUncheckedCreateWithoutLookupEntriesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutLookupEntriesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutLookupEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutLookupEntriesInput, Prisma.ProductUncheckedCreateWithoutLookupEntriesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutLookupEntriesInput;
    upsert?: Prisma.ProductUpsertWithoutLookupEntriesInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutLookupEntriesInput, Prisma.ProductUpdateWithoutLookupEntriesInput>, Prisma.ProductUncheckedUpdateWithoutLookupEntriesInput>;
};
export type ProductCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutProductInput;
    courseLessons?: Prisma.CourseLessonCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutProductInput;
    courseLessons?: Prisma.CourseLessonUncheckedCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutBusinessInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBusinessInput, Prisma.ProductUncheckedCreateWithoutBusinessInput>;
};
export type ProductCreateManyBusinessInputEnvelope = {
    data: Prisma.ProductCreateManyBusinessInput | Prisma.ProductCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutBusinessInput, Prisma.ProductUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBusinessInput, Prisma.ProductUncheckedCreateWithoutBusinessInput>;
};
export type ProductUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutBusinessInput, Prisma.ProductUncheckedUpdateWithoutBusinessInput>;
};
export type ProductUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutBusinessInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    businessId?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    price?: Prisma.IntNullableFilter<"Product"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"Product"> | string | null;
    attributes?: Prisma.JsonNullableFilter<"Product">;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateWithoutCourseLessonsInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutProductsInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCourseLessonsInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCourseLessonsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCourseLessonsInput, Prisma.ProductUncheckedCreateWithoutCourseLessonsInput>;
};
export type ProductUpsertWithoutCourseLessonsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCourseLessonsInput, Prisma.ProductUncheckedUpdateWithoutCourseLessonsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCourseLessonsInput, Prisma.ProductUncheckedCreateWithoutCourseLessonsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutCourseLessonsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCourseLessonsInput, Prisma.ProductUncheckedUpdateWithoutCourseLessonsInput>;
};
export type ProductUpdateWithoutCourseLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutProductsNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCourseLessonsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutCourseAccessInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutProductsInput;
    lookupEntries?: Prisma.LookupEntryCreateNestedManyWithoutProductInput;
    courseLessons?: Prisma.CourseLessonCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCourseAccessInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedCreateNestedManyWithoutProductInput;
    courseLessons?: Prisma.CourseLessonUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCourseAccessInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCourseAccessInput, Prisma.ProductUncheckedCreateWithoutCourseAccessInput>;
};
export type ProductUpsertWithoutCourseAccessInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCourseAccessInput, Prisma.ProductUncheckedUpdateWithoutCourseAccessInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCourseAccessInput, Prisma.ProductUncheckedCreateWithoutCourseAccessInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutCourseAccessInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCourseAccessInput, Prisma.ProductUncheckedUpdateWithoutCourseAccessInput>;
};
export type ProductUpdateWithoutCourseAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutProductsNestedInput;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutProductNestedInput;
    courseLessons?: Prisma.CourseLessonUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCourseAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutProductNestedInput;
    courseLessons?: Prisma.CourseLessonUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutLookupEntriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutProductsInput;
    courseLessons?: Prisma.CourseLessonCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutLookupEntriesInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    courseLessons?: Prisma.CourseLessonUncheckedCreateNestedManyWithoutProductInput;
    courseAccess?: Prisma.CourseAccessUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutLookupEntriesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutLookupEntriesInput, Prisma.ProductUncheckedCreateWithoutLookupEntriesInput>;
};
export type ProductUpsertWithoutLookupEntriesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutLookupEntriesInput, Prisma.ProductUncheckedUpdateWithoutLookupEntriesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutLookupEntriesInput, Prisma.ProductUncheckedCreateWithoutLookupEntriesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutLookupEntriesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutLookupEntriesInput, Prisma.ProductUncheckedUpdateWithoutLookupEntriesInput>;
};
export type ProductUpdateWithoutLookupEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutProductsNestedInput;
    courseLessons?: Prisma.CourseLessonUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutLookupEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courseLessons?: Prisma.CourseLessonUncheckedUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    price?: number | null;
    imageUrl?: string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lookupEntries?: Prisma.LookupEntryUpdateManyWithoutProductNestedInput;
    courseLessons?: Prisma.CourseLessonUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lookupEntries?: Prisma.LookupEntryUncheckedUpdateManyWithoutProductNestedInput;
    courseLessons?: Prisma.CourseLessonUncheckedUpdateManyWithoutProductNestedInput;
    courseAccess?: Prisma.CourseAccessUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCountOutputType = {
    lookupEntries: number;
    courseLessons: number;
    courseAccess: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lookupEntries?: boolean | ProductCountOutputTypeCountLookupEntriesArgs;
    courseLessons?: boolean | ProductCountOutputTypeCountCourseLessonsArgs;
    courseAccess?: boolean | ProductCountOutputTypeCountCourseAccessArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountLookupEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LookupEntryWhereInput;
};
export type ProductCountOutputTypeCountCourseLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseLessonWhereInput;
};
export type ProductCountOutputTypeCountCourseAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseAccessWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    imageUrl?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    lookupEntries?: boolean | Prisma.Product$lookupEntriesArgs<ExtArgs>;
    courseLessons?: boolean | Prisma.Product$courseLessonsArgs<ExtArgs>;
    courseAccess?: boolean | Prisma.Product$courseAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    imageUrl?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    imageUrl?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    imageUrl?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "name" | "description" | "price" | "imageUrl" | "attributes" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    lookupEntries?: boolean | Prisma.Product$lookupEntriesArgs<ExtArgs>;
    courseLessons?: boolean | Prisma.Product$courseLessonsArgs<ExtArgs>;
    courseAccess?: boolean | Prisma.Product$courseAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        lookupEntries: Prisma.$LookupEntryPayload<ExtArgs>[];
        courseLessons: Prisma.$CourseLessonPayload<ExtArgs>[];
        courseAccess: Prisma.$CourseAccessPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        name: string;
        description: string | null;
        price: number | null;
        imageUrl: string | null;
        attributes: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lookupEntries<T extends Prisma.Product$lookupEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$lookupEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LookupEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courseLessons<T extends Prisma.Product$courseLessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$courseLessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseLessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courseAccess<T extends Prisma.Product$courseAccessArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$courseAccessArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourseAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly businessId: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly price: Prisma.FieldRef<"Product", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"Product", 'String'>;
    readonly attributes: Prisma.FieldRef<"Product", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$lookupEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Product$courseLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Product$courseAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
