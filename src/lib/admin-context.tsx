"use client";

import { createContext, useContext } from "react";
import type { AdminAccount } from "@/lib/api";

export const AdminContext = createContext<AdminAccount | null>(null);

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within the admin layout");
  return ctx;
}
