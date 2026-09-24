export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        {eyebrow && (
          <span className="text-xs font-extrabold uppercase tracking-wide text-brand-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-1 text-2xl font-extrabold text-brand-ink">{title}</h1>
        {description && <p className="mt-1 text-sm text-brand-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
