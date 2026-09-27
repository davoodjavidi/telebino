import type { PlanTier } from "@/lib/api";

/**
 * Marketing + pricing metadata for plans, shared by the landing page and the
 * checkout flow. Technical limits (bots, quota, ...) still come from the API
 * (`api/src/common/plan-limits.ts`); keep the copy below in sync with them.
 *
 * Prices are placeholders (Toman) until real billing via Zarinpal is wired up.
 * Monthly prices are multiples of 6 so the yearly per-month price stays round.
 */
export type BillingCycle = "monthly" | "yearly";

export type PlanMeta = {
  tier: PlanTier;
  name: string;
  tagline: string;
  monthlyPrice: number;
  highlighted: boolean;
  features: string[];
};

export const PLANS: PlanMeta[] = [
  {
    tier: "STARTER",
    name: "پایه",
    tagline: "برای شروع و آزمودن ایده",
    monthlyPrice: 180_000,
    highlighted: false,
    features: [
      "۱ ربات تلگرامی",
      "۱٬۰۰۰ پیام در ماه",
      "کاتالوگ محصولات و سوالات متداول",
      "پیگیری سفارش و دسترسی",
    ],
  },
  {
    tier: "BUSINESS",
    name: "کسب‌وکار",
    tagline: "برای کسب‌وکارهای در حال رشد",
    monthlyPrice: 480_000,
    highlighted: true,
    features: [
      "تا ۳ ربات تلگرامی",
      "۱۰٬۰۰۰ پیام در ماه",
      "فرم‌ساز و گزارش‌های کامل",
      "پیام همگانی به همه‌ی مشتری‌ها",
      "تا ۳ عضو تیم",
    ],
  },
  {
    tier: "PRO",
    name: "حرفه‌ای",
    tagline: "برای مجموعه‌های بزرگ",
    monthlyPrice: 1_200_000,
    highlighted: false,
    features: [
      "تا ۲۰ ربات تلگرامی",
      "۱۰۰٬۰۰۰ پیام در ماه",
      "همه‌ی امکانات پلن کسب‌وکار",
      "تا ۱۰ عضو تیم",
      "پشتیبانی اولویت‌دار",
    ],
  },
];

/** Yearly billing = pay for 10 months, get 12. */
export const YEARLY_PAID_MONTHS = 10;
export const VAT_RATE = 0.1;

export function getPlan(tier: string | null | undefined): PlanMeta | undefined {
  return PLANS.find((p) => p.tier === tier);
}

export function parseCycle(value: string | null | undefined): BillingCycle {
  return value === "monthly" ? "monthly" : "yearly";
}

export function planPrice(plan: PlanMeta, cycle: BillingCycle) {
  const months = cycle === "yearly" ? 12 : 1;
  const listPrice = plan.monthlyPrice * months;
  const subtotal = cycle === "yearly" ? plan.monthlyPrice * YEARLY_PAID_MONTHS : listPrice;
  const discount = listPrice - subtotal;
  const vat = Math.round(subtotal * VAT_RATE);
  return {
    listPrice,
    discount,
    subtotal,
    vat,
    total: subtotal + vat,
    perMonth: Math.round(subtotal / months),
  };
}

export function toman(value: number) {
  return value.toLocaleString("fa-IR");
}

export function checkoutHref(tier: PlanTier, cycle: BillingCycle) {
  return `/dashboard/subscription/checkout?plan=${tier}&cycle=${cycle}`;
}
