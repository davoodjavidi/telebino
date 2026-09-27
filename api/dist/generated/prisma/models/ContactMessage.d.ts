import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactMessageModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactMessagePayload>;
export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null;
    _min: ContactMessageMinAggregateOutputType | null;
    _max: ContactMessageMaxAggregateOutputType | null;
};
export type ContactMessageMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    topic: string | null;
    message: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type ContactMessageMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    topic: string | null;
    message: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type ContactMessageCountAggregateOutputType = {
    id: number;
    name: number;
    phone: number;
    email: number;
    topic: number;
    message: number;
    isRead: number;
    createdAt: number;
    _all: number;
};
export type ContactMessageMinAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    topic?: true;
    message?: true;
    isRead?: true;
    createdAt?: true;
};
export type ContactMessageMaxAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    topic?: true;
    message?: true;
    isRead?: true;
    createdAt?: true;
};
export type ContactMessageCountAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    email?: true;
    topic?: true;
    message?: true;
    isRead?: true;
    createdAt?: true;
    _all?: true;
};
export type ContactMessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactMessageWhereInput;
    orderBy?: Prisma.ContactMessageOrderByWithRelationInput | Prisma.ContactMessageOrderByWithRelationInput[];
    cursor?: Prisma.ContactMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactMessageCountAggregateInputType;
    _min?: ContactMessageMinAggregateInputType;
    _max?: ContactMessageMaxAggregateInputType;
};
export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
    [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContactMessage[P]> : Prisma.GetScalarType<T[P], AggregateContactMessage[P]>;
};
export type ContactMessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactMessageWhereInput;
    orderBy?: Prisma.ContactMessageOrderByWithAggregationInput | Prisma.ContactMessageOrderByWithAggregationInput[];
    by: Prisma.ContactMessageScalarFieldEnum[] | Prisma.ContactMessageScalarFieldEnum;
    having?: Prisma.ContactMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactMessageCountAggregateInputType | true;
    _min?: ContactMessageMinAggregateInputType;
    _max?: ContactMessageMaxAggregateInputType;
};
export type ContactMessageGroupByOutputType = {
    id: string;
    name: string;
    phone: string;
    email: string | null;
    topic: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    _count: ContactMessageCountAggregateOutputType | null;
    _min: ContactMessageMinAggregateOutputType | null;
    _max: ContactMessageMaxAggregateOutputType | null;
};
export type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactMessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactMessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactMessageGroupByOutputType[P]>;
}>>;
export type ContactMessageWhereInput = {
    AND?: Prisma.ContactMessageWhereInput | Prisma.ContactMessageWhereInput[];
    OR?: Prisma.ContactMessageWhereInput[];
    NOT?: Prisma.ContactMessageWhereInput | Prisma.ContactMessageWhereInput[];
    id?: Prisma.StringFilter<"ContactMessage"> | string;
    name?: Prisma.StringFilter<"ContactMessage"> | string;
    phone?: Prisma.StringFilter<"ContactMessage"> | string;
    email?: Prisma.StringNullableFilter<"ContactMessage"> | string | null;
    topic?: Prisma.StringFilter<"ContactMessage"> | string;
    message?: Prisma.StringFilter<"ContactMessage"> | string;
    isRead?: Prisma.BoolFilter<"ContactMessage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContactMessage"> | Date | string;
};
export type ContactMessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    topic?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ContactMessageWhereInput | Prisma.ContactMessageWhereInput[];
    OR?: Prisma.ContactMessageWhereInput[];
    NOT?: Prisma.ContactMessageWhereInput | Prisma.ContactMessageWhereInput[];
    name?: Prisma.StringFilter<"ContactMessage"> | string;
    phone?: Prisma.StringFilter<"ContactMessage"> | string;
    email?: Prisma.StringNullableFilter<"ContactMessage"> | string | null;
    topic?: Prisma.StringFilter<"ContactMessage"> | string;
    message?: Prisma.StringFilter<"ContactMessage"> | string;
    isRead?: Prisma.BoolFilter<"ContactMessage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContactMessage"> | Date | string;
}, "id">;
export type ContactMessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    topic?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ContactMessageCountOrderByAggregateInput;
    _max?: Prisma.ContactMessageMaxOrderByAggregateInput;
    _min?: Prisma.ContactMessageMinOrderByAggregateInput;
};
export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactMessageScalarWhereWithAggregatesInput | Prisma.ContactMessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactMessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactMessageScalarWhereWithAggregatesInput | Prisma.ContactMessageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContactMessage"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ContactMessage"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"ContactMessage"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"ContactMessage"> | string | null;
    topic?: Prisma.StringWithAggregatesFilter<"ContactMessage"> | string;
    message?: Prisma.StringWithAggregatesFilter<"ContactMessage"> | string;
    isRead?: Prisma.BoolWithAggregatesFilter<"ContactMessage"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string;
};
export type ContactMessageCreateInput = {
    id?: string;
    name: string;
    phone: string;
    email?: string | null;
    topic: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type ContactMessageUncheckedCreateInput = {
    id?: string;
    name: string;
    phone: string;
    email?: string | null;
    topic: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type ContactMessageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    topic?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactMessageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    topic?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactMessageCreateManyInput = {
    id?: string;
    name: string;
    phone: string;
    email?: string | null;
    topic: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type ContactMessageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    topic?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactMessageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    topic?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactMessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    topic?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactMessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    topic?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactMessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    topic?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactMessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    topic?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["contactMessage"]>;
export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    topic?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["contactMessage"]>;
export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    topic?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["contactMessage"]>;
export type ContactMessageSelectScalar = {
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    email?: boolean;
    topic?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
};
export type ContactMessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "phone" | "email" | "topic" | "message" | "isRead" | "createdAt", ExtArgs["result"]["contactMessage"]>;
export type $ContactMessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContactMessage";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        phone: string;
        email: string | null;
        topic: string;
        message: string;
        isRead: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["contactMessage"]>;
    composites: {};
};
export type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload, S>;
export type ContactMessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactMessageCountAggregateInputType | true;
};
export interface ContactMessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'];
        meta: {
            name: 'ContactMessage';
        };
    };
    findUnique<T extends ContactMessageFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactMessageFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactMessageFindManyArgs>(args?: Prisma.SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactMessageCreateArgs>(args: Prisma.SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactMessageCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactMessageDeleteArgs>(args: Prisma.SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactMessageUpdateArgs>(args: Prisma.SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactMessageUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactMessageUpsertArgs>(args: Prisma.SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactMessageClient<runtime.Types.Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactMessageCountArgs>(args?: Prisma.Subset<T, ContactMessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactMessageCountAggregateOutputType> : number>;
    aggregate<T extends ContactMessageAggregateArgs>(args: Prisma.Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>;
    groupBy<T extends ContactMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactMessageGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactMessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactMessageFieldRefs;
}
export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactMessageFieldRefs {
    readonly id: Prisma.FieldRef<"ContactMessage", 'String'>;
    readonly name: Prisma.FieldRef<"ContactMessage", 'String'>;
    readonly phone: Prisma.FieldRef<"ContactMessage", 'String'>;
    readonly email: Prisma.FieldRef<"ContactMessage", 'String'>;
    readonly topic: Prisma.FieldRef<"ContactMessage", 'String'>;
    readonly message: Prisma.FieldRef<"ContactMessage", 'String'>;
    readonly isRead: Prisma.FieldRef<"ContactMessage", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ContactMessage", 'DateTime'>;
}
export type ContactMessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where: Prisma.ContactMessageWhereUniqueInput;
};
export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where: Prisma.ContactMessageWhereUniqueInput;
};
export type ContactMessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where?: Prisma.ContactMessageWhereInput;
    orderBy?: Prisma.ContactMessageOrderByWithRelationInput | Prisma.ContactMessageOrderByWithRelationInput[];
    cursor?: Prisma.ContactMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactMessageScalarFieldEnum | Prisma.ContactMessageScalarFieldEnum[];
};
export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where?: Prisma.ContactMessageWhereInput;
    orderBy?: Prisma.ContactMessageOrderByWithRelationInput | Prisma.ContactMessageOrderByWithRelationInput[];
    cursor?: Prisma.ContactMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactMessageScalarFieldEnum | Prisma.ContactMessageScalarFieldEnum[];
};
export type ContactMessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where?: Prisma.ContactMessageWhereInput;
    orderBy?: Prisma.ContactMessageOrderByWithRelationInput | Prisma.ContactMessageOrderByWithRelationInput[];
    cursor?: Prisma.ContactMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactMessageScalarFieldEnum | Prisma.ContactMessageScalarFieldEnum[];
};
export type ContactMessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactMessageCreateInput, Prisma.ContactMessageUncheckedCreateInput>;
};
export type ContactMessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactMessageCreateManyInput | Prisma.ContactMessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    data: Prisma.ContactMessageCreateManyInput | Prisma.ContactMessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactMessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactMessageUpdateInput, Prisma.ContactMessageUncheckedUpdateInput>;
    where: Prisma.ContactMessageWhereUniqueInput;
};
export type ContactMessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactMessageUpdateManyMutationInput, Prisma.ContactMessageUncheckedUpdateManyInput>;
    where?: Prisma.ContactMessageWhereInput;
    limit?: number;
};
export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactMessageUpdateManyMutationInput, Prisma.ContactMessageUncheckedUpdateManyInput>;
    where?: Prisma.ContactMessageWhereInput;
    limit?: number;
};
export type ContactMessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where: Prisma.ContactMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactMessageCreateInput, Prisma.ContactMessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactMessageUpdateInput, Prisma.ContactMessageUncheckedUpdateInput>;
};
export type ContactMessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
    where: Prisma.ContactMessageWhereUniqueInput;
};
export type ContactMessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactMessageWhereInput;
    limit?: number;
};
export type ContactMessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactMessageSelect<ExtArgs> | null;
    omit?: Prisma.ContactMessageOmit<ExtArgs> | null;
};
