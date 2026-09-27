"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import {
  ApiError,
  courseLessonsApi,
  productsApi,
  uploadsApi,
  type CourseLesson,
  type Product,
} from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Input, Label, Textarea } from "@/components/ui";

const LESSON_STATUS_LABELS: Record<CourseLesson["status"], string> = {
  PENDING: "⏳ در صف پردازش",
  PROCESSING: "⏳ در حال پردازش",
  READY: "✅ آماده پخش",
  FAILED: "❌ خطا در پردازش",
};

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

  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  const [lessons, setLessons] = useState<CourseLesson[]>([]);
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonUploading, setLessonUploading] = useState(false);
  const [lessonError, setLessonError] = useState<string | null>(null);

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

  async function loadLessons(productId: string) {
    const data = await courseLessonsApi.list(productId);
    setLessons(data);
  }

  async function toggleLessons(productId: string) {
    if (expandedProductId === productId) {
      setExpandedProductId(null);
      return;
    }
    setLessonError(null);
    setLessonTitle("");
    await loadLessons(productId);
    setExpandedProductId(productId);
  }

  async function handleLessonUpload(e: FormEvent, productId: string) {
    e.preventDefault();
    const fileInput = (e.target as HTMLFormElement).elements.namedItem("video") as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) {
      setLessonError("یک فایل ویدیو انتخاب کنید");
      return;
    }
    setLessonError(null);
    setLessonUploading(true);
    try {
      await courseLessonsApi.upload(productId, lessonTitle, lessons.length, file);
      setLessonTitle("");
      fileInput.value = "";
      await loadLessons(productId);
    } catch (err) {
      setLessonError(err instanceof ApiError ? err.message : "آپلود ویدیو انجام نشد");
    } finally {
      setLessonUploading(false);
    }
  }

  async function handleLessonDelete(productId: string, lessonId: string) {
    await courseLessonsApi.remove(productId, lessonId);
    await loadLessons(productId);
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
            <Card key={p.id} className="!p-4">
              <div className="flex items-center justify-between">
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
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleLessons(p.id)}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold text-brand-blue transition hover:bg-brand-blue/10"
                  >
                    🎓 جلسات دوره
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition ${expandedProductId === p.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="rounded-lg p-2 text-brand-muted transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {expandedProductId === p.id && (
                <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                  {lessons.length === 0 ? (
                    <p className="text-xs text-brand-muted">هنوز جلسه‌ای برای این محصول اضافه نشده است.</p>
                  ) : (
                    <div className="space-y-2">
                      {lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between rounded-xl bg-brand-bg-cool p-3 text-xs"
                        >
                          <div>
                            <p className="font-bold text-brand-ink">{lesson.title}</p>
                            <p className="mt-0.5 text-brand-muted">{LESSON_STATUS_LABELS[lesson.status]}</p>
                          </div>
                          <button
                            onClick={() => handleLessonDelete(p.id, lesson.id)}
                            className="rounded-lg p-1.5 text-brand-muted transition hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <form
                    onSubmit={(e) => handleLessonUpload(e, p.id)}
                    className="grid gap-2 rounded-xl border border-dashed border-slate-200 p-3 sm:grid-cols-[1fr_1fr_auto]"
                  >
                    <Input
                      value={lessonTitle}
                      onChange={(e) => setLessonTitle(e.target.value)}
                      placeholder={`عنوان جلسه ${lessons.length + 1}`}
                      required
                    />
                    <input
                      type="file"
                      name="video"
                      accept="video/mp4,video/quicktime,video/x-matroska,video/webm"
                      className="text-xs text-brand-muted"
                    />
                    <Button type="submit" disabled={lessonUploading} className="whitespace-nowrap">
                      {lessonUploading ? "در حال آپلود..." : "افزودن جلسه"}
                    </Button>
                  </form>
                  <ErrorText>{lessonError}</ErrorText>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
