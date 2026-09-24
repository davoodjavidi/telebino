"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { adminAuthApi, adminTokenStorage, ApiError } from "@/lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { accessToken } = await adminAuthApi.login(email, password);
      adminTokenStorage.set(accessToken);
      router.push("/admin");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "ارتباط با سرور برقرار نشد");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-brand-ink px-5 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-ink text-white">
            <ShieldCheck className="h-4.5 w-4.5" />
          </span>
          <span className="text-lg font-extrabold text-brand-ink">پنل مدیریت تلبینو</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-brand-ink">
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-bold text-brand-ink">
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              required
            />
          </div>
          {error && <p className="text-center text-sm font-medium text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-brand-ink py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>
      </div>
    </main>
  );
}
