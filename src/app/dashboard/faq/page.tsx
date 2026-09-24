"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { ApiError, faqApi, type FaqEntry } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Input, Label, Textarea } from "@/components/ui";

export default function FaqPage() {
  const [entries, setEntries] = useState<FaqEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [alternatePhrases, setAlternatePhrases] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function load() {
    faqApi
      .list()
      .then(setEntries)
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      await faqApi.create({
        question,
        answer,
        alternatePhrases: alternatePhrases
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      });
      setQuestion("");
      setAlternatePhrases("");
      setAnswer("");
      setShowForm(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ذخیره‌سازی انجام نشد");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    await faqApi.remove(id);
    load();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <PageHeader
        eyebrow="پاسخ‌گویی خودکار"
        title="سوالات متداول"
        description="سوال‌هایی که ربات با تطبیق فازی متن (بدون هوش مصنوعی) پاسخ می‌دهد"
        action={
          <Button onClick={() => setShowForm((v) => !v)}>
            <span className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              افزودن سوال
            </span>
          </Button>
        }
      />

      {showForm && (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>سوال</Label>
              <Input value={question} onChange={(e) => setQuestion(e.target.value)} required />
            </div>
            <div>
              <Label>عبارات جایگزین (با کاما جدا کنید)</Label>
              <Input
                value={alternatePhrases}
                onChange={(e) => setAlternatePhrases(e.target.value)}
                placeholder="کی بازید, چه ساعتی باز هستید"
              />
            </div>
            <div>
              <Label>پاسخ</Label>
              <Textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={3} required />
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
        ) : entries.length === 0 ? (
          <EmptyState text="هنوز سوال متداولی اضافه نشده است." />
        ) : (
          entries.map((f) => (
            <Card key={f.id} className="flex items-start justify-between !p-4">
              <div>
                <p className="text-sm font-extrabold text-brand-ink">{f.question}</p>
                {f.alternatePhrases.length > 0 && (
                  <p className="mt-0.5 text-xs text-brand-muted">
                    مترادف: {f.alternatePhrases.join("، ")}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-brand-ink">{f.answer}</p>
              </div>
              <button
                onClick={() => handleDelete(f.id)}
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
