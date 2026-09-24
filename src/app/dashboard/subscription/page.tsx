"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { subscriptionApi, type PlanTier, type SubscriptionStatus } from "@/lib/api";
import { useCurrentUser } from "@/lib/dashboard-context";
import { PageHeader } from "@/components/page-header";
import { Button, Card } from "@/components/ui";

export default function SubscriptionPage() {
  const user = useCurrentUser();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [switching, setSwitching] = useState<PlanTier | null>(null);

  function load() {
    subscriptionApi.get().then(setStatus);
  }

  useEffect(load, []);

  async function handleSwitch(tier: PlanTier) {
    setSwitching(tier);
    try {
      await subscriptionApi.changePlan(tier);
      load();
    } finally {
      setSwitching(null);
    }
  }

  if (!status) return null;

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <PageHeader eyebrow="اشتراک" title="پلن و مصرف" />

      <Card className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-brand-muted">پلن فعلی</p>
            <p className="mt-1 text-xl font-extrabold text-brand-ink">{status.planLabel}</p>
          </div>
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
              status.isSubscriptionActive
                ? "bg-brand-teal/10 text-brand-teal"
                : "bg-amber-50 text-amber-600"
            }`}
          >
            {status.isSubscriptionActive ? "فعال" : "در دوره‌ی آزمایشی"}
          </span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-brand-bg-cool">
          <div
            className="h-full bg-brand-blue"
            style={{
              width: `${Math.min(100, (status.messagesUsedAllTime / status.limits.monthlyMessageQuota) * 100)}%`,
            }}
          />
        </div>
        <p className="mt-2 text-xs font-bold text-brand-muted">
          {status.messagesUsedAllTime.toLocaleString("fa-IR")} از{" "}
          {status.limits.monthlyMessageQuota.toLocaleString("fa-IR")} پیام
        </p>
      </Card>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {status.allPlans.map((plan) => {
          const isCurrent = plan.tier === status.planTier;
          return (
            <Card key={plan.tier} className={isCurrent ? "!border-2 !border-brand-blue" : ""}>
              <h3 className="text-base font-extrabold text-brand-ink">{plan.label}</h3>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                  تا {plan.maxBots} ربات
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                  تا {plan.maxTeamMembers} عضو تیم
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                  {plan.monthlyMessageQuota.toLocaleString("fa-IR")} پیام در ماه
                </li>
                {plan.broadcastAllowed && (
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                    پیام همگانی
                  </li>
                )}
              </ul>
              {user.role === "OWNER" && (
                <Button
                  variant={isCurrent ? "secondary" : "primary"}
                  disabled={isCurrent || switching === plan.tier}
                  onClick={() => handleSwitch(plan.tier)}
                  className="mt-5 w-full"
                >
                  {isCurrent ? "پلن فعلی" : switching === plan.tier ? "در حال تغییر..." : "انتخاب این پلن"}
                </Button>
              )}
            </Card>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-brand-muted">
        * فعلاً پرداخت واقعی وصل نشده — تغییر پلن فقط برای تست است. پرداخت از طریق زرین‌پال بعداً اضافه می‌شود.
      </p>
    </div>
  );
}
