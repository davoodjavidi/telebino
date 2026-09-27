"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Crown } from "lucide-react";
import { type BillingCycle, PLANS, checkoutHref, planPrice, toman } from "@/lib/plans";

export function CycleToggle({
  cycle,
  onChange,
  dark = false,
}: {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
  dark?: boolean;
}) {
  const options: { value: BillingCycle; label: string }[] = [
    { value: "monthly", label: "ماهانه" },
    { value: "yearly", label: "سالانه" },
  ];
  return (
    <div
      role="radiogroup"
      aria-label="دوره‌ی پرداخت"
      className={`relative inline-flex rounded-full p-1 ${dark ? "bg-white/10" : "bg-slate-100"}`}
    >
      <span
        aria-hidden
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-white shadow transition-all duration-300"
        style={{ insetInlineStart: cycle === "monthly" ? 4 : "50%" }}
      />
      {options.map((o) => (
        <button
          key={o.value}
          role="radio"
          aria-checked={cycle === o.value}
          onClick={() => onChange(o.value)}
          className={`relative z-10 flex w-28 items-center justify-center gap-1.5 rounded-full py-2 text-sm font-bold transition ${
            cycle === o.value ? "text-brand-ink" : dark ? "text-white/70" : "text-brand-muted"
          }`}
        >
          {o.label}
          {o.value === "yearly" && (
            <span className="rounded-full bg-brand-accent px-1.5 py-0.5 text-[10px] text-white">۲ ماه هدیه</span>
          )}
        </button>
      ))}
    </div>
  );
}

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("yearly");

  return (
    <>
      <div className="mt-10 flex justify-center">
        <CycleToggle cycle={cycle} onChange={setCycle} />
      </div>

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const price = planPrice(plan, cycle);
          const card = (
            <div
              className={`flex h-full flex-col rounded-[1.4rem] p-8 ${
                plan.highlighted ? "bg-brand-ink text-white" : "border border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-lg font-extrabold ${plan.highlighted ? "text-white" : "text-brand-ink"}`}>
                  {plan.name}
                </h3>
                {plan.highlighted && (
                  <span className="flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">
                    <Crown className="h-3.5 w-3.5" />
                    محبوب‌ترین
                  </span>
                )}
              </div>
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-white/60" : "text-brand-muted"}`}>
                {plan.tagline}
              </p>

              <div className="mt-7 flex items-baseline gap-2">
                <span
                  key={`${plan.tier}-${cycle}`}
                  className={`animate-pop-in text-4xl font-black tracking-tight ${
                    plan.highlighted ? "text-white" : "text-brand-ink"
                  }`}
                >
                  {toman(price.perMonth)}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-white/60" : "text-brand-muted"}`}>
                  تومان / ماه
                </span>
              </div>
              <p className="mt-2 h-5 text-xs text-brand-teal">
                {cycle === "yearly" ? `پرداخت سالانه — ${toman(price.discount)} تومان صرفه‌جویی` : " "}
              </p>

              <Link
                href={checkoutHref(plan.tier, cycle)}
                className={`group mt-7 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition ${
                  plan.highlighted
                    ? "relative overflow-hidden bg-brand-accent text-white shimmer hover:bg-brand-accent-dark"
                    : "bg-brand-ink/5 text-brand-ink hover:bg-brand-ink hover:text-white"
                }`}
              >
                انتخاب پلن {plan.name}
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </Link>

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm ${plan.highlighted ? "text-white/85" : "text-slate-600"}`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-brand-teal ${
                        plan.highlighted ? "bg-brand-teal/20" : "bg-brand-teal/10"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );

          return plan.highlighted ? (
            <div
              key={plan.tier}
              className="glow-border rounded-3xl shadow-2xl shadow-brand-blue/25 lg:-my-4"
            >
              {card}
            </div>
          ) : (
            <div key={plan.tier}>{card}</div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-brand-muted">
        قبل از خرید هم می‌توانید رایگان شروع کنید — ۵ پیام اول هر ربات رایگان است، بدون کارت بانکی.
      </p>
    </>
  );
}
