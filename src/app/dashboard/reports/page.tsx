"use client";

import { useEffect, useState } from "react";
import { ClipboardList, MessageCircleQuestion, Package, Truck, Users2 } from "lucide-react";
import { reportsApi, type ReportsSummary, type UnansweredQuestion } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Card, EmptyState } from "@/components/ui";
import { StatCard } from "@/components/stat-card";

export default function ReportsPage() {
  const [summary, setSummary] = useState<ReportsSummary | null>(null);
  const [unanswered, setUnanswered] = useState<UnansweredQuestion[]>([]);

  useEffect(() => {
    reportsApi.summary().then(setSummary);
    reportsApi.unanswered().then(setUnanswered);
  }, []);

  const maxCount = Math.max(1, ...(summary?.newUsersLast7Days.map((d) => d.count) ?? [1]));

  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <PageHeader eyebrow="آمار" title="گزارش‌ها" />

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard icon={Users2} label="مشتریان" value={summary?.totalCustomers ?? "—"} />
        <StatCard icon={Truck} label="سفارش‌ها" value={summary?.totalOrders ?? "—"} />
        <StatCard icon={Package} label="پیام‌ها" value={summary?.totalMessages ?? "—"} />
        <StatCard icon={ClipboardList} label="پاسخ فرم‌ها" value={summary?.formSubmissionCount ?? "—"} />
        <StatCard icon={MessageCircleQuestion} label="سوالات بی‌پاسخ" value={summary?.unansweredCount ?? "—"} accent />
      </div>

      <Card className="mt-6">
        <p className="text-sm font-extrabold text-brand-ink">ورود کاربران جدید (۷ روز اخیر)</p>
        <div className="mt-5 flex items-end gap-2" style={{ height: 120 }}>
          {summary?.newUsersLast7Days.map((day) => (
            <div key={day.date} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-md bg-brand-blue transition-all"
                style={{ height: `${Math.max(4, (day.count / maxCount) * 100)}px` }}
                title={`${day.count} کاربر`}
              />
              <span className="text-[10px] font-bold text-brand-muted">
                {new Date(day.date).toLocaleDateString("fa-IR", { day: "numeric", month: "numeric" })}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6">
        <p className="mb-3 text-sm font-extrabold text-brand-ink">سوالات بی‌پاسخ</p>
        {unanswered.length === 0 ? (
          <EmptyState text="فعلاً سوال بی‌پاسخی ثبت نشده — عالیه!" />
        ) : (
          <div className="space-y-2">
            {unanswered.map((q) => (
              <Card key={q.id} className="!p-3.5">
                <p className="text-sm text-brand-ink">{q.question}</p>
                <p className="mt-1 text-[11px] text-brand-muted">
                  {new Date(q.askedAt).toLocaleString("fa-IR")}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
