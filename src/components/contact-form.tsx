"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  CircleHelp,
  CreditCard,
  Handshake,
  Loader2,
  MessageSquareText,
  RotateCcw,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { ApiError, contactApi, type ContactTopic } from "@/lib/api";
import { CONTACT_INFO } from "@/lib/contact-info";

const PHONE_PATTERN = /^09\d{9}$/;
const MESSAGE_MAX = 2000;

const topics: { value: ContactTopic; label: string; icon: typeof ShoppingBag }[] = [
  { value: "SALES", label: "مشاوره‌ی خرید", icon: ShoppingBag },
  { value: "SUPPORT", label: "پشتیبانی فنی", icon: Wrench },
  { value: "BILLING", label: "پرداخت و اشتراک", icon: CreditCard },
  { value: "PARTNERSHIP", label: "همکاری", icon: Handshake },
  { value: "OTHER", label: "سایر", icon: CircleHelp },
];

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const emptyForm = { name: "", phone: "", email: "", message: "", website: "" };

export function ContactForm() {
  const [topic, setTopic] = useState<ContactTopic>("SALES");
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  function update(field: keyof typeof emptyForm, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (field in errors) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "نام‌تان را وارد کنید";
    if (!PHONE_PATTERN.test(form.phone)) next.phone = "شماره موبایل معتبر نیست (مثال: 09123456789)";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "ایمیل معتبر نیست";
    if (form.message.trim().length < 10) next.message = "پیام باید حداقل ۱۰ کاراکتر باشد";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    const found = validate();
    setErrors(found);
    if (Object.values(found).some(Boolean)) return;

    setSending(true);
    try {
      await contactApi.send({
        topic,
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        message: form.message,
        website: form.website || undefined,
      });
      setSentTo(form.name.trim());
      setForm(emptyForm);
    } catch (err) {
      setServerError(err instanceof ApiError ? err.message : "ارتباط با سرور برقرار نشد، دوباره تلاش کنید");
    } finally {
      setSending(false);
    }
  }

  if (sentTo) {
    return (
      <div className="animate-fade-in-up flex min-h-[520px] flex-col items-center justify-center px-6 py-12 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-teal shadow-[0_0_60px_rgba(18,179,161,0.45)]">
          <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" className="animate-check-draw" />
          </svg>
        </div>
        <h2 className="mt-7 text-2xl font-black text-brand-ink">ممنون {sentTo}، پیام‌تان رسید!</h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-brand-muted">
          همکاران ما در {CONTACT_INFO.responseTime} با شماره‌ای که وارد کردید تماس می‌گیرند یا پیام می‌دهند.
        </p>
        <button
          onClick={() => setSentTo(null)}
          className="mt-8 flex items-center gap-2 rounded-full bg-brand-ink/5 px-5 py-2.5 text-sm font-bold text-brand-ink transition hover:bg-brand-ink hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
          ارسال پیام دیگر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6 p-6 sm:p-9">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-black text-brand-ink">
          <MessageSquareText className="h-6 w-6 text-brand-blue" />
          برای ما پیام بفرستید
        </h2>
        <p className="mt-2 text-sm text-brand-muted">فیلدهای ستاره‌دار الزامی هستند.</p>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-bold text-brand-ink">موضوع پیام</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map(({ value, label, icon: Icon }) => {
            const active = topic === value;
            return (
              <label
                key={value}
                className={`flex cursor-pointer items-center gap-1.5 rounded-full border-2 px-4 py-2 text-sm font-bold transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-blue/20 ${
                  active
                    ? "border-brand-blue bg-brand-blue text-white shadow-lg shadow-brand-blue/25"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={value}
                  checked={active}
                  onChange={() => setTopic(value)}
                  className="sr-only"
                />
                <Icon className="h-4 w-4" />
                {label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="نام و نام خانوادگی" required error={errors.name}>
          <input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="مثلاً سارا محمدی"
            autoComplete="name"
            maxLength={80}
            className={inputClass(errors.name)}
          />
        </Field>
        <Field id="phone" label="شماره موبایل" required error={errors.phone}>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            dir="ltr"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value.trim())}
            placeholder="09123456789"
            autoComplete="tel"
            className={`${inputClass(errors.phone)} text-right placeholder:text-right`}
          />
        </Field>
      </div>

      <Field id="email" label="ایمیل" hint="(اختیاری)" error={errors.email}>
        <input
          id="email"
          type="email"
          dir="ltr"
          value={form.email}
          onChange={(e) => update("email", e.target.value.trim())}
          placeholder="you@example.com"
          autoComplete="email"
          className={`${inputClass(errors.email)} text-right placeholder:text-right`}
        />
      </Field>

      <Field id="message" label="پیام شما" required error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value.slice(0, MESSAGE_MAX))}
          placeholder="سوال یا درخواست‌تان را با جزئیات بنویسید..."
          className={`${inputClass(errors.message)} resize-none leading-7`}
        />
        <p className="mt-1.5 text-left text-xs text-brand-muted">
          {form.message.length.toLocaleString("fa-IR")} / {MESSAGE_MAX.toLocaleString("fa-IR")}
        </p>
      </Field>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">وب‌سایت</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {serverError && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand-accent py-4 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(255,106,57,0.8)] transition hover:bg-brand-accent-dark disabled:opacity-70 shimmer"
      >
        {sending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            در حال ارسال...
          </>
        ) : (
          <>
            ارسال پیام
            <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-2xl border-2 bg-white px-4 py-3.5 text-sm text-brand-ink outline-none transition placeholder:text-slate-400 focus:ring-4 ${
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10"
  }`;
}

function Field({
  id,
  label,
  hint,
  required = false,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-brand-ink">
        {label}
        {required && <span className="mr-0.5 text-brand-accent">*</span>}
        {hint && <span className="mr-1 font-normal text-brand-muted">{hint}</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
