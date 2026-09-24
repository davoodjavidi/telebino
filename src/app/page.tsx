import Link from "next/link";
import {
  BarChart3,
  Check,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  MessageCircleQuestion,
  Package,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  Users2,
  Zap,
} from "lucide-react";

const steps = [
  {
    title: "ثبت‌نام سریع",
    desc: "با شماره موبایل‌تان در چند ثانیه وارد پنل شوید؛ بدون فرم‌های طولانی.",
  },
  {
    title: "ساخت ربات",
    desc: "با راهنمای گام‌به‌گام، ربات تلگرامی اختصاصی‌تان را در چند دقیقه بسازید.",
  },
  {
    title: "تکمیل اطلاعات",
    desc: "محصولات، سوالات متداول، ساعت کاری و منوی ربات را وارد کنید.",
  },
  {
    title: "فعال‌سازی و رشد",
    desc: "ربات‌تان آماده‌ست و به‌صورت خودکار به مشتری‌ها پاسخ می‌دهد.",
  },
];

const audiences = [
  {
    icon: ShoppingBag,
    title: "فروشگاه‌های آنلاین",
    desc: "کاتالوگ محصولات، پیگیری خودکار سفارش و پاسخ به سوالات پرتکرار مشتری‌ها را کاملاً خودکار کنید.",
  },
  {
    icon: GraduationCap,
    title: "مجموعه‌های آموزشی",
    desc: "دسترسی به محتوای دوره‌ها را بر اساس شماره دانش‌آموزی، بدون دخالت دستی، مدیریت کنید.",
  },
  {
    icon: Users2,
    title: "مراکز مشاوره",
    desc: "با فرم‌های رزرو نوبت و پاسخ‌گویی خودکار به سوالات رایج، وقت بیشتری برای مشتری‌هایتان بگذارید.",
  },
];

const features = [
  { icon: Package, title: "کاتالوگ محصولات", desc: "افزودن و مدیریت محصولات یا خدمات به‌سادگی یک فرم." },
  { icon: MessageCircleQuestion, title: "سوالات متداول هوشمند", desc: "پاسخ خودکار به پرتکرارترین سوالات مشتری‌ها." },
  { icon: Truck, title: "پیگیری سفارش", desc: "مشتری با وارد کردن شماره سفارش، وضعیتش را همان لحظه ببیند." },
  { icon: ClipboardList, title: "فرم‌ساز", desc: "فرم ثبت‌نام و درخواست بسازید؛ مناسب دوره‌ها و رزرو نوبت." },
  { icon: BarChart3, title: "گزارش‌ها و آمار", desc: "ورود کاربران، سفارش‌ها و سوالات بی‌پاسخ را در یک داشبورد ببینید." },
  { icon: Megaphone, title: "پیام همگانی", desc: "اطلاعیه یا تخفیف را با یک کلیک به همه‌ی مشتری‌ها بفرستید." },
  { icon: Users, title: "مدیریت تیم", desc: "با نقش مالک و کارمند، کار پنل را بین تیم‌تان تقسیم کنید." },
  { icon: LayoutDashboard, title: "پنل کاربری ساده", desc: "بدون نیاز به دانش فنی؛ همه‌چیز با چند کلیک." },
];

const plans = [
  {
    name: "پایه",
    tagline: "برای شروع کار",
    features: ["۱ ربات تلگرامی", "کاتالوگ محصولات و سوالات متداول", "پیگیری سفارش", "۵ پیام اول هر ربات رایگان"],
    highlighted: false,
  },
  {
    name: "کسب‌وکار",
    tagline: "محبوب‌ترین انتخاب",
    features: ["چند ربات تلگرامی", "فرم‌ساز و گزارش‌های کامل", "افزودن اعضای تیم", "پیام همگانی"],
    highlighted: true,
  },
  {
    name: "حرفه‌ای",
    tagline: "برای مجموعه‌های بزرگ",
    features: ["حجم پیام بالا", "تعداد نامحدود ربات", "پشتیبانی اولویت‌دار", "حذف برند تلبینو از ربات"],
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Audiences />
        <Features />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-white font-extrabold">
            ت
          </span>
          <span className="text-lg font-extrabold text-brand-ink">تلبینو</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="transition hover:text-brand-blue">امکانات</a>
          <a href="#audiences" className="transition hover:text-brand-blue">مناسب چه کسانی؟</a>
          <a href="#pricing" className="transition hover:text-brand-blue">قیمت‌گذاری</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-brand-blue sm:inline"
          >
            ورود
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-orange-200 transition hover:bg-brand-accent-dark"
          >
            شروع رایگان
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg-cool">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center">
        <div className="h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl sm:h-96 sm:w-96" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/10 px-3.5 py-1.5 text-xs font-bold text-brand-teal">
            <Sparkles className="h-3.5 w-3.5" />
            بدون نیاز به دانش فنی یا برنامه‌نویسی
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.4] text-brand-ink sm:text-4xl md:text-[2.75rem]">
            ربات تلگرامی کسب‌وکارتان را
            <span className="text-brand-blue"> بدون کدنویسی </span>
            بسازید
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-brand-muted sm:text-lg">
            تلبینو به فروشگاه‌های آنلاین، مجموعه‌های آموزشی و مراکز مشاوره کمک می‌کند در چند دقیقه یک ربات تلگرامی حرفه‌ای داشته باشند — پاسخ‌گوی خودکار، پیگیری سفارش و همه‌چیز در یک پنل ساده.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/login"
              className="rounded-full bg-brand-accent px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-brand-accent-dark"
            >
              شروع رایگان
            </Link>
            <a href="#how" className="text-base font-bold text-brand-blue transition hover:text-brand-blue-dark">
              چطور کار می‌کند؟ ←
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-brand-muted">
            ۵ پیام اول هر ربات رایگان — بدون نیاز به کارت بانکی
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}

