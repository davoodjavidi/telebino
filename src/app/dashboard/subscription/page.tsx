"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bot, Check, Crown, Megaphone, MessageSquare, Users } from "lucide-react";
import { subscriptionApi, type SubscriptionStatus } from "@/lib/api";
import { useCurrentUser } from "@/lib/dashboard-context";
import { type BillingCycle, PLANS, checkoutHref, planPrice, toman } from "@/lib/plans";
import { CycleToggle } from "@/components/landing/pricing";
import { PageHeader } from "@/components/page-header";

export default function SubscriptionPage() {
  const user = useCurrentUser();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [cycle, setCycle] = useState<BillingCycle>("yearly");

  useEffect(() => {
    subscriptionApi.get().then(setStatus);
  }, []);

  if (!status) return null;

  const usagePct = Math.min(100, (status.messagesUsedAllTime / status.limits.monthlyMessageQuota) * 100);
  const currentIndex = PLANS.findIndex((p) => p.tier === status.planTier);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <PageHeader eyebrow="اشتراک" title="پلن و مصرف" />

      {/* Current plan */}
      <div className="relative mt-6 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-10 -top-16 h-56 w-56 rounded-full bg-brand-blue/40 blur-[90px]" />
        <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <UsageRing percent={usagePct} />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-2xl font-black">پلن {status.planLabel}</p>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  status.isSubscriptionActive ? "bg-brand-teal/20 text-brand-teal" : "bg-amber-400/15 text-amber-300"
                }`}
              >
                {status.isSubscriptionActive ? "فعال" : "دوره‌ی آزمایشی"}
              </span>
            </div>
            <p className="mt-2 text-sm text-white/60">
              {status.messagesUsedAllTime.toLocaleString("fa-IR")} از{" "}
              {status.limits.monthlyMessageQuota.toLocaleString("fa-IR")} پیام مصرف شده
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Limit icon={Bot} label="ربات" value={status.limits.maxBots} />
              <Limit icon={Users} label="عضو تیم" value={status.limits.maxTeamMembers} />
              <Limit icon={MessageSquare} label="پیام/ماه" value={status.limits.monthlyMessageQuota} />
              <div className="rounded-2xl bg-white/5 px-3.5 py-3">
                <Megaphone className="h-4 w-4 text-white/50" />
                <p className="mt-1.5 text-sm font-extrabold">{status.limits.broadcastAllowed ? "دارد" : "ندارد"}</p>
                <p className="text-[11px] text-white/50">پیام همگانی</p>
              </div>
            </div>
          </div>
        </div>
        {!status.isSubscriptionActive && (
          <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm">
            <span className="text-amber-100">در دوره‌ی آزمایشی فقط ۵ پیام اول هر ربات پاسخ داده می‌شود.</span>
            <a href="#plans" className="font-bold text-amber-300 hover:text-amber-200">
              فعال‌سازی اشتراک ←
            </a>
          </div>
        )}
      </div>

      {/* Plans */}
      <div id="plans" className="mt-12 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-brand-ink">ارتقا یا تمدید اشتراک</h2>
          <p className="mt-1 text-sm text-brand-muted">با پرداخت سالانه ۲ ماه اشتراک هدیه بگیرید.</p>
        </div>
        <CycleToggle cycle={cycle} onChange={setCycle} />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {PLANS.map((plan, i) => {
          const isCurrent = status.isSubscriptionActive && plan.tier === status.planTier;
          const price = planPrice(plan, cycle);
          const action = !status.isSubscriptionActive
            ? "خرید"
            : i > currentIndex
              ? "ارتقا"
              : i === currentIndex
                ? "تمدید"
                : "تغییر";
          return (
            <div
              key={plan.tier}
              className={`relative flex flex-col rounded-3xl border-2 bg-white p-6 transition ${
                plan.highlighted ? "border-brand-accent shadow-xl shadow-brand-accent/10" : "border-slate-100"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">
                  <Crown className="h-3.5 w-3.5" />
                  محبوب‌ترین
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-brand-ink">{plan.name}</h3>
                {isCurrent && (
                  <span className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-[11px] font-bold text-brand-teal">
                    پلن فعلی
                  </span>
                )}
              </div>
              <p className="mt-4 text-3xl font-black text-brand-ink">
                <span key={cycle} className="animate-pop-in inline-block">
                  {toman(price.perMonth)}
                </span>
                <span className="mr-1 text-xs font-medium text-brand-muted">تومان/ماه</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              {user.role === "OWNER" ? (
                <Link
                  href={checkoutHref(plan.tier, cycle)}
                  className={`group mt-6 flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition ${
                    plan.highlighted
                      ? "bg-brand-accent text-white hover:bg-brand-accent-dark"
                      : "bg-brand-ink/5 text-brand-ink hover:bg-brand-ink hover:text-white"
                  }`}
                >
                  {action} پلن {plan.name}
                  <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                </Link>
              ) : (
                <p className="mt-6 text-center text-xs text-brand-muted">فقط مالک می‌تواند پلن را تغییر دهد</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Limit({ icon: Icon, label, value }: { icon: typeof Bot; label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/5 px-3.5 py-3">
      <Icon className="h-4 w-4 text-white/50" />
      <p className="mt-1.5 text-sm font-extrabold">{value.toLocaleString("fa-IR")}</p>
      <p className="text-[11px] text-white/50">{label}</p>
    </div>
  );
}

function UsageRing({ percent }: { percent: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const color = percent > 85 ? "#ff6a39" : "#12b3a1";
  return (
    <div className="relative mx-auto h-36 w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (percent / 100) * c}
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black">{Math.round(percent).toLocaleString("fa-IR")}٪</span>
        <span className="text-[11px] text-white/50">مصرف پیام</span>
      </div>
    </div>
  );
}
