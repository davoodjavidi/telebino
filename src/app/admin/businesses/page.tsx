"use client";

import { useEffect, useState } from "react";
import { adminApiClient, type AdminBusiness, type PlanTier } from "@/lib/api";
import { PageHeader } from "@/components/page-header";

const TYPE_LABELS: Record<string, string> = {
  SHOP: "فروشگاه",
  EDUCATION: "آموزشی",
  CONSULTING: "مشاوره",
};

const PLAN_OPTIONS: PlanTier[] = ["STARTER", "BUSINESS", "PRO"];
const PLAN_LABELS: Record<PlanTier, string> = {
  STARTER: "پایه",
  BUSINESS: "کسب‌وکار",
  PRO: "حرفه‌ای",
};

export default function AdminBusinessesPage() {
  const [businesses, setBusinesses] = useState<AdminBusiness[]>([]);
  const [loading, setLoading] = useState(true);

  function load() {
    adminApiClient
      .listBusinesses()
      .then(setBusinesses)
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handlePlanChange(id: string, planTier: PlanTier) {
    await adminApiClient.updateBusiness(id, { planTier });
    load();
  }

  async function handleToggleSubscription(business: AdminBusiness) {
    await adminApiClient.updateBusiness(business.id, {
      isSubscriptionActive: !business.isSubscriptionActive,
    });
    load();
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-8">
      <PageHeader
        eyebrow="مدیریت مشتری‌ها"
        title="کسب‌وکارها"
        description="پلن و وضعیت اشتراک هر کسب‌وکار را از اینجا مدیریت کنید (تا وصل‌شدن درگاه پرداخت واقعی)"
      />

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white">
        {loading ? (
          <p className="p-6 text-sm text-brand-muted">در حال بارگذاری...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-right text-xs font-bold text-brand-muted">
                  <th className="px-5 py-3">نام کسب‌وکار</th>
                  <th className="px-5 py-3">نوع</th>
                  <th className="px-5 py-3">شماره مالک</th>
                  <th className="px-5 py-3">ربات / مشتری / تیم</th>
                  <th className="px-5 py-3">پلن</th>
                  <th className="px-5 py-3">وضعیت اشتراک</th>
                  <th className="px-5 py-3">تاریخ ثبت‌نام</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((b) => (
                  <tr key={b.id} className="border-b border-slate-50 last:border-0">
                    <td className="px-5 py-3 font-bold text-brand-ink">{b.name}</td>
                    <td className="px-5 py-3 text-brand-muted">{TYPE_LABELS[b.type]}</td>
                    <td className="px-5 py-3 text-brand-muted" dir="ltr">
                      {b.ownerPhone ?? "—"}
                    </td>
                    <td className="px-5 py-3 text-brand-muted">
                      {b.botCount} / {b.customerCount} / {b.teamSize}
                    </td>
                    <td className="px-5 py-3">
                      <select
                        value={b.planTier}
                        onChange={(e) => handlePlanChange(b.id, e.target.value as PlanTier)}
                        className="rounded-lg border border-slate-200 px-2 py-1.5 text-xs font-bold text-brand-ink outline-none focus:border-brand-blue"
                      >
                        {PLAN_OPTIONS.map((tier) => (
                          <option key={tier} value={tier}>
                            {PLAN_LABELS[tier]}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => handleToggleSubscription(b)}
                        className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
                          b.isSubscriptionActive
                            ? "bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20"
                            : "bg-amber-50 text-amber-600 hover:bg-amber-100"
                        }`}
                      >
                        {b.isSubscriptionActive ? "فعال" : "آزمایشی"}
                      </button>
                    </td>
                    <td className="px-5 py-3 text-xs text-brand-muted">
                      {new Date(b.createdAt).toLocaleDateString("fa-IR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
