"use client";

import { createContext, useContext } from "react";
import type { CurrentUser } from "@/lib/api";

export const DashboardContext = createContext<CurrentUser | null>(null);

export function useCurrentUser() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useCurrentUser must be used within the dashboard layout");
  return ctx;
}
