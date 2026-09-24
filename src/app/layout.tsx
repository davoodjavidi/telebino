import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://telebino.ir";
const title = "تلبینو | بات‌ساز تلگرام بدون کدنویسی برای فروشگاه‌ها و آموزشگاه‌ها";
const description =
  "با تلبینو در چند دقیقه ربات تلگرامی اختصاصی کسب‌وکارتان را بدون نیاز به برنامه‌نویسی بسازید. مخصوص فروشگاه‌های آنلاین، مجموعه‌های آموزشی و مراکز مشاوره؛ کاتالوگ محصول، پاسخ‌گویی خودکار، پیگیری سفارش و گزارش‌های کامل. ۵ پیام اول رایگان.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | تلبینو",
  },
  description,
  keywords: [
    "بات ساز تلگرام",
    "ساخت ربات تلگرام",
    "ربات فروشگاهی تلگرام",
    "ربات تلگرام بدون کدنویسی",
    "ربات آموزشی تلگرام",
    "اتوماسیون تلگرام",
  ],
  authors: [{ name: "تلبینو" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "تلبینو",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "تلبینو",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IRR",
    description: "۵ پیام اول رایگان برای هر ربات",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
