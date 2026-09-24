import type { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          accent ? "bg-brand-accent/10 text-brand-accent" : "bg-brand-blue/10 text-brand-blue"
        }`}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <p className="mt-3 text-xl font-extrabold text-brand-ink">{value}</p>
      <p className="mt-0.5 text-xs font-bold text-brand-muted">{label}</p>
    </div>
  );
}
