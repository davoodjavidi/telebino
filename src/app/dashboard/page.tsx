"use client";

import { useEffect, useState } from "react";
import { Package, Truck, ClipboardList, MessageCircleQuestion, Users2 } from "lucide-react";
import { useCurrentUser } from "@/lib/dashboard-context";
import { reportsApi, type ReportsSummary } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";

const businessTypeLabel: Record<string, string> = {
  SHOP: "فروشگاه آنلاین",
  EDUCATION: "مجموعه‌ی آموزشی",
  CONSULTING: "مرکز مشاوره",
};

export default function DashboardHomePage() {
  const user = useCurrentUser();
  const [summary, setSummary] = useState<ReportsSummary | null>(null);

  useEffect(() => {
    reportsApi.summary().then(setSummary).catch(() => undefined);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <PageHeader
        eyebrow="خوش آمدید"
        title={user.business.name}
        description={`${businessTypeLabel[user.business.type]} · شماره ${user.phone}`}
      />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard icon={Users2} label="مشتریان" value={summary?.totalCustomers ?? "—"} />
        <StatCard icon={Truck} label="سفارش‌ها" value={summary?.totalOrders ?? "—"} />
        <StatCard icon={Package} label="پیام‌ها" value={summary?.totalMessages ?? "—"} />
        <StatCard icon={ClipboardList} label="پاسخ فرم‌ها" value={summary?.formSubmissionCount ?? "—"} />
        <StatCard
          icon={MessageCircleQuestion}
          label="سوالات بی‌پاسخ"
          value={summary?.unansweredCount ?? "—"}
          accent
        />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6">
        <p className="text-sm leading-7 text-brand-muted">
          از منوی کنار، بخش‌های مختلف پنل رو مدیریت کن: محصولات، سوالات متداول، سفارش‌ها و
          دسترسی‌ها، فرم‌ها، ربات‌های تلگرامی و گزارش‌های کامل.
        </p>
      </div>
    </div>
  );
}
