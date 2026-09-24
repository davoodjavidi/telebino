"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { ApiError, subscriptionApi, teamApi, type SubscriptionStatus, type TeamMember } from "@/lib/api";
import { useCurrentUser } from "@/lib/dashboard-context";
import { PageHeader } from "@/components/page-header";
import { Button, Card, ErrorText, Input, Label } from "@/components/ui";

export default function TeamPage() {
  const user = useCurrentUser();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function load() {
    teamApi.list().then(setMembers);
    subscriptionApi.get().then(setSubscription);
  }

  useEffect(load, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      await teamApi.add(phone);
      setPhone("");
      setShowForm(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "افزودن عضو انجام نشد");
    } finally {
      setSaving(false);
    }
  }

  async function handleRemove(id: string) {
    await teamApi.remove(id);
    load();
  }

  const atLimit = subscription && members.length >= subscription.limits.maxTeamMembers;

  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <PageHeader
        eyebrow="دسترسی تیمی"
        title="اعضای تیم"
        description={
          subscription
            ? `پلن فعلی شما تا ${subscription.limits.maxTeamMembers} عضو را پشتیبانی می‌کند`
            : undefined
        }
        action={
          user.role === "OWNER" && (
            <Button onClick={() => setShowForm((v) => !v)} disabled={!!atLimit}>
              <span className="flex items-center gap-1.5">
                <Plus className="h-4 w-4" />
                افزودن عضو
              </span>
            </Button>
          )
        }
      />

      {showForm && (
        <Card className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>شماره موبایل کارمند</Label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} dir="ltr" placeholder="09123456789" required />
            </div>
            <ErrorText>{error}</ErrorText>
            <div className="flex gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? "در حال افزودن..." : "افزودن"}
              </Button>
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                انصراف
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="mt-6 space-y-3">
        {members.map((m) => (
          <Card key={m.id} className="flex items-center justify-between !p-4">
            <div>
              <p className="text-sm font-extrabold text-brand-ink" dir="ltr">
                {m.phone}
              </p>
              <p className="mt-0.5 text-xs text-brand-muted">{m.role === "OWNER" ? "مالک" : "کارمند"}</p>
            </div>
            {user.role === "OWNER" && m.role !== "OWNER" && (
              <button
                onClick={() => handleRemove(m.id)}
                className="rounded-lg p-2 text-brand-muted transition hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
