import Link from "next/link";
import { Logo } from "@/components/landing/site-header";

export function SiteFooter() {
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
            <Link href="/#features" className="transition hover:text-brand-blue">امکانات</Link>
            <Link href="/#pricing" className="transition hover:text-brand-blue">قیمت‌ها</Link>
            <Link href="/#faq" className="transition hover:text-brand-blue">سوالات متداول</Link>
            <Link href="/contact" className="transition hover:text-brand-blue">تماس با ما</Link>
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
