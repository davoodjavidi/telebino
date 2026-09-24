"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { ApiError, botsApi, type BotSummary } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Input, Label } from "@/components/ui";

export default function BotsPage() {
  const [bots, setBots] = useState<BotSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function load() {
    botsApi
      .list()
      .then(setBots)
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      await botsApi.create(token);
      setToken("");
      setShowForm(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "افزودن ربات انجام نشد");
    } finally {
      setSaving(false);
    }
  }

  async function handleToggle(bot: BotSummary) {
    await botsApi.toggle(bot.id, !bot.isActive);
    load();
  }

  async function handleDelete(id: string) {
    await botsApi.remove(id);
    load();
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <PageHeader
        eyebrow="اتصال تلگرام"
        title="ربات‌ها"
        description="توکن ربات را از BotFather بگیرید و اینجا وصل کنید"
        action={
          <Button onClick={() => setShowForm((v) => !v)}>
            <span className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              افزودن ربات
            </span>
          </Button>
        }
      />

      {showForm && (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>راهنمای دریافت توکن</Label>
              <ol className="list-inside list-decimal space-y-1 text-xs leading-6 text-brand-muted">
                <li>در تلگرام به بات @BotFather پیام بدهید</li>
                <li>دستور /newbot را بفرستید و اسم دلخواه ربات را وارد کنید</li>
                <li>توکنی که برایتان می‌فرستد را کپی کرده و اینجا وارد کنید</li>
              </ol>
            </div>
            <div>
              <Label>توکن ربات</Label>
              <Input
                value={token}
                onChange={(e) => setToken(e.target.value)}
                dir="ltr"
                placeholder="123456789:AAExampleTokenFromBotFather"
                required
              />
            </div>
            <ErrorText>{error}</ErrorText>
            <div className="flex gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? "در حال بررسی توکن..." : "اتصال ربات"}
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
        ) : bots.length === 0 ? (
          <EmptyState text="هنوز رباتی وصل نشده است." />
        ) : (
          bots.map((bot) => (
            <Card key={bot.id} className="flex items-center justify-between !p-4">
              <div>
                <p className="text-sm font-extrabold text-brand-ink" dir="ltr">
                  @{bot.username}
                </p>
                <button
                  onClick={() => handleToggle(bot)}
                  className={`mt-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    bot.isActive ? "bg-brand-teal/10 text-brand-teal" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {bot.isActive ? "فعال" : "غیرفعال"}
                </button>
              </div>
              <button
                onClick={() => handleDelete(bot.id)}
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
