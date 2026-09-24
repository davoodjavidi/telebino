"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Plus, Search, Trash2 } from "lucide-react";
import {
  ApiError,
  lookupApi,
  productsApi,
  type LookupEntry,
  type LookupKind,
  type Product,
} from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Input, Label } from "@/components/ui";

export default function LookupPage() {
  const [tab, setTab] = useState<LookupKind>("ORDER");
  const [entries, setEntries] = useState<LookupEntry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [status, setStatus] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [note, setNote] = useState("");
  const [productId, setProductId] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function load() {
    lookupApi
      .list(tab)
      .then(setEntries)
      .finally(() => setLoading(false));
  }

  useEffect(load, [tab]);
  useEffect(() => {
    productsApi.list().then(setProducts);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      await lookupApi.create({
        kind: tab,
        identifier,
        status,
        customerPhone: customerPhone || undefined,
        note: note || undefined,
        notifyOnUpdate: true,
        productId: productId || undefined,
      });
      setIdentifier("");
      setStatus("");
      setCustomerPhone("");
      setNote("");
      setProductId("");
      setShowForm(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ذخیره‌سازی انجام نشد");
    } finally {
      setSaving(false);
    }
  }

  async function handleStatusUpdate(entry: LookupEntry, newStatus: string) {
    await lookupApi.update(entry.id, {
      kind: entry.kind,
      identifier: entry.identifier,
      status: newStatus,
      customerPhone: entry.customerPhone ?? undefined,
      note: entry.note ?? undefined,
      notifyOnUpdate: entry.notifyOnUpdate,
      productId: entry.productId ?? undefined,
    });
    load();
  }

  async function handleDelete(id: string) {
    await lookupApi.remove(id);
    load();
  }

  const filteredEntries = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return entries;
    return entries.filter((entry) =>
      [entry.identifier, entry.status, entry.customerPhone, entry.note, entry.product?.name]
        .filter(Boolean)
        .some((field) => field!.toLowerCase().includes(term)),
    );
  }, [entries, search]);

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <PageHeader
        eyebrow="پیگیری"
        title="سفارش‌ها و دسترسی‌ها"
        description="مشتری با وارد کردن این شناسه در ربات، وضعیت را می‌بیند"
        action={
          <Button onClick={() => setShowForm((v) => !v)}>
            <span className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              افزودن رکورد
            </span>
          </Button>
        }
      />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("ORDER")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${tab === "ORDER" ? "bg-brand-blue text-white" : "bg-white text-brand-muted"}`}
          >
            سفارش‌ها
          </button>
          <button
            onClick={() => setTab("ACCESS")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${tab === "ACCESS" ? "bg-brand-blue text-white" : "bg-white text-brand-muted"}`}
          >
            دسترسی‌ها
          </button>
        </div>
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو در شناسه، محصول، وضعیت یا شماره..."
            className="pr-9"
          />
        </div>
      </div>

      {showForm && (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>{tab === "ORDER" ? "شماره سفارش" : "شماره دانش‌آموزی / کد دسترسی"}</Label>
                <Input value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
              </div>
              <div>
                <Label>وضعیت</Label>
                <Input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder={tab === "ORDER" ? "در حال پردازش" : "فعال"}
                  required
                />
              </div>
              {tab === "ORDER" && (
                <div>
                  <Label>محصول (اختیاری)</Label>
                  <select
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="">— بدون محصول مشخص —</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <Label>شماره تماس مشتری (اختیاری، برای اطلاع‌رسانی)</Label>
                <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} dir="ltr" />
              </div>
              <div>
                <Label>یادداشت (اختیاری)</Label>
                <Input value={note} onChange={(e) => setNote(e.target.value)} />
              </div>
            </div>
            <ErrorText>{error}</ErrorText>
            <div className="flex gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? "در حال ذخیره..." : "ذخیره"}
              </Button>
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                انصراف
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="mt-6 space-y-3">
        {loading ? (
          <p className="text-sm text-brand-muted">در حال بارگذاری...</p>
        ) : filteredEntries.length === 0 ? (
          <EmptyState text={search ? "چیزی با این جستجو پیدا نشد." : "رکوردی ثبت نشده است."} />
        ) : (
          filteredEntries.map((entry) => (
            <Card key={entry.id} className="flex items-center justify-between !p-4">
              <div className="flex flex-1 items-center gap-3">
                {entry.product?.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={entry.product.imageUrl}
                    alt={entry.product.name}
                    className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="text-sm font-extrabold text-brand-ink" dir="ltr">
                    {entry.identifier}
                  </p>
                  {entry.product ? (
                    <p className="mt-0.5 text-xs text-brand-ink">
                      {entry.product.name}
                      {entry.product.price && (
                        <span className="text-brand-muted">
                          {" "}
                          — {entry.product.price.toLocaleString("fa-IR")} تومان
                        </span>
                      )}
                    </p>
                  ) : (
                    entry.note && <p className="mt-0.5 text-xs text-brand-muted">{entry.note}</p>
                  )}
                  <input
                    defaultValue={entry.status}
                    onBlur={(e) => e.target.value !== entry.status && handleStatusUpdate(entry, e.target.value)}
                    className="mt-1 w-full max-w-xs rounded-lg border border-transparent px-1 py-0.5 text-xs font-bold text-brand-blue outline-none transition hover:border-slate-200 focus:border-brand-blue"
                  />
                  {entry.customerPhone && (
                    <p className="mt-0.5 text-xs text-brand-muted" dir="ltr">
                      {entry.customerPhone}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDelete(entry.id)}
                className="rounded-lg p-2 text-brand-muted transition hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
