"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  CreditCard,
  Crown,
  LayoutDashboard,
  Loader2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { ApiError, subscriptionApi, type SubscriptionStatus } from "@/lib/api";
import { useCurrentUser } from "@/lib/dashboard-context";
import {
  type BillingCycle,
  type PlanMeta,
  PLANS,
  VAT_RATE,
  checkoutHref,
  getPlan,
  parseCycle,
  planPrice,
  toman,
} from "@/lib/plans";
import { CycleToggle } from "@/components/landing/pricing";

type Phase = "review" | "paying" | "success";

export default function CheckoutPage() {
  return (
    <Suspense>
      <Checkout />
    </Suspense>
  );
}

function Checkout() {
  const user = useCurrentUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const plan = getPlan(searchParams.get("plan")) ?? PLANS[1];
  const cycle = parseCycle(searchParams.get("cycle"));
  const price = planPrice(plan, cycle);

  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [phase, setPhase] = useState<Phase>("review");
  const [accepted, setAccepted] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    subscriptionApi.get().then(setStatus);
  }, []);

  const isCurrent = status?.isSubscriptionActive && status.planTier === plan.tier;
  const isOwner = user.role === "OWNER";

  function select(nextPlan: PlanMeta, nextCycle: BillingCycle) {
    router.replace(checkoutHref(nextPlan.tier, nextCycle), { scroll: false });
  }

  async function handlePay() {
    setError(null);
    setPhase("paying");
    try {
      // TODO(zarinpal): request a payment URL from the API and redirect to it;
      // the plan should be activated by the gateway callback, not here.
      const [result] = await Promise.allSettled([
        subscriptionApi.changePlan(plan.tier),
        new Promise((r) => setTimeout(r, 2200)),
      ]);
      if (result.status === "rejected") throw result.reason;
      setPhase("success");
      window.scrollTo({ top: 0 });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "پرداخت انجام نشد، دوباره تلاش کنید");
      setPhase("review");
    }
  }

  if (phase === "success") {
    return <SuccessView plan={plan} cycle={cycle} total={price.total} />;
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-8 lg:pb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/dashboard/subscription"
          className="flex items-center gap-1.5 text-sm font-bold text-brand-muted transition hover:text-brand-blue"
        >
          <ArrowRight className="h-4 w-4" />
          بازگشت به اشتراک
        </Link>
        <Stepper current={1} />
      </div>

      <h1 className="mt-8 text-2xl font-black text-brand-ink sm:text-3xl">تکمیل خرید اشتراک</h1>
      <p className="mt-2 text-sm text-brand-muted">پلن و دوره‌ی پرداخت را انتخاب کنید؛ اشتراک بلافاصله بعد از پرداخت فعال می‌شود.</p>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          {/* Plan */}
          <section className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="flex items-center gap-2 text-base font-extrabold text-brand-ink">
                <StepBadge n={1} />
                انتخاب پلن
              </h2>
              <CycleToggle cycle={cycle} onChange={(c) => select(plan, c)} />
            </div>

            <div role="radiogroup" aria-label="پلن" className="mt-6 grid gap-3 md:grid-cols-3">
              {PLANS.map((p) => {
                const selected = p.tier === plan.tier;
                const current = status?.isSubscriptionActive && status.planTier === p.tier;
                return (
                  <button
                    key={p.tier}
                    role="radio"
                    aria-checked={selected}
                    onClick={() => select(p, cycle)}
                    className={`relative rounded-2xl border-2 p-5 text-right transition ${
                      selected
                        ? "border-brand-blue bg-brand-blue/[0.04] shadow-lg shadow-brand-blue/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${
                        selected ? "border-brand-blue bg-brand-blue text-white" : "border-slate-300"
                      }`}
                    >
                      {selected && <Check className="h-3 w-3" strokeWidth={4} />}
                    </span>
                    <p className="flex items-center gap-1.5 text-sm font-extrabold text-brand-ink">
                      {p.name}
                      {p.highlighted && <Crown className="h-4 w-4 text-brand-accent" />}
                    </p>
                    <p className="mt-3 text-xl font-black text-brand-ink">
                      {toman(planPrice(p, cycle).perMonth)}
                      <span className="mr-1 text-xs font-medium text-brand-muted">تومان/ماه</span>
                    </p>
                    {current && (
                      <span className="mt-2 inline-block rounded-full bg-brand-teal/10 px-2 py-0.5 text-[11px] font-bold text-brand-teal">
                        پلن فعلی شما
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <ul className="mt-6 grid gap-2.5 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 shrink-0 text-brand-teal" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Payment method */}
          <section className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-7">
            <h2 className="flex items-center gap-2 text-base font-extrabold text-brand-ink">
              <StepBadge n={2} />
              روش پرداخت
            </h2>
            <div className="mt-5 flex items-center gap-4 rounded-2xl border-2 border-brand-blue bg-brand-blue/[0.04] p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-ink text-white">
                <CreditCard className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-extrabold text-brand-ink">درگاه پرداخت زرین‌پال</p>
                <p className="mt-0.5 text-xs text-brand-muted">پرداخت با همه‌ی کارت‌های عضو شبکه‌ی شتاب</p>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white">
                <Check className="h-3 w-3" strokeWidth={4} />
              </span>
            </div>

            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-xs text-brand-muted">کسب‌وکار</p>
                <p className="mt-0.5 font-bold text-brand-ink">{user.business.name}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-xs text-brand-muted">شماره‌ی حساب</p>
                <p className="mt-0.5 font-bold text-brand-ink" dir="ltr">
                  {user.phone}
                </p>
              </div>
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-brand-muted">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 accent-brand-blue"
              />
              قوانین استفاده از خدمات و شرایط تمدید اشتراک تلبینو را می‌پذیرم.
            </label>
          </section>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-6">
          <div className="overflow-hidden rounded-3xl bg-brand-ink text-white shadow-2xl shadow-slate-900/20">
            <div className="relative p-7">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/40 blur-3xl" />
              <p className="relative text-xs font-bold text-white/50">خلاصه‌ی سفارش</p>
              <p className="relative mt-2 text-xl font-black">
                پلن {plan.name}
                <span className="mr-2 rounded-full bg-white/10 px-2.5 py-1 align-middle text-xs font-bold">
                  {cycle === "yearly" ? "سالانه" : "ماهانه"}
                </span>
              </p>

              <dl className="relative mt-6 space-y-3 text-sm">
                <Row label={cycle === "yearly" ? "۱۲ ماه اشتراک" : "۱ ماه اشتراک"} value={price.listPrice} />
                {price.discount > 0 && <Row label="تخفیف سالانه (۲ ماه هدیه)" value={-price.discount} highlight />}
                <Row label={`مالیات بر ارزش افزوده (${(VAT_RATE * 100).toLocaleString("fa-IR")}٪)`} value={price.vat} />
              </dl>

              <div className="relative mt-6 border-t border-dashed border-white/15 pt-5">
                <div className="flex items-end justify-between">
                  <span className="text-sm text-white/60">مبلغ قابل پرداخت</span>
                  <span key={price.total} className="animate-pop-in text-2xl font-black">
                    {toman(price.total)}
                    <span className="mr-1 text-xs font-medium text-white/50">تومان</span>
                  </span>
                </div>
              </div>

              {error && <p className="relative mt-4 rounded-xl bg-red-500/15 px-3 py-2 text-sm text-red-200">{error}</p>}

              {isOwner ? (
                <button
                  onClick={handlePay}
                  disabled={!accepted || isCurrent || phase === "paying"}
                  className="shimmer group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand-accent py-4 text-base font-bold text-white shadow-[0_10px_40px_-8px_rgba(255,106,57,0.7)] transition hover:bg-brand-accent-dark disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none"
                >
                  <Lock className="h-4.5 w-4.5" />
                  {isCurrent ? "این پلن هم‌اکنون فعال است" : `پرداخت ${toman(price.total)} تومان`}
                </button>
              ) : (
                <p className="relative mt-6 rounded-2xl bg-white/5 p-4 text-sm leading-7 text-white/70">
                  فقط مالک کسب‌وکار می‌تواند اشتراک را خریداری کند.
                </p>
              )}

              <p className="relative mt-4 flex items-center justify-center gap-1.5 text-xs text-white/45">
                <ShieldCheck className="h-4 w-4" />
                پرداخت امن و رمزگذاری‌شده
              </p>
            </div>
          </div>

          {cycle === "monthly" && (
            <button
              onClick={() => select(plan, "yearly")}
              className="mt-4 w-full rounded-2xl border-2 border-dashed border-brand-teal/40 bg-brand-teal/5 p-4 text-right text-sm transition hover:border-brand-teal"
            >
              <p className="font-extrabold text-brand-teal">💡 با پرداخت سالانه ۲ ماه هدیه بگیرید</p>
              <p className="mt-1 text-xs text-brand-muted">
                صرفه‌جویی {toman(planPrice(plan, "yearly").discount)} تومانی — برای تغییر کلیک کنید
              </p>
            </button>
          )}

          <p className="mt-4 text-center text-[11px] leading-6 text-brand-muted">
            * محیط توسعه: درگاه واقعی هنوز وصل نیست و پلن بدون پرداخت فعال می‌شود.
          </p>
        </aside>
      </div>

      {/* Mobile: keep the total and pay button in reach while scrolling */}
      {isOwner && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 px-5 py-3 backdrop-blur-lg lg:hidden">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-[11px] text-brand-muted">مبلغ قابل پرداخت</p>
              <p className="text-lg font-black text-brand-ink">
                {toman(price.total)} <span className="text-xs font-medium text-brand-muted">تومان</span>
              </p>
            </div>
            <button
              onClick={handlePay}
              disabled={!accepted || isCurrent || phase === "paying"}
              className="flex items-center gap-2 rounded-2xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-accent/30 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
            >
              <Lock className="h-4 w-4" />
              {isCurrent ? "پلن فعال" : "پرداخت"}
            </button>
          </div>
        </div>
      )}

      {phase === "paying" && <PayingOverlay total={price.total} />}
    </div>
  );
}

function Row({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-white/60">{label}</dt>
      <dd className={`font-bold ${highlight ? "text-brand-teal" : ""}`}>
        {value < 0 ? "−" : ""}
        {toman(Math.abs(value))}
      </dd>
    </div>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-ink text-xs font-black text-white">
      {n.toLocaleString("fa-IR")}
    </span>
  );
}

function Stepper({ current }: { current: number }) {
  const labels = ["انتخاب پلن", "پرداخت", "فعال‌سازی"];
  return (
    <ol className="flex items-center gap-2 text-xs font-bold">
      {labels.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 ${
                done
                  ? "bg-brand-teal/10 text-brand-teal"
                  : active
                    ? "bg-brand-ink text-white"
                    : "bg-slate-100 text-slate-400"
              }`}
            >
              {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : (i + 1).toLocaleString("fa-IR")}
              <span className="hidden sm:inline">{label}</span>
            </span>
            {i < labels.length - 1 && <span className={`h-px w-4 sm:w-8 ${done ? "bg-brand-teal" : "bg-slate-200"}`} />}
          </li>
        );
      })}
    </ol>
  );
}

function PayingOverlay({ total }: { total: number }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-5 backdrop-blur-md" role="alertdialog" aria-live="assertive">
      <div className="animate-pop-in w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
        <div className="relative mx-auto h-20 w-20">
          <div className="absolute inset-0 animate-ping rounded-full bg-brand-blue/20" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/10">
            <CreditCard className="h-9 w-9 text-brand-blue" />
          </div>
        </div>
        <p className="mt-6 text-lg font-black text-brand-ink">در حال انتقال به درگاه امن...</p>
        <p className="mt-2 text-sm text-brand-muted">مبلغ {toman(total)} تومان</p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-brand-muted">
          <Loader2 className="h-4 w-4 animate-spin" />
          لطفاً صفحه را نبندید
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Success
// ---------------------------------------------------------------------------

const CONFETTI_COLORS = ["#2f6feb", "#12b3a1", "#ff6a39", "#ffcd00", "#a78bfa"];

/** Deterministic pseudo-random in [0, 1) so render stays pure. */
function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const CONFETTI_PIECES = Array.from({ length: 90 }, (_, i) => ({
  left: rand(i) * 100,
  size: 6 + rand(i + 100) * 8,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  delay: rand(i + 200) * 0.8,
  duration: 2.4 + rand(i + 300) * 2,
  drift: (rand(i + 400) - 0.5) * 200,
  round: rand(i + 500) > 0.6,
}));

function Confetti() {
  const pieces = CONFETTI_PIECES;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.round ? p.size : p.size * 0.45,
              background: p.color,
              borderRadius: p.round ? "9999px" : "2px",
              "--delay": `${p.delay}s`,
              "--duration": `${p.duration}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function SuccessView({ plan, cycle, total }: { plan: PlanMeta; cycle: BillingCycle; total: number }) {
  const until = new Date();
  until.setMonth(until.getMonth() + (cycle === "yearly" ? 12 : 1));

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <Confetti />
      <div className="flex justify-center">
        <Stepper current={3} />
      </div>

      <div className="animate-fade-in-up mt-8 overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/70">
        <div className="relative overflow-hidden bg-slate-950 px-8 pb-12 pt-12 text-center text-white">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-teal/40 blur-[80px]" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand-blue/40 blur-[80px]" />
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-teal shadow-[0_0_60px_rgba(18,179,161,0.6)]">
            <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" className="animate-check-draw" />
            </svg>
          </div>
          <h1 className="relative mt-7 text-3xl font-black">تبریک! اشتراک‌تان فعال شد 🎉</h1>
          <p className="relative mt-3 text-white/65">
            پلن <span className="font-bold text-white">{plan.name}</span> از همین لحظه برای کسب‌وکار شما فعال است.
          </p>
        </div>

        <div className="-mt-6 px-6 pb-8 sm:px-8">
          <div className="relative grid grid-cols-3 divide-x divide-x-reverse divide-slate-100 rounded-2xl border border-slate-100 bg-white py-4 text-center shadow-lg shadow-slate-100">
            <div>
              <p className="text-[11px] text-brand-muted">پلن</p>
              <p className="mt-1 text-sm font-extrabold text-brand-ink">{plan.name}</p>
            </div>
            <div>
              <p className="text-[11px] text-brand-muted">مبلغ</p>
              <p className="mt-1 text-sm font-extrabold text-brand-ink">{toman(total)} ت</p>
            </div>
            <div>
              <p className="text-[11px] text-brand-muted">اعتبار تا</p>
              <p className="mt-1 text-sm font-extrabold text-brand-ink">{until.toLocaleDateString("fa-IR")}</p>
            </div>
          </div>

          <p className="mt-8 text-sm font-extrabold text-brand-ink">قدم بعدی چیست؟</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/dashboard/bots"
              className="group flex items-center gap-3 rounded-2xl bg-brand-accent p-4 text-white shadow-lg shadow-brand-accent/30 transition hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                <Bot className="h-5.5 w-5.5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-extrabold">اتصال ربات تلگرام</span>
                <span className="block text-xs text-white/75">ربات‌تان را در یک دقیقه وصل کنید</span>
              </span>
              <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/dashboard"
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-brand-blue/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <LayoutDashboard className="h-5.5 w-5.5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-extrabold text-brand-ink">رفتن به داشبورد</span>
                <span className="block text-xs text-brand-muted">نمای کلی کسب‌وکارتان</span>
              </span>
              <ArrowLeft className="h-5 w-5 text-brand-muted transition group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