function ChatMockup() {
  return (
    <div className="animate-float w-full max-w-sm rounded-4xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/50">
      <div className="flex items-center gap-3 rounded-2xl bg-brand-blue px-4 py-3 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
          🛍️
        </span>
        <div>
          <p className="text-sm font-bold">ربات فروشگاه نمونه</p>
          <p className="text-xs text-white/80">آنلاین</p>
        </div>
      </div>
      <div className="space-y-3 px-2 py-4">
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-bg-cool px-4 py-2.5 text-sm text-brand-ink">
          سلام! به فروشگاه ما خوش اومدید 👋
        </div>
        <div className="flex flex-wrap gap-2 pr-2">
          {["محصولات", "ساعت کاری", "پیگیری سفارش"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-brand-blue/30 px-3 py-1.5 text-xs font-bold text-brand-blue"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-accent px-4 py-2.5 text-sm text-white">
          ساعت کاری‌تون چیه؟
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-bg-cool px-4 py-2.5 text-sm text-brand-ink">
          هر روز از ساعت ۹ صبح تا ۹ شب باز هستیم 🕘
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: Zap, text: "راه‌اندازی در چند دقیقه" },
    { icon: ShieldCheck, text: "بدون نیاز به کارت بانکی برای شروع" },
    { icon: Sparkles, text: "پشتیبانی فارسی" },
  ];
  return (
    <div className="border-y border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 text-sm font-bold text-brand-muted sm:justify-between">
        {items.map(({ icon: Icon, text }) => (
          <span key={text} className="flex items-center gap-2">
            <Icon className="h-4.5 w-4.5 text-brand-teal" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="فرآیند ساده"
        title="از ثبت‌نام تا ربات فعال، فقط ۴ قدم"
        desc="نیازی به برنامه‌نویس یا دانش فنی نیست — همه‌چیز از داخل پنل انجام می‌شود."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-extrabold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-extrabold text-brand-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-brand-muted">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section id="audiences" className="bg-brand-bg-warm py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="مناسب چه کسب‌وکارهایی؟"
          title="تلبینو دقیقاً برای این کسب‌وکارها ساخته شده"
          desc="هرکدام از این کسب‌وکارها نیازهای متفاوتی دارند؛ تلبینو خودش را با آن‌ها تطبیق می‌دهد."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm shadow-slate-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="امکانات"
        title="همه‌چیزی که برای اداره‌ی ربات لازم دارید"
        desc="از کاتالوگ محصول تا گزارش‌های دقیق، همه در یک پنل ساده و فارسی."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-100 p-6 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-slate-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
              <Icon className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 text-sm font-extrabold text-brand-ink">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-brand-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-brand-bg-cool py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="قیمت‌گذاری"
          title="پلنی متناسب با اندازه‌ی کسب‌وکارتان"
          desc="با پلن رایگان شروع کنید و هر وقت خواستید ارتقا دهید."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 ${
                plan.highlighted
                  ? "relative border-2 border-brand-accent bg-white shadow-xl shadow-orange-100 md:-translate-y-3"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 right-7 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">
                  پیشنهادی
                </span>
              )}
              <h3 className="text-lg font-extrabold text-brand-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-brand-muted">{plan.tagline}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-bold transition ${
                  plan.highlighted
                    ? "bg-brand-accent text-white hover:bg-brand-accent-dark"
                    : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                }`}
              >
                شروع رایگان
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="rounded-3xl bg-brand-blue px-8 py-14 text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          همین امروز ربات تلگرامی خودتان را راه‌اندازی کنید
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/80">
          ثبت‌نام رایگان است و در کمتر از چند دقیقه اولین ربات‌تان را می‌سازید.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-block rounded-full bg-brand-accent px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-brand-accent-dark"
        >
          شروع رایگان
        </Link>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-sm font-extrabold text-white">
            ت
          </span>
          <span className="text-sm font-extrabold text-brand-ink">تلبینو</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted">
          <a href="#features" className="transition hover:text-brand-blue">امکانات</a>
          <a href="#pricing" className="transition hover:text-brand-blue">قیمت‌گذاری</a>
          <a href="#" className="transition hover:text-brand-blue">تماس با ما</a>
          <a href="#" className="transition hover:text-brand-blue">حریم خصوصی</a>
        </nav>
        <p className="text-xs text-brand-muted">© {new Date().getFullYear()} تلبینو — تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-extrabold uppercase tracking-wide text-brand-accent">{eyebrow}</span>
      <h2 className="mt-3 text-2xl font-extrabold text-brand-ink sm:text-3xl">{title}</h2>
      <p className="mt-3 text-base leading-8 text-brand-muted">{desc}</p>
    </div>
  );
}
