"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ApiError, broadcastApi, subscriptionApi, type Broadcast, type SubscriptionStatus } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Button, Card, EmptyState, ErrorText, Textarea } from "@/components/ui";

const STATUS_LABELS: Record<Broadcast["status"], string> = {
  DRAFT: "پیش‌نویس",
  QUEUED: "در صف",
  SENDING: "در حال ارسال",
  DONE: "ارسال شد",
  FAILED: "ناموفق",
};

export default function BroadcastPage() {
  const [history, setHistory] = useState<Broadcast[]>([]);
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  function load() {
    broadcastApi.list().then(setHistory);
    subscriptionApi.get().then(setSubscription);
  }

  useEffect(load, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      await broadcastApi.create(text);
      setText("");
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ارسال انجام نشد");
    } finally {
      setSending(false);
    }
  }

  const allowed = subscription?.limits.broadcastAllowed ?? true;

  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <PageHeader
        eyebrow="اطلاع‌رسانی"
        title="پیام همگانی"
        description="یک پیام برای همه‌ی مشتریان ربات‌تان بفرستید"
      />

      {!allowed ? (
        <Card className="mt-6">
          <p className="text-sm text-brand-muted">
            پیام همگانی فقط در پلن‌های «کسب‌وکار» و «حرفه‌ای» فعال است. از صفحه‌ی اشتراک پلن‌تان را
            ارتقا دهید.
          </p>
        </Card>
      ) : (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="متن پیام همگانی..."
              required
            />
            <ErrorText>{error}</ErrorText>
            <Button type="submit" disabled={sending}>
              {sending ? "در حال ارسال..." : "ارسال به همه‌ی مشتریان"}
            </Button>
            <p className="text-xs text-brand-muted">
              حداکثر ۴ بار در ماه — پیام با تأخیر بین ارسال‌ها فرستاده می‌شود تا با محدودیت تلگرام مشکلی
              پیش نیاید.
            </p>
          </form>
        </Card>
      )}

      <div className="mt-8">
        <p className="mb-3 text-sm font-extrabold text-brand-ink">تاریخچه</p>
        {history.length === 0 ? (
          <EmptyState text="هنوز پیام همگانی ارسال نشده است." />
        ) : (
          <div className="space-y-2">
            {history.map((b) => (
              <Card key={b.id} className="!p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-bold text-brand-blue">
                    {STATUS_LABELS[b.status]}
                  </span>
                  <span className="text-xs text-brand-muted">
                    {new Date(b.createdAt).toLocaleString("fa-IR")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-brand-ink">{b.text}</p>
                {b.status === "DONE" && (
                  <p className="mt-1.5 text-xs text-brand-muted">
                    ارسال موفق: {b.sentCount} · ناموفق: {b.failCount}
                  </p>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
