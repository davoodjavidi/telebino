"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { ApiError, productsApi, uploadsApi, type Product } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Input, Label, Textarea } from "@/components/ui";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function load() {
    productsApi
      .list()
      .then(setProducts)
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError(null);
    setUploading(true);
    try {
      const { url } = await uploadsApi.uploadImage(file);
      setImageUrl(url);
    } catch (err) {
      setUploadError(err instanceof ApiError ? err.message : "آپلود تصویر انجام نشد");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      await productsApi.create({
        name,
        description: description || undefined,
        price: price ? Number(price) : undefined,
        imageUrl: imageUrl || undefined,
      });
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
      setShowForm(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ذخیره‌سازی انجام نشد");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    await productsApi.remove(id);
    load();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <PageHeader
        eyebrow="کاتالوگ"
        title="محصولات"
        description="محصولات یا خدماتی که در ربات نمایش داده می‌شوند"
        action={
          <Button onClick={() => setShowForm((v) => !v)}>
            <span className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              افزودن محصول
            </span>
          </Button>
        }
      />

      {showForm && (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>نام محصول</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label>قیمت (تومان)</Label>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  dir="ltr"
                />
              </div>
            </div>
            <div>
              <Label>توضیحات</Label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
            </div>
            <div>
              <Label>تصویر محصول</Label>
              <Input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} />
              {uploading && <p className="mt-1 text-xs text-brand-muted">در حال آپلود...</p>}
              <ErrorText>{uploadError}</ErrorText>
              {imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt="پیش‌نمایش"
                  className="mt-2 h-20 w-20 rounded-xl border border-slate-200 object-cover"
                />
              )}
            </div>
            <ErrorText>{error}</ErrorText>
            <div className="flex gap-2">
              <Button type="submit" disabled={saving || uploading}>
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
        ) : products.length === 0 ? (
          <EmptyState text="هنوز محصولی اضافه نشده است." />
        ) : (
          products.map((p) => (
            <Card key={p.id} className="flex items-center justify-between !p-4">
              <div className="flex items-center gap-3">
                {p.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-12 w-12 rounded-lg border border-slate-200 object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-extrabold text-brand-ink">{p.name}</p>
                  {p.description && <p className="mt-0.5 text-xs text-brand-muted">{p.description}</p>}
                  {p.price && (
                    <p className="mt-1 text-xs font-bold text-brand-blue">
                      {p.price.toLocaleString("fa-IR")} تومان
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDelete(p.id)}
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
