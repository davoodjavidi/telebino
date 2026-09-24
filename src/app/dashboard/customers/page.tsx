"use client";

import { useEffect, useState } from "react";
import { customersApi, type Customer } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { EmptyState } from "@/components/ui";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customersApi
      .list()
      .then(setCustomers)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <PageHeader
        eyebrow="CRM"
        title="مشتریان"
        description="هرکسی که وارد ربات شده، اینجا به‌صورت خودکار ثبت می‌شود"
      />

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white">
        {loading ? (
          <p className="p-6 text-sm text-brand-muted">در حال بارگذاری...</p>
        ) : customers.length === 0 ? (
          <div className="p-2">
            <EmptyState text="هنوز مشتری‌ای وارد ربات نشده است." />
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-right text-xs font-bold text-brand-muted">
                <th className="px-5 py-3">نام کاربری تلگرام</th>
                <th className="px-5 py-3">شماره تماس</th>
                <th className="px-5 py-3">تعداد پیام</th>
                <th className="px-5 py-3">آخرین فعالیت</th>
                <th className="px-5 py-3">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-slate-50 last:border-0">
                  <td className="px-5 py-3 font-bold text-brand-ink" dir="ltr">
                    {c.telegramUsername ? `@${c.telegramUsername}` : c.telegramUserId}
                  </td>
                  <td className="px-5 py-3 text-brand-muted" dir="ltr">
                    {c.phone ?? "اشتراک‌گذاری نشده"}
                  </td>
                  <td className="px-5 py-3 text-brand-muted">{c.messageCount}</td>
                  <td className="px-5 py-3 text-brand-muted">
                    {new Date(c.lastSeenAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="px-5 py-3">
                    {c.blocked ? (
                      <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-600">
                        بلاک شده
                      </span>
                    ) : (
                      <span className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-bold text-brand-teal">
                        فعال
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
