"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCheck, GraduationCap, Paperclip, Send, ShoppingBag, Users2 } from "lucide-react";

type Message =
  | { from: "bot"; text: string }
  | { from: "user"; text: string }
  | { from: "bot"; buttons: string[] }
  | { from: "bot"; card: { emoji: string; title: string; meta: string; badge: string } };

type Scenario = {
  key: string;
  label: string;
  icon: typeof ShoppingBag;
  botName: string;
  avatar: string;
  script: Message[];
};

const scenarios: Scenario[] = [
  {
    key: "shop",
    label: "فروشگاه",
    icon: ShoppingBag,
    botName: "فروشگاه کتونی‌شاپ",
    avatar: "👟",
    script: [
      { from: "bot", text: "سلام! به کتونی‌شاپ خوش اومدید 👋" },
      { from: "bot", buttons: ["🛍 محصولات", "📦 پیگیری سفارش", "🕘 ساعت کاری"] },
      { from: "user", text: "📦 پیگیری سفارش" },
      { from: "bot", text: "شماره سفارش‌تون رو بفرستید 🙏" },
      { from: "user", text: "TB-4821" },
      {
        from: "bot",
        card: { emoji: "🚚", title: "سفارش TB-4821", meta: "تحویل پست — فردا", badge: "ارسال شده" },
      },
    ],
  },
  {
    key: "edu",
    label: "آموزشگاه",
    icon: GraduationCap,
    botName: "آکادمی زبان نوین",
    avatar: "🎓",
    script: [
      { from: "bot", text: "سلام! به آکادمی نوین خوش اومدی ✨" },
      { from: "bot", buttons: ["🎓 دوره‌های من", "📝 ثبت‌نام", "❓ سوالات"] },
      { from: "user", text: "🎓 دوره‌های من" },
      {
        from: "bot",
        card: { emoji: "🎬", title: "مکالمه‌ی پیشرفته", meta: "۱۲ جلسه ویدیویی", badge: "دسترسی فعال" },
      },
      { from: "user", text: "جلسه‌ی بعدی کِیه؟" },
      { from: "bot", text: "جلسه‌ی ۷ از شنبه ساعت ۱۸ باز می‌شه 🗓" },
    ],
  },
  {
    key: "consult",
    label: "مشاوره",
    icon: Users2,
    botName: "کلینیک مشاوره آرامش",
    avatar: "🌿",
    script: [
      { from: "bot", text: "سلام، وقت‌تون بخیر 🌿" },
      { from: "bot", buttons: ["📅 رزرو نوبت", "💬 سوالات رایج", "📍 آدرس"] },
      { from: "user", text: "📅 رزرو نوبت" },
      { from: "bot", text: "لطفاً فرم کوتاه زیر رو پر کنید:" },
      {
        from: "bot",
        card: { emoji: "📝", title: "فرم رزرو نوبت", meta: "نام، شماره تماس، زمان", badge: "۳ فیلد" },
      },
      { from: "bot", text: "ممنون! نوبت‌تون ثبت شد و به‌زودی تایید می‌شه ✅" },
    ],
  },
];

const STEP_MS = 1300;

export function BotDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scenario = scenarios[scenarioIndex];
  const done = visibleCount >= scenario.script.length;
  const nextIsBot = !done && scenario.script[visibleCount].from === "bot";

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!done) {
          setVisibleCount((c) => c + 1);
        } else if (autoRotate) {
          setScenarioIndex((i) => (i + 1) % scenarios.length);
          setVisibleCount(0);
        }
      },
      done ? 3500 : visibleCount === 0 ? 500 : STEP_MS,
    );
    return () => clearTimeout(timer);
  }, [visibleCount, done, autoRotate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleCount]);

  function pick(index: number) {
    setAutoRotate(false);
    setScenarioIndex(index);
    setVisibleCount(0);
  }

  return (
    <div className="relative w-full max-w-[360px]">
      {/* Scenario switcher */}
      <div
        role="tablist"
        aria-label="نمونه‌ی ربات"
        className="mx-auto mb-5 flex w-fit gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur"
      >
        {scenarios.map(({ key, label, icon: Icon }, i) => (
          <button
            key={key}
            role="tab"
            aria-selected={i === scenarioIndex}
            onClick={() => pick(i)}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
              i === scenarioIndex ? "bg-white text-brand-ink shadow" : "text-white/70 hover:text-white"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Phone */}
      <div className="relative rounded-[2.75rem] border border-white/15 bg-linear-to-b from-slate-700 to-slate-900 p-2.5 shadow-[0_40px_120px_-20px_rgba(47,111,235,0.55)]">
        <div className="absolute left-1/2 top-3.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2.25rem] bg-[#e7ebf0]">
          <div className="flex items-center gap-3 bg-[#517da2] px-4 pb-3 pt-9 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
              {scenario.avatar}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{scenario.botName}</p>
              <p className="text-[11px] text-white/75">{nextIsBot && visibleCount > 0 ? "در حال نوشتن..." : "ربات"}</p>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="h-[380px] space-y-2 overflow-hidden px-3 py-4"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,.5) 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,.4) 0 2px, transparent 3px)",
              backgroundSize: "60px 60px",
            }}
          >
            {scenario.script.slice(0, visibleCount).map((msg, i) => (
              <ChatBubble key={`${scenario.key}-${i}`} msg={msg} />
            ))}
            {nextIsBot && visibleCount > 0 && (
              <div className="animate-pop-in flex w-fit gap-1 rounded-2xl rounded-tr-sm bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-2.5">
            <Paperclip className="h-4.5 w-4.5 text-slate-400" />
            <span className="flex-1 text-xs text-slate-400">پیام...</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#517da2] text-white">
              <Send className="h-4 w-4 -scale-x-100" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ msg }: { msg: Message }) {
  if (msg.from === "user") {
    return (
      <div className="animate-pop-in mr-auto flex w-fit max-w-[80%] items-end gap-1 rounded-2xl rounded-tl-sm bg-[#effdde] px-3.5 py-2 text-[13px] text-slate-800 shadow-sm">
        <span>{msg.text}</span>
        <CheckCheck className="h-3.5 w-3.5 shrink-0 text-[#4fae4e]" />
      </div>
    );
  }
  if ("buttons" in msg) {
    return (
      <div className="animate-pop-in grid grid-cols-2 gap-1.5">
        {msg.buttons.map((b, i) => (
          <span
            key={b}
            className={`rounded-lg bg-white/70 py-2 text-center text-[12px] font-bold text-[#3a6d99] shadow-sm backdrop-blur ${
              i === 0 && msg.buttons.length % 2 === 1 ? "col-span-2" : ""
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    );
  }
  if ("card" in msg) {
    return (
      <div className="animate-pop-in w-[85%] overflow-hidden rounded-2xl rounded-tr-sm bg-white shadow-sm">
        <div className="flex h-20 items-center justify-center bg-linear-to-br from-brand-blue/15 to-brand-teal/15 text-4xl">
          {msg.card.emoji}
        </div>
        <div className="flex items-center justify-between gap-2 px-3.5 py-2.5">
          <div>
            <p className="text-[13px] font-bold text-slate-800">{msg.card.title}</p>
            <p className="text-[11px] text-slate-500">{msg.card.meta}</p>
          </div>
          <span className="shrink-0 rounded-full bg-brand-teal/15 px-2 py-1 text-[10px] font-bold text-brand-teal">
            {msg.card.badge}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="animate-pop-in w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-white px-3.5 py-2 text-[13px] leading-6 text-slate-800 shadow-sm">
      {msg.text}
    </div>
  );
}
