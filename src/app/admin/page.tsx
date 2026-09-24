"use client";

import { useEffect, useState } from "react";
import { Bot, Building2, MessageSquare, Users2 } from "lucide-react";
import { adminApiClient, type PlatformStats } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Card } from "@/components/ui";

const TYPE_LABELS: Record<string, string> = {
  SHOP: "فروشگاه آنلاین",
  EDUCATION: "مجموعه‌ی آموزشی",
  CONSULTING: "مرکز مشاوره",
};

const PLAN_LABELS: Record<string, string> = {
  STARTER: "پایه",
  BUSINESS: "کسب‌وکار",
  PRO: "حرفه‌ای",
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<PlatformStats | null>(null);

  useEffect(() => {
    adminApiClient.stats().then(setStats);
  }, []);

  const maxCount = Math.max(1, ...(stats?.newBusinessesLast7Days.map((d) => d.count) ?? [1]));

  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <PageHeader eyebrow="نمای کلی پلتفرم" title="داشبورد مدیریت" />

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard icon={Building2} label="کسب‌وکارها" value={stats?.totalBusinesses ?? "—"} />
        <StatCard icon={Bot} label="ربات‌های فعال" value={`${stats?.activeBots ?? "—"} / ${stats?.totalBots ?? "—"}`} />
        <StatCard icon={Users2} label="مشتریان" value={stats?.totalCustomers ?? "—"} />
        <StatCard icon={MessageSquare} label="پیام‌ها" value={stats?.totalMessages ?? "—"} accent />
      </div>

      <Card className="mt-6">
        <p className="text-sm font-extrabold text-brand-ink">ثبت‌نام کسب‌وکار جدید (۷ روز اخیر)</p>
        <div className="mt-5 flex items-end gap-2" style={{ height: 120 }}>
          {stats?.newBusinessesLast7Days.map((day) => (
            <div key={day.date} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-md bg-brand-blue"
                style={{ height: `${Math.max(4, (day.count / maxCount) * 100)}px` }}
                title={`${day.count} کسب‌وکار`}
              />
              <span className="text-[10px] font-bold text-brand-muted">
                {new Date(day.date).toLocaleDateString("fa-IR", { day: "numeric", month: "numeric" })}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Card>
          <p className="text-sm font-extrabold text-brand-ink">تفکیک بر اساس نوع کسب‌وکار</p>
          <div className="mt-3 space-y-2">
            {Object.entries(stats?.businessesByType ?? {}).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between text-sm">
                <span className="text-brand-muted">{TYPE_LABELS[type] ?? type}</span>
                <span className="font-extrabold text-brand-ink">{count}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <p className="text-sm font-extrabold text-brand-ink">تفکیک بر اساس پلن</p>
          <div className="mt-3 space-y-2">
            {Object.entries(stats?.businessesByPlan ?? {}).map(([plan, count]) => (
              <div key={plan} className="flex items-center justify-between text-sm">
                <span className="text-brand-muted">{PLAN_LABELS[plan] ?? plan}</span>
                <span className="font-extrabold text-brand-ink">{count}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
