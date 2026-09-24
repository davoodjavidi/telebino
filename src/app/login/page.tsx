"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ApiError, requestOtp, tokenStorage, verifyOtp } from "@/lib/api";

const PHONE_PATTERN = /^09\d{9}$/;

export default function LoginPage() {
  const router = useRouter();
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
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ارتباط با سرور برقرار نشد");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-brand-bg-cool px-5 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/60">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-white font-extrabold">
            ت
          </span>
          <span className="text-lg font-extrabold text-brand-ink">تلبینو</span>
        </Link>

        {step === "phone" ? (
          <form onSubmit={handlePhoneSubmit} className="mt-8 space-y-5">
            <div className="text-center">
              <h1 className="text-lg font-extrabold text-brand-ink">ورود به پنل</h1>
              <p className="mt-1 text-sm text-brand-muted">
                شماره موبایل‌تان را وارد کنید تا کد تایید ارسال شود
              </p>
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-brand-ink">
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-center text-base tracking-wider text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                autoFocus
              />
            </div>
            {error && <p className="text-center text-sm font-medium text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-brand-accent py-3 text-sm font-bold text-white transition hover:bg-brand-accent-dark disabled:opacity-60"
            >
              {loading ? "در حال ارسال..." : "دریافت کد تایید"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="mt-8 space-y-5">
            <div className="text-center">
              <h1 className="text-lg font-extrabold text-brand-ink">کد تایید را وارد کنید</h1>
              <p className="mt-1 text-sm text-brand-muted">
                کد ۵ رقمی ارسال‌شده به <span dir="ltr">{phone}</span> را وارد کنید
              </p>
            </div>
            <div>
              <label htmlFor="code" className="mb-1.5 block text-sm font-bold text-brand-ink">
                کد تایید
              </label>
              <input
                id="code"
                type="text"
                inputMode="numeric"
                dir="ltr"
                maxLength={5}
                placeholder="•••••"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-center text-2xl tracking-[0.5em] text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="businessName" className="mb-1.5 block text-sm font-bold text-brand-ink">
                نام کسب‌وکار <span className="font-normal text-brand-muted">(برای ورود اول)</span>
              </label>
              <input
                id="businessName"
                type="text"
                placeholder="مثلاً فروشگاه نمونه"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            {error && <p className="text-center text-sm font-medium text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading || code.length !== 5}
              className="w-full rounded-full bg-brand-accent py-3 text-sm font-bold text-white transition hover:bg-brand-accent-dark disabled:opacity-60"
            >
              {loading ? "در حال بررسی..." : "ورود"}
            </button>
            <button
              type="button"
              onClick={() => setStep("phone")}
              className="w-full text-center text-xs font-bold text-brand-muted transition hover:text-brand-blue"
            >
              تغییر شماره موبایل
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
