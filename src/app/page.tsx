import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  Check,
  ClipboardList,
  Clock,
  GraduationCap,
  Megaphone,
  MessageCircleQuestion,
  MoonStar,
  PackageSearch,
  Repeat,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Users2,
  X,
  Zap,
} from "lucide-react";
import { BotDemo } from "@/components/landing/bot-demo";
import { Pricing } from "@/components/landing/pricing";
import { Reveal } from "@/components/landing/reveal";
import { Logo, SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <UseCaseMarquee />
        <BeforeAfter />
        <Features />
        <Audiences />
        <HowItWorks />
        <PricingSection />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pb-24 pt-32 text-white md:pb-32 md:pt-40">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="animate-blob absolute -right-32 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/40 blur-[120px]" />
      <div
        className="animate-blob absolute -left-20 top-60 -z-10 h-[24rem] w-[24rem] rounded-full bg-brand-teal/30 blur-[120px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-brand-accent/25 blur-[110px]"
        style={{ animationDelay: "-9s" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-in-up text-center lg:text-right">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-3 pr-1.5 text-xs font-bold text-white/80 backdrop-blur transition hover:border-white/30"
          >
            <span className="rounded-full bg-brand-accent px-2 py-0.5 text-white">جدید</span>
            فروش دوره‌ی ویدیویی مستقیم داخل تلگرام
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
          </a>

          <h1 className="mt-7 text-4xl font-black leading-[1.35] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            ربات تلگرامی که
            <br />
            <span className="text-gradient">شبانه‌روز جای شما</span>
            <br />
            جواب می‌دهد و می‌فروشد
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg lg:mx-0">
            بدون یک خط کد، در کمتر از ۵ دقیقه ربات اختصاصی فروشگاه، آموزشگاه یا مرکز مشاوره‌تان را بسازید.
            کاتالوگ محصول، پیگیری سفارش، فروش دوره و فرم رزرو — همه در یک پنل فارسی.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/login"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-8px_rgba(255,106,57,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-accent-dark shimmer"
            >
              ساخت رایگان ربات
              <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" />
            </Link>
            <a
              href="#pricing"
              className="rounded-full border border-white/15 px-7 py-4 text-base font-bold text-white/85 transition hover:border-white/40 hover:bg-white/5"
            >
              مشاهده‌ی قیمت‌ها
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/55 lg:justify-start">
            {["۵ پیام اول رایگان", "بدون کارت بانکی", "لغو در هر زمان"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-teal" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div id="demo" className="flex scroll-mt-28 justify-center">
          <div className="relative w-full max-w-[360px]">
            <FloatingChip className="-left-32 top-28" delay="0s" icon={Zap} title="پاسخ آنی" sub="کمتر از ۱ ثانیه" tone="accent" />
            <FloatingChip className="-left-40 top-[300px]" delay="-1.5s" icon={MoonStar} title="۳ بامداد" sub="ربات هنوز بیدار است" tone="blue" />
            <FloatingChip className="-left-28 bottom-16" delay="-3s" icon={ShoppingBag} title="سفارش جدید" sub="همین الان ثبت شد" tone="teal" />
            <BotDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  className,
  delay,
  icon: Icon,
  title,
  sub,
  tone,
}: {
  className: string;
  delay: string;
  icon: typeof Zap;
  title: string;
  sub: string;
  tone: "accent" | "blue" | "teal";
}) {
  const tones = {
    accent: "bg-brand-accent",
    blue: "bg-brand-blue",
    teal: "bg-brand-teal",
  };
  return (
    <div
      className={`animate-float absolute z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-white/10 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl xl:flex ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${tones[tone]}`}>
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-xs font-extrabold text-white">{title}</p>
        <p className="text-[11px] text-white/60">{sub}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Use-case marquee
// ---------------------------------------------------------------------------

const useCases = [
  "👗 فروشگاه پوشاک",
  "📚 آموزشگاه زبان",
  "🧠 کلینیک روان‌شناسی",
  "💄 فروشگاه آرایشی",
  "🎨 دوره‌ی طراحی",
  "🥗 مشاوره‌ی تغذیه",
  "📱 فروشگاه موبایل",
  "🧮 کلاس کنکور",
  "⚖️ دفتر مشاوره‌ی حقوقی",
  "🍰 شیرینی‌پزی خانگی",
];

function UseCaseMarquee() {
  return (
    <div className="relative border-b border-slate-100 bg-white py-6">
      <p className="mb-4 text-center text-xs font-bold text-brand-muted">مناسب برای هر کسب‌وکاری که در تلگرام مشتری دارد</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {[...useCases, ...useCases].map((u, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600"
            >
              {u}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Before / after
// ---------------------------------------------------------------------------

function BeforeAfter() {
  const before = [
    "جواب دادن به «قیمتش چنده؟» برای صدمین بار",
    "پیام‌هایی که نیمه‌شب می‌رسند و صبح بی‌جواب مانده‌اند",
    "مشتری‌ای که برای پیگیری سفارش سه بار پیام می‌دهد",
    "فرستادن دستی لینک دوره برای هر دانشجو",
  ];
  const after = [
    "ربات سوالات تکراری را خودش و فوراً جواب می‌دهد",
    "۲۴ ساعته، ۷ روز هفته، حتی در تعطیلات",
    "مشتری با شماره سفارش، وضعیتش را همان لحظه می‌بیند",
    "دسترسی به ویدیوهای دوره بعد از تایید پرداخت، خودکار",
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="چرا تلبینو؟"
            title="وقت‌تان را برای کارهای مهم‌تر نگه دارید"
            desc="بیشتر پیام‌های مشتری‌ها تکراری‌اند. بگذارید ربات جواب‌شان را بدهد."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-extrabold text-slate-500">بدون تلبینو</p>
              <ul className="mt-6 space-y-4">
                {before.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-500">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <X className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="leading-7 line-through decoration-slate-300">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-brand-blue to-[#1b4fc4] p-8 text-white shadow-2xl shadow-brand-blue/30">
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <p className="relative text-sm font-extrabold text-white/80">با تلبینو</p>
              <ul className="relative mt-6 space-y-4">
                {after.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="leading-7 font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "۰", label: "خط کد لازم است" },
              { value: "< ۵ دقیقه", label: "تا اولین ربات فعال" },
              { value: "۲۴/۷", label: "پاسخ‌گویی بدون وقفه" },
              { value: "۱۰۰٪", label: "فارسی و راست‌چین" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-black text-brand-ink">{s.value}</p>
                <p className="mt-1.5 text-sm text-brand-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Features (bento)
// ---------------------------------------------------------------------------

function Features() {
  return (
    <section id="features" className="bg-dots scroll-mt-20 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="امکانات"
            title="یک جعبه‌ابزار کامل، نه فقط یک ربات"
            desc="هر چیزی که برای فروش و پشتیبانی داخل تلگرام لازم دارید، از همان روز اول."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <BentoCard
              icon={MessageCircleQuestion}
              title="پاسخ‌گویی خودکار هوشمند"
              desc="سوال را هر طور که مشتری بپرسد — با غلط تایپی یا عبارت متفاوت — ربات جواب درست را پیدا می‌کند."
            >
              <div className="mt-6 space-y-2.5">
                {[
                  { q: "قیمتش چنده؟", m: 98 },
                  { q: "قیمت این مدل چقدره", m: 94 },
                  { q: "چند میدین اینو؟", m: 87 },
                ].map((r) => (
                  <div key={r.q} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                    <span className="text-slate-600">«{r.q}»</span>
                    <span className="flex items-center gap-2 text-xs font-bold text-brand-teal">
                      <span className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200">
                        <span className="block h-full rounded-full bg-brand-teal" style={{ width: `${r.m}%` }} />
                      </span>
                      {r.m.toLocaleString("fa-IR")}٪
                    </span>
                  </div>
                ))}
                <p className="pt-1 text-xs text-brand-muted">← همه به پاسخ «قیمت محصولات» می‌رسند</p>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="md:col-span-2" delay={80}>
            <BentoCard icon={PackageSearch} title="پیگیری سفارش" desc="مشتری شماره سفارش را می‌فرستد و وضعیت را همان لحظه می‌بیند.">
              <div className="mt-6 space-y-3">
                {[
                  { s: "ثبت شد", done: true },
                  { s: "در حال آماده‌سازی", done: true },
                  { s: "ارسال شد", done: true },
                  { s: "تحویل", done: false },
                ].map((step, i) => (
                  <div key={step.s} className="flex items-center gap-3 text-sm">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                        step.done ? "bg-brand-teal text-white" : "border-2 border-dashed border-slate-300 text-slate-400"
                      }`}
                    >
                      {step.done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : (i + 1).toLocaleString("fa-IR")}
                    </span>
                    <span className={step.done ? "font-bold text-brand-ink" : "text-slate-400"}>{step.s}</span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="md:col-span-2">
            <BentoCard icon={GraduationCap} title="فروش دوره‌ی ویدیویی" desc="ویدیوها را آپلود کنید؛ بعد از پرداخت، دانشجو داخل ربات به جلسات دسترسی دارد." dark>
              <div className="mt-6 space-y-2">
                {["جلسه ۱ — مقدمه", "جلسه ۲ — مفاهیم پایه", "جلسه ۳ — پروژه"].map((l, i) => (
                  <div key={l} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/80">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${i < 2 ? "bg-brand-accent" : "bg-white/10"}`}>▶</span>
                    {l}
                  </div>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="md:col-span-2" delay={80}>
            <BentoCard icon={Megaphone} title="پیام همگانی" desc="تخفیف یا محصول جدید را با یک کلیک برای همه‌ی مشتری‌ها بفرستید.">
              <div className="mt-6 rounded-2xl bg-linear-to-br from-brand-accent/10 to-brand-accent/5 p-4">
                <p className="text-sm font-bold text-brand-ink">🔥 حراج آخر هفته شروع شد!</p>
                <p className="mt-1 text-xs text-brand-muted">ارسال به ۲٬۴۸۰ مشتری</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-4/5 rounded-full bg-brand-accent" />
                </div>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="md:col-span-2" delay={160}>
            <BentoCard icon={BarChart3} title="گزارش‌های دقیق" desc="مشتریان جدید، پیام‌ها و سوالات بی‌پاسخ را در یک نگاه ببینید.">
              <div className="mt-6 flex h-24 items-end gap-2">
                {[35, 55, 40, 70, 60, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-linear-to-t from-brand-blue to-brand-teal"
                    style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }}
                  />
                ))}
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="md:col-span-3">
            <BentoCard icon={ClipboardList} title="فرم‌ساز" desc="فرم ثبت‌نام دوره یا رزرو نوبت بسازید؛ ربات سوال‌ها را یکی‌یکی از مشتری می‌پرسد و پاسخ‌ها در پنل ذخیره می‌شود." />
          </Reveal>
          <Reveal className="md:col-span-3" delay={80}>
            <BentoCard icon={Users} title="مدیریت تیم" desc="همکاران‌تان را با نقش کارمند اضافه کنید تا سفارش‌ها و سوالات را با هم مدیریت کنید." />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  desc,
  dark = false,
  children,
}: {
  icon: typeof Bot;
  title: string;
  desc: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`group h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${
        dark
          ? "bg-brand-ink text-white shadow-xl shadow-slate-900/20"
          : "border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/60"
      }`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition group-hover:scale-110 ${
          dark ? "bg-white/10 text-white" : "bg-brand-blue/10 text-brand-blue"
        }`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={`mt-5 text-lg font-extrabold ${dark ? "text-white" : "text-brand-ink"}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-7 ${dark ? "text-white/60" : "text-brand-muted"}`}>{desc}</p>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Audiences
// ---------------------------------------------------------------------------

const audiences = [
  {
    icon: ShoppingBag,
    title: "فروشگاه‌های آنلاین",
    gradient: "from-brand-accent to-[#ff9a5a]",
    points: ["کاتالوگ محصول با عکس و قیمت", "پیگیری سفارش با کد رهگیری", "اطلاع‌رسانی خودکار تغییر وضعیت"],
  },
  {
    icon: GraduationCap,
    title: "مجموعه‌های آموزشی",
    gradient: "from-brand-blue to-[#6c9bff]",
    points: ["فروش و تحویل دوره‌ی ویدیویی", "کنترل دسترسی هر دانشجو", "فرم ثبت‌نام کلاس‌ها"],
  },
  {
    icon: Users2,
    title: "مراکز مشاوره",
    gradient: "from-brand-teal to-[#4fd6c6]",
    points: ["فرم رزرو نوبت", "پاسخ به سوالات رایج مراجعان", "پیام یادآوری همگانی"],
  },
];

function Audiences() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="برای چه کسانی؟"
            title="ساخته‌شده برای کسب‌وکار شما"
            desc="تلبینو با نوع کسب‌وکارتان تطبیق پیدا می‌کند — منوها و امکانات مخصوص خودتان."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, gradient, points }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-transparent hover:shadow-2xl hover:shadow-slate-200">
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-l ${gradient}`} />
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-lg ${gradient}`}>
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-brand-ink">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Check className="h-4 w-4 shrink-0 text-brand-teal" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

const steps = [
  { icon: Zap, title: "ثبت‌نام با موبایل", desc: "با شماره موبایل و یک کد تایید، در چند ثانیه وارد پنل شوید." },
  { icon: Bot, title: "اتصال ربات", desc: "توکن ربات را از BotFather بگیرید و در پنل بچسبانید. همین!" },
  { icon: ClipboardList, title: "تکمیل اطلاعات", desc: "محصولات، سوالات متداول و فرم‌ها را با چند کلیک اضافه کنید." },
  { icon: Sparkles, title: "ربات فعال است", desc: "از این لحظه ربات شبانه‌روز به مشتری‌ها جواب می‌دهد." },
];

function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 overflow-hidden bg-slate-950 py-24 text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="شروع در ۴ قدم"
            title="از ثبت‌نام تا ربات فعال، کمتر از ۵ دقیقه"
            desc="بدون برنامه‌نویس، بدون سرور، بدون دردسر."
          />
        </Reveal>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute inset-x-[12%] top-8 hidden h-px bg-linear-to-l from-brand-blue via-brand-teal to-brand-accent md:block" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="relative text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-brand-blue/20">
                  <Icon className="h-7 w-7 text-brand-teal" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-xs font-black">
                    {(i + 1).toLocaleString("fa-IR")}
                  </span>
                </span>
                <h3 className="mt-6 text-base font-extrabold">{title}</h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-7 text-white/55">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-linear-to-b from-brand-bg-cool to-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="قیمت‌ها"
            title="شفاف، ساده، بدون هزینه‌ی پنهان"
            desc="پلنی را انتخاب کنید که با اندازه‌ی کسب‌وکارتان جور است. هر زمان خواستید ارتقا دهید."
          />
        </Reveal>
        <Pricing />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold text-brand-muted">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-brand-teal" />
            پرداخت امن با درگاه زرین‌پال
          </span>
          <span className="flex items-center gap-2">
            <Repeat className="h-5 w-5 text-brand-teal" />
            تغییر پلن در هر زمان
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-brand-teal" />
            فعال‌سازی فوری بعد از پرداخت
          </span>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

const faqs = [
  {
    q: "برای ساخت ربات نیاز به برنامه‌نویسی دارم؟",
    a: "خیر. همه‌چیز از داخل پنل و با چند کلیک انجام می‌شود. فقط کافی است یک ربات در BotFather تلگرام بسازید و توکن آن را در پنل وارد کنید.",
  },
  {
    q: "آیا می‌توانم قبل از خرید امتحان کنم؟",
    a: "بله. بعد از ثبت‌نام، ۵ پیام اول هر ربات رایگان است تا ببینید ربات دقیقاً چطور به مشتری‌ها جواب می‌دهد — بدون نیاز به کارت بانکی.",
  },
  {
    q: "اگر پیام‌های ماهانه‌ام تمام شود چه می‌شود؟",
    a: "در پنل، میزان مصرف را همیشه می‌بینید و هر زمان بخواهید با یک کلیک به پلن بالاتر ارتقا می‌دهید.",
  },
  {
    q: "پرداخت چطور انجام می‌شود؟",
    a: "پرداخت از طریق درگاه امن زرین‌پال و با همه‌ی کارت‌های عضو شتاب انجام می‌شود و اشتراک بلافاصله فعال می‌شود.",
  },
  {
    q: "می‌توانم چند ربات برای چند کسب‌وکار داشته باشم؟",
    a: "بله. پلن کسب‌وکار تا ۳ ربات و پلن حرفه‌ای تا ۲۰ ربات را پشتیبانی می‌کند.",
  },
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeading eyebrow="سوالات متداول" title="سوالی دارید؟" desc="جواب پرتکرارترین سوال‌ها اینجاست." />
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-slate-200 bg-white px-6 transition open:border-brand-blue/30 open:bg-brand-bg-cool/50 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-bold text-brand-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-brand-muted transition group-open:rotate-45 group-open:bg-brand-blue group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-8 text-brand-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Final CTA + footer
// ---------------------------------------------------------------------------

function FinalCta() {
  return (
    <section className="bg-white px-5 pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-20 text-center text-white">
          <div className="bg-grid absolute inset-0" />
          <div className="animate-blob absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-blue/50 blur-[100px]" />
          <div className="animate-blob absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-brand-accent/40 blur-[100px]" style={{ animationDelay: "-6s" }} />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-[1.5] sm:text-4xl">
              همین امشب، ربات‌تان جای شما <span className="text-gradient">بیدار می‌ماند</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/60">
              ثبت‌نام رایگان است. در کمتر از ۵ دقیقه اولین ربات‌تان را بسازید و ببینید چقدر وقت‌تان آزاد می‌شود.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/login"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand-accent px-9 py-4 text-base font-bold text-white shadow-[0_10px_40px_-8px_rgba(255,106,57,0.7)] transition hover:-translate-y-0.5 shimmer"
              >
                ساخت رایگان ربات
                <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" />
              </Link>
              <a href="#pricing" className="text-sm font-bold text-white/70 transition hover:text-white">
                یا مستقیم یک پلن بخرید ←
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-7 text-brand-muted">
            پلتفرم ساخت ربات تلگرام بدون کدنویسی برای فروشگاه‌ها، آموزشگاه‌ها و مراکز مشاوره‌ی ایرانی.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold text-brand-ink">محصول</p>
          <nav className="mt-4 grid gap-2.5 text-sm text-brand-muted">
            <a href="#features" className="transition hover:text-brand-blue">امکانات</a>
            <a href="#pricing" className="transition hover:text-brand-blue">قیمت‌ها</a>
            <a href="#faq" className="transition hover:text-brand-blue">سوالات متداول</a>
          </nav>
        </div>
        <div>
          <p className="text-sm font-extrabold text-brand-ink">حساب کاربری</p>
          <nav className="mt-4 grid gap-2.5 text-sm text-brand-muted">
            <Link href="/login" className="transition hover:text-brand-blue">ورود به پنل</Link>
            <Link href="/login" className="transition hover:text-brand-blue">ثبت‌نام رایگان</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} تلبینو — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-3.5 py-1 text-xs font-extrabold ${
          dark ? "bg-white/10 text-brand-teal" : "bg-brand-accent/10 text-brand-accent"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-black leading-[1.45] sm:text-4xl ${dark ? "text-white" : "text-brand-ink"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 ${dark ? "text-white/60" : "text-brand-muted"}`}>{desc}</p>
    </div>
  );
}
