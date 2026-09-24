"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import {
  ApiError,
  formsApi,
  type FormDef,
  type FormField,
  type FormFieldType,
  type FormSubmission,
} from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Input, Label } from "@/components/ui";

const FIELD_TYPE_LABELS: Record<FormFieldType, string> = {
  TEXT: "متن کوتاه",
  NUMBER: "عدد",
  PHONE: "شماره تماس",
  SINGLE_CHOICE: "تک‌انتخابی",
  MULTI_CHOICE: "چندانتخابی",
  FILE: "فایل/عکس",
};

const emptyField = (order: number): FormField => ({
  label: "",
  type: "TEXT",
  required: true,
  options: [],
  order,
});

export default function FormsPage() {
  const [forms, setForms] = useState<FormDef[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBuilder, setShowBuilder] = useState(false);
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState<FormField[]>([emptyField(0)]);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [expandedFormId, setExpandedFormId] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);

  function load() {
    formsApi
      .list()
      .then(setForms)
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  function updateField(index: number, patch: Partial<FormField>) {
    setFields((prev) => prev.map((f, i) => (i === index ? { ...f, ...patch } : f)));
  }

  function addField() {
    setFields((prev) => [...prev, emptyField(prev.length)]);
  }

  function removeField(index: number) {
    setFields((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (fields.some((f) => !f.label.trim())) {
      setError("برای همه‌ی سوالات یک عنوان وارد کنید");
      return;
    }
    setSaving(true);
    try {
      await formsApi.create({ title, fields });
      setTitle("");
      setFields([emptyField(0)]);
      setShowBuilder(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ذخیره‌سازی انجام نشد");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    await formsApi.remove(id);
    load();
  }

  async function toggleSubmissions(formId: string) {
    if (expandedFormId === formId) {
      setExpandedFormId(null);
      return;
    }
    const data = await formsApi.submissions(formId);
    setSubmissions(data);
    setExpandedFormId(formId);
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <PageHeader
        eyebrow="فرم‌ساز"
        title="فرم‌ها"
        description="فرم ثبت‌نام یا درخواست بسازید — ربات سوالات را یکی‌یکی می‌پرسد"
        action={
          <Button onClick={() => setShowBuilder((v) => !v)}>
            <span className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              فرم جدید
            </span>
          </Button>
        }
      />

      {showBuilder && (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label>عنوان فرم</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="ثبت‌نام دوره" required />
            </div>

            <div className="space-y-3">
              <Label>سوالات فرم</Label>
              {fields.map((field, index) => (
                <div key={index} className="rounded-xl border border-slate-200 p-3">
                  <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
                    <Input
                      value={field.label}
                      onChange={(e) => updateField(index, { label: e.target.value })}
                      placeholder={`سوال ${index + 1}`}
                    />
                    <select
                      value={field.type}
                      onChange={(e) => updateField(index, { type: e.target.value as FormFieldType })}
                      className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-blue"
                    >
                      {Object.entries(FIELD_TYPE_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <label className="flex items-center gap-1.5 whitespace-nowrap px-2 text-xs font-bold text-brand-muted">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) => updateField(index, { required: e.target.checked })}
                      />
                      اجباری
                    </label>
                    <button
                      type="button"
                      onClick={() => removeField(index)}
                      disabled={fields.length === 1}
                      className="rounded-lg p-2 text-brand-muted transition hover:bg-red-50 hover:text-red-600 disabled:opacity-30"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  {(field.type === "SINGLE_CHOICE" || field.type === "MULTI_CHOICE") && (
                    <Input
                      className="mt-2"
                      value={field.options.join(", ")}
                      onChange={(e) =>
                        updateField(index, {
                          options: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        })
                      }
                      placeholder="گزینه‌ها با کاما جدا شوند"
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addField}
                className="text-xs font-bold text-brand-blue transition hover:text-brand-blue-dark"
              >
                + افزودن سوال دیگر
              </button>
            </div>

            <ErrorText>{error}</ErrorText>
            <div className="flex gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? "در حال ذخیره..." : "ذخیره فرم"}
              </Button>
              <Button type="button" variant="secondary" onClick={() => setShowBuilder(false)}>
                انصراف
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="mt-6 space-y-3">
        {loading ? (
          <p className="text-sm text-brand-muted">در حال بارگذاری...</p>
        ) : forms.length === 0 ? (
          <EmptyState text="هنوز فرمی ساخته نشده است." />
        ) : (
          forms.map((form) => (
            <Card key={form.id} className="!p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-brand-ink">{form.title}</p>
                  <p className="mt-0.5 text-xs text-brand-muted">
                    {form.fields.length} سوال · {form._count?.submissions ?? 0} پاسخ
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleSubmissions(form.id)}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold text-brand-blue transition hover:bg-brand-blue/10"
                  >
                    پاسخ‌ها
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition ${expandedFormId === form.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  <button
                    onClick={() => handleDelete(form.id)}
                    className="rounded-lg p-2 text-brand-muted transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {expandedFormId === form.id && (
                <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {submissions.length === 0 ? (
                    <p className="text-xs text-brand-muted">هنوز پاسخی ثبت نشده است.</p>
                  ) : (
                    submissions.map((s) => (
                      <div key={s.id} className="rounded-xl bg-brand-bg-cool p-3 text-xs">
                        <p className="font-bold text-brand-muted">
                          {new Date(s.createdAt).toLocaleString("fa-IR")}
                          {s.customer?.phone ? ` · ${s.customer.phone}` : ""}
                        </p>
                        <dl className="mt-1.5 space-y-1">
                          {Object.entries(s.answers).map(([label, value]) => (
                            <div key={label} className="flex gap-1.5">
                              <dt className="font-bold text-brand-ink">{label}:</dt>
                              <dd className="text-brand-muted">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))
                  )}
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
