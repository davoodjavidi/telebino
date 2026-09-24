"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  BarChart3,
  Bot as BotIcon,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Megaphone,
  MessageCircleQuestion,
  Package,
  Truck,
  Users,
  Users2,
  Wallet,
} from "lucide-react";
import { type CurrentUser, getMe, tokenStorage } from "@/lib/api";
import { DashboardContext } from "@/lib/dashboard-context";

const navItems = [
  { href: "/dashboard", label: "داشبورد", icon: LayoutDashboard },
  { href: "/dashboard/products", label: "محصولات", icon: Package },
  { href: "/dashboard/faq", label: "سوالات متداول", icon: MessageCircleQuestion },
  { href: "/dashboard/lookup", label: "سفارش‌ها و دسترسی‌ها", icon: Truck },
  { href: "/dashboard/customers", label: "مشتریان", icon: Users2 },
  { href: "/dashboard/forms", label: "فرم‌ساز", icon: ClipboardList },
  { href: "/dashboard/bots", label: "ربات‌ها", icon: BotIcon },
  { href: "/dashboard/broadcast", label: "پیام همگانی", icon: Megaphone },
  { href: "/dashboard/reports", label: "گزارش‌ها", icon: BarChart3 },
  { href: "/dashboard/team", label: "اعضای تیم", icon: Users },
  { href: "/dashboard/subscription", label: "اشتراک", icon: Wallet },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = tokenStorage.get();
    if (!token) {
      router.replace("/login");
      return;
    }
    getMe(token)
      .then(setUser)
      .catch(() => {
        tokenStorage.clear();
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  function handleLogout() {
    tokenStorage.clear();
    router.replace("/login");
  }

  if (loading) {
    return (
      <main className="flex min-h-full flex-1 items-center justify-center">
        <p className="text-sm text-brand-muted">در حال بارگذاری...</p>
      </main>
    );
  }

  if (!user) return null;

  return (
    <DashboardContext.Provider value={user}>
      <div className="flex min-h-full flex-1 bg-brand-bg-cool">
        <aside className="hidden w-64 shrink-0 flex-col border-l border-slate-100 bg-white md:flex">
          <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-white font-extrabold">
              ت
            </span>
            <span className="text-lg font-extrabold text-brand-ink">تلبینو</span>
          </div>
          <nav className="flex-1 space-y-1 overflow-y-auto p-3">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "text-brand-muted hover:bg-slate-50 hover:text-brand-ink"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-slate-100 p-3">
            <div className="mb-2 truncate rounded-xl bg-brand-bg-warm px-3.5 py-2.5 text-xs font-bold text-brand-muted">
              {user.business.name} · {user.role === "OWNER" ? "مالک" : "کارمند"}
            </div>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-bold text-brand-muted transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
              خروج
            </button>
          </div>
        </aside>

        <div className="flex-1 overflow-x-hidden">{children}</div>
      </div>
    </DashboardContext.Provider>
  );
}
