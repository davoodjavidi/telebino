import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Mail, MapPin, Send, Timer } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { CONTACT_INFO } from "@/lib/contact-info";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "سوالی درباره‌ی ساخت ربات تلگرام، خرید اشتراک یا پشتیبانی تلبینو دارید؟ از طریق فرم تماس، تلگرام یا ایمیل با ما در ارتباط باشید.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Send,
    title: "پشتیبانی تلگرام",
    value: `@${CONTACT_INFO.telegramUsername}`,
    desc: "سریع‌ترین راه ارتباط",
    href: `https://t.me/${CONTACT_INFO.telegramUsername}`,
    tone: "from-brand-blue to-[#6c9bff]",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: CONTACT_INFO.email,
    desc: "برای درخواست‌های رسمی و همکاری",
    href: `mailto:${CONTACT_INFO.email}`,
    tone: "from-brand-accent to-[#ff9a5a]",
  },
];

const quickAnswers = [
  { q: "آیا برای ساخت ربات به برنامه‌نویسی نیاز دارم؟", a: "خیر — همه‌چیز با چند کلیک از داخل پنل انجام می‌شود." },
  { q: "می‌توانم قبل از خرید امتحان کنم؟", a: "بله، ۵ پیام اول هر ربات رایگان است و کارت بانکی لازم نیست." },
  { q: "پلنم را بعداً می‌توانم تغییر دهم؟", a: "بله، هر زمان از صفحه‌ی اشتراک پنل ارتقا یا تغییر دهید." },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-x-clip bg-slate-50">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-slate-950 pb-44 pt-36 text-center text-white">
          <div className="bg-grid absolute inset-0 -z-10" />
          <div className="animate-blob absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-brand-blue/40 blur-[120px]" />
          <div
            className="animate-blob absolute -left-16 top-32 -z-10 h-80 w-80 rounded-full bg-brand-teal/30 blur-[120px]"
            style={{ animationDelay: "-6s" }}
          />
          <div className="animate-fade-in-up mx-auto max-w-2xl px-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white/80 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              پاسخ‌گویی در {CONTACT_INFO.responseTime}
            </span>
            <h1 className="mt-7 text-4xl font-black leading-[1.4] sm:text-5xl">
              حرف بزنیم؛ <span className="text-gradient">ما گوش می‌دهیم</span>
            </h1>
            <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
              برای انتخاب پلن مناسب، راه‌اندازی ربات یا هر سوال دیگری، تیم تلبینو کنار شماست.
            </p>
          </div>
        </section>

        {/* Form + channels */}
        <section className="relative mx-auto -mt-28 max-w-6xl px-5 pb-24">
          <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5">
              <Reveal>
                <div className="rounded-[2rem] bg-white shadow-2xl shadow-slate-300/40">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="space-y-5">
              {channels.map(({ icon: Icon, title, value, desc, href, tone }, i) => (
                <Reveal key={title} delay={i * 100}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-lg ${tone}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-brand-muted">{title}</p>
                      <p className="mt-0.5 truncate text-base font-extrabold text-brand-ink" dir="ltr">
                        {value}
                      </p>
                      <p className="mt-0.5 text-xs text-brand-muted">{desc}</p>
                    </div>
                    <ArrowLeft className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:-translate-x-1 group-hover:text-brand-blue" />
                  </a>
                </Reveal>
              ))}

              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-3xl bg-brand-ink p-6 text-white">
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/40 blur-3xl" />
                  <ul className="relative space-y-4 text-sm">
                    <InfoRow icon={Clock} label="ساعات پاسخ‌گویی" value={CONTACT_INFO.hours} />
                    <InfoRow icon={Timer} label="زمان پاسخ" value={CONTACT_INFO.responseTime} />
                    <InfoRow icon={MapPin} label="دفتر" value={CONTACT_INFO.city} />
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-extrabold text-brand-ink">شاید جواب‌تان همین‌جا باشد</p>
                  <div className="mt-4 space-y-2">
                    {quickAnswers.map((f) => (
                      <details key={f.q} className="group rounded-2xl bg-slate-50 px-4 open:bg-brand-bg-cool">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-bold text-brand-ink [&::-webkit-details-marker]:hidden">
                          {f.q}
                          <span className="text-brand-muted transition group-open:rotate-45">+</span>
                        </summary>
                        <p className="pb-3 text-sm leading-7 text-brand-muted">{f.a}</p>
                      </details>
                    ))}
                  </div>
                  <Link href="/#faq" className="mt-4 inline-block text-sm font-bold text-brand-blue hover:text-brand-blue-dark">
                    همه‌ی سوالات متداول ←
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-4.5 w-4.5 text-brand-teal" />
      </span>
      <div>
        <p className="text-xs text-white/50">{label}</p>
        <p className="mt-0.5 font-bold">{value}</p>
      </div>
    </li>
  );
}
