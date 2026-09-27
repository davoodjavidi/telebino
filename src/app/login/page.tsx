"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Crown, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { ApiError, requestOtp, tokenStorage, verifyOtp } from "@/lib/api";
import { getPlan, parseCycle, planPrice, toman } from "@/lib/plans";

const PHONE_PATTERN = /^09\d{9}$/;
const CODE_LENGTH = 5;

/** Only allow same-origin relative redirects (no `//evil.com`). */
function safeNext(value: string | null) {
  return value && value.startsWith("/") && !value.startsWith("//") ? value : "/dashboard";
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = safeNext(searchParams.get("next"));

  // If the user came from a pricing CTA, show which plan they picked.
  const nextParams = new URLSearchParams(next.split("?")[1] ?? "");
  const pendingPlan = getPlan(nextParams.get("plan"));
  const pendingCycle = parseCycle(nextParams.get("cycle"));

  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePhoneSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!PHONE_PATTERN.test(phone)) {
      setError("شماره موبایل معتبر نیست (مثال: 09123456789)");
      return;
    }

    setLoading(true);
    try {
      await requestOtp(phone);
      setStep("otp");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ارتباط با سرور برقرار نشد");
    } finally {
      setLoading(false);
    }
  }

  async function handleOtpSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { accessToken } = await verifyOtp(phone, code, businessName);
      tokenStorage.set(accessToken);
      router.push(next);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ارتباط با سرور برقرار نشد");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-full flex-1 lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col px-5 py-8 sm:px-10">
        <Link href="/" className="flex w-fit items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-teal font-extrabold text-white shadow-lg shadow-brand-blue/30">
            ت
          </span>
          <span className="text-lg font-extrabold text-brand-ink">تلبینو</span>
        </Link>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          {pendingPlan && (
            <div className="animate-fade-in-up mb-8 flex items-center gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent/5 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent text-white">
                <Crown className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <p className="font-extrabold text-brand-ink">
                  پلن {pendingPlan.name} — {pendingCycle === "yearly" ? "سالانه" : "ماهانه"}
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">
                  {toman(planPrice(pendingPlan, pendingCycle).perMonth)} تومان در ماه · بعد از ورود، مستقیم به صفحه‌ی پرداخت می‌روید
                </p>
              </div>
            </div>
          )}

          {step === "phone" ? (
            <form key="phone" onSubmit={handlePhoneSubmit} className="animate-fade-in-up space-y-6">
              <div>
                <h1 className="text-2xl font-black text-brand-ink">ورود یا ثبت‌نام</h1>
                <p className="mt-2 text-sm leading-7 text-brand-muted">
                  شماره موبایل‌تان را وارد کنید؛ اگر حساب نداشته باشید، خودکار ساخته می‌شود.
                </p>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-brand-ink">
                  شماره موبایل
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  dir="ltr"
                  placeholder="09123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.trim())}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-center text-lg tracking-wider text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
                  autoFocus
                />
              </div>
              {error && <p className="text-sm font-medium text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-brand-accent py-4 text-base font-bold text-white shadow-lg shadow-brand-accent/30 transition hover:bg-brand-accent-dark disabled:opacity-60"
              >
                {loading ? "در حال ارسال..." : "دریافت کد تایید"}
              </button>
              <p className="text-center text-xs text-brand-muted">
                با ورود، <span className="font-bold">قوانین و حریم خصوصی</span> تلبینو را می‌پذیرید.
              </p>
            </form>
          ) : (
            <form key="otp" onSubmit={handleOtpSubmit} className="animate-fade-in-up space-y-6">
              <button
                type="button"
                onClick={() => {
                  setStep("phone");
                  setCode("");
                  setError(null);
                }}
                className="flex items-center gap-1 text-sm font-bold text-brand-muted transition hover:text-brand-blue"
              >
                <ArrowRight className="h-4 w-4" />
                تغییر شماره
              </button>
              <div>
                <h1 className="text-2xl font-black text-brand-ink">کد تایید را وارد کنید</h1>
                <p className="mt-2 text-sm leading-7 text-brand-muted">
                  کد {CODE_LENGTH.toLocaleString("fa-IR")} رقمی به <span dir="ltr" className="font-bold text-brand-ink">{phone}</span> ارسال شد.
                </p>
              </div>
              <OtpInput value={code} onChange={setCode} />
              <div>
                <label htmlFor="businessName" className="mb-2 block text-sm font-bold text-brand-ink">
                  نام کسب‌وکار <span className="font-normal text-brand-muted">(فقط برای ورود اول)</span>
                </label>
                <input
                  id="businessName"
                  type="text"
                  placeholder="مثلاً فروشگاه نمونه"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-sm text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
                />
              </div>
              {error && <p className="text-sm font-medium text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading || code.length !== CODE_LENGTH}
                className="w-full rounded-2xl bg-brand-accent py-4 text-base font-bold text-white shadow-lg shadow-brand-accent/30 transition hover:bg-brand-accent-dark disabled:opacity-60 disabled:shadow-none"
              >
                {loading ? "در حال بررسی..." : pendingPlan ? "ورود و ادامه‌ی خرید" : "ورود به پنل"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Brand side */}
      <aside className="relative hidden overflow-hidden bg-slate-950 text-white lg:block">
        <div className="bg-grid absolute inset-0" />
        <div className="animate-blob absolute -left-20 top-10 h-96 w-96 rounded-full bg-brand-blue/40 blur-[110px]" />
        <div className="animate-blob absolute -bottom-10 right-0 h-80 w-80 rounded-full bg-brand-teal/30 blur-[110px]" style={{ animationDelay: "-6s" }} />
        <div className="relative flex h-full flex-col justify-center px-14">
          <h2 className="text-4xl font-black leading-[1.5]">
            ربات شما،
            <br />
            <span className="text-gradient">چند دقیقه با شما فاصله دارد</span>
          </h2>
          <ul className="mt-10 space-y-5">
            {[
              { icon: Zap, text: "راه‌اندازی در کمتر از ۵ دقیقه، بدون کدنویسی" },
              { icon: MessageCircle, text: "پاسخ‌گویی خودکار ۲۴ ساعته به مشتری‌ها" },
              { icon: ShieldCheck, text: "۵ پیام اول رایگان — بدون کارت بانکی" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-white/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-12 w-fit rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="font-bold">ربات شما آنلاین است</span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

/** Segmented code input — one real <input> underneath so paste/autofill work. */
function OtpInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative" dir="ltr">
      <label htmlFor="code" className="sr-only">
        کد تایید
      </label>
      <input
        id="code"
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={CODE_LENGTH}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, CODE_LENGTH))}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="absolute inset-0 z-10 w-full cursor-text opacity-0"
        autoFocus
      />
      <div className="grid grid-cols-5 gap-2.5">
        {Array.from({ length: CODE_LENGTH }, (_, i) => {
          const char = value[i];
          const active = focused && (i === value.length || (i === CODE_LENGTH - 1 && value.length === CODE_LENGTH));
          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-2xl border-2 text-2xl font-black transition ${
                active
                  ? "border-brand-blue bg-white ring-4 ring-brand-blue/10"
                  : char
                    ? "border-brand-ink/20 bg-white text-brand-ink"
                    : "border-slate-200 bg-slate-50"
              }`}
            >
              {char ? <span className="animate-pop-in">{char}</span> : active && <span className="h-6 w-0.5 animate-pulse bg-brand-blue" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
