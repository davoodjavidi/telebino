"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#demo", label: "دموی زنده" },
  { href: "#features", label: "امکانات" },
  { href: "#how", label: "چطور کار می‌کند" },
  { href: "#pricing", label: "قیمت‌ها" },
  { href: "#faq", label: "سوالات" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-teal font-extrabold text-white shadow-lg shadow-brand-blue/30">
        ت
      </span>
      <span className={`text-lg font-extrabold ${dark ? "text-white" : "text-brand-ink"}`}>تلبینو</span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          solid
            ? "border-white/10 bg-slate-950/75 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Logo dark />
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-bold text-white/80 transition hover:text-white sm:inline"
            >
              ورود
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-ink transition hover:bg-brand-accent hover:text-white"
            >
              شروع رایگان
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="منو"
              aria-expanded={open}
              className="rounded-full p-2 text-white md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="grid gap-1 border-t border-white/10 p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-bold text-white/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
