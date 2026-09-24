"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BarChart3, Building2, LogOut, ShieldCheck } from "lucide-react";
import { type AdminAccount, adminAuthApi, adminTokenStorage, ApiError } from "@/lib/api";
import { AdminContext } from "@/lib/admin-context";

const navItems = [
  { href: "/admin", label: "داشبورد", icon: BarChart3 },
  { href: "/admin/businesses", label: "کسب‌وکارها", icon: Building2 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [admin, setAdmin] = useState<AdminAccount | null>(null);
  const [loading, setLoading] = useState(!isLoginPage);

  useEffect(() => {
    if (isLoginPage) return;
    const token = adminTokenStorage.get();
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    adminAuthApi
      .me()
      .then(setAdmin)
      .catch((err) => {
        if (err instanceof ApiError) adminTokenStorage.clear();
        router.replace("/admin/login");
      })
      .finally(() => setLoading(false));
  }, [isLoginPage, router]);

  function handleLogout() {
    adminTokenStorage.clear();
    router.replace("/admin/login");
  }

  if (isLoginPage) return <>{children}</>;

  if (loading) {
    return (
      <main className="flex min-h-full flex-1 items-center justify-center">
        <p className="text-sm text-brand-muted">در حال بارگذاری...</p>
      </main>
    );
  }

  if (!admin) return null;

  return (
    <AdminContext.Provider value={admin}>
      <div className="flex min-h-full flex-1 bg-slate-50">
        <aside className="hidden w-64 shrink-0 flex-col border-l border-slate-800 bg-brand-ink md:flex">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
              <ShieldCheck className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm font-extrabold text-white">پنل مدیریت تلبینو</span>
          </div>
          <nav className="flex-1 space-y-1 p-3">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-bold transition ${
                    active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-white/10 p-3">
            <div className="mb-2 truncate rounded-xl bg-white/5 px-3.5 py-2.5 text-xs font-bold text-white/70">
              {admin.email}
            </div>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white/60 transition hover:bg-white/5 hover:text-red-300"
            >
              <LogOut className="h-4 w-4" />
              خروج
            </button>
          </div>
        </aside>

        <div className="flex-1 overflow-x-hidden">{children}</div>
      </div>
    </AdminContext.Provider>
  );
}
