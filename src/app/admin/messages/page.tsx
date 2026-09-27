"use client";

import { useEffect, useState } from "react";
import { Mail, MailOpen, Phone } from "lucide-react";
import { adminApiClient, type ContactMessage, type ContactTopic } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/ui";

const TOPIC_LABELS: Record<ContactTopic, string> = {
  SALES: "مشاوره‌ی خرید",
  SUPPORT: "پشتیبانی فنی",
  BILLING: "پرداخت و اشتراک",
  PARTNERSHIP: "همکاری",
  OTHER: "سایر",
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [onlyUnread, setOnlyUnread] = useState(false);

  function load() {
    adminApiClient
      .listContactMessages()
      .then(setMessages)
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function toggleRead(message: ContactMessage) {
    await adminApiClient.setContactMessageRead(message.id, !message.isRead);
    load();
  }

  const unreadCount = messages.filter((m) => !m.isRead).length;
  const visible = onlyUnread ? messages.filter((m) => !m.isRead) : messages;

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <PageHeader
        eyebrow="صندوق ورودی"
        title="پیام‌های تماس"
        description="پیام‌هایی که بازدیدکننده‌ها از صفحه‌ی «تماس با ما» فرستاده‌اند"
        action={
          <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-brand-muted">
            <input
              type="checkbox"
              checked={onlyUnread}
              onChange={(e) => setOnlyUnread(e.target.checked)}
              className="h-4 w-4 accent-brand-blue"
            />
            فقط خوانده‌نشده‌ها ({unreadCount.toLocaleString("fa-IR")})
          </label>
        }
      />

      <div className="mt-6 space-y-3">
        {loading ? (
          <p className="text-sm text-brand-muted">در حال بارگذاری...</p>
        ) : visible.length === 0 ? (
          <EmptyState text={onlyUnread ? "پیام خوانده‌نشده‌ای ندارید" : "هنوز پیامی نرسیده است"} />
        ) : (
          visible.map((m) => (
            <article
              key={m.id}
              className={`rounded-2xl border bg-white p-5 transition ${
                m.isRead ? "border-slate-100" : "border-brand-blue/30 shadow-sm shadow-brand-blue/10"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  {!m.isRead && <span className="h-2 w-2 rounded-full bg-brand-blue" aria-label="خوانده‌نشده" />}
                  <p className="font-extrabold text-brand-ink">{m.name}</p>
                  <span className="rounded-full bg-brand-accent/10 px-2.5 py-0.5 text-xs font-bold text-brand-accent">
                    {TOPIC_LABELS[m.topic] ?? m.topic}
                  </span>
                </div>
                <time className="text-xs text-brand-muted" dateTime={m.createdAt}>
                  {new Date(m.createdAt).toLocaleString("fa-IR", { dateStyle: "medium", timeStyle: "short" })}
                </time>
              </div>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">{m.message}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-brand-muted">
                  <a href={`tel:${m.phone}`} className="flex items-center gap-1.5 hover:text-brand-blue" dir="ltr">
                    <Phone className="h-3.5 w-3.5" />
                    {m.phone}
                  </a>
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="flex items-center gap-1.5 hover:text-brand-blue" dir="ltr">
                      <Mail className="h-3.5 w-3.5" />
                      {m.email}
                    </a>
                  )}
                </div>
                <button
                  onClick={() => toggleRead(m)}
                  className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-brand-muted transition hover:bg-brand-blue/10 hover:text-brand-blue"
                >
                  {m.isRead ? <Mail className="h-3.5 w-3.5" /> : <MailOpen className="h-3.5 w-3.5" />}
                  {m.isRead ? "علامت خوانده‌نشده" : "علامت خوانده‌شده"}
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
