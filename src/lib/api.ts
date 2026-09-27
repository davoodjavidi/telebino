const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

const TOKEN_KEY = "telebino_token";

export const tokenStorage = {
  get: () => (typeof window === "undefined" ? null : localStorage.getItem(TOKEN_KEY)),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  // FormData bodies must NOT get a manual Content-Type — the browser sets
  // multipart/form-data with the correct boundary itself, and overriding it
  // (even to the same-looking string) breaks the upload.
  const isFormData = options.body instanceof FormData;
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message ?? "خطایی رخ داد، دوباره تلاش کنید";
    throw new ApiError(Array.isArray(message) ? message[0] : message, res.status);
  }

  return data as T;
}

/** Same as request(), but attaches the stored JWT automatically. */
function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = tokenStorage.get();
  return request<T>(path, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${token}` },
  });
}

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

export type Business = {
  id: string;
  name: string;
  type: "SHOP" | "EDUCATION" | "CONSULTING";
};

export type CurrentUser = {
  id: string;
  phone: string;
  role: "OWNER" | "EMPLOYEE";
  business: Business;
};

export function requestOtp(phone: string) {
  return request<{ sent: boolean }>("/auth/request-otp", {
    method: "POST",
    body: JSON.stringify({ phone }),
  });
}

export function verifyOtp(phone: string, code: string, businessName?: string) {
  return request<{ accessToken: string; user: CurrentUser }>("/auth/verify-otp", {
    method: "POST",
    body: JSON.stringify({ phone, code, businessName }),
  });
}

export function getMe(token: string) {
  return request<CurrentUser>("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// ---------------------------------------------------------------------------
// Uploads
// ---------------------------------------------------------------------------

export const uploadsApi = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return api<{ url: string }>("/uploads/image", { method: "POST", body: formData });
  },
};

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  imageUrl: string | null;
  attributes: Record<string, unknown> | null;
  createdAt: string;
};

export type UpsertProductInput = {
  name: string;
  description?: string;
  price?: number;
  imageUrl?: string;
};

export const productsApi = {
  list: () => api<Product[]>("/products"),
  create: (data: UpsertProductInput) =>
    api<Product>("/products", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: UpsertProductInput) =>
    api<Product>(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id: string) => api<{ deleted: boolean }>(`/products/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// Course lessons (video content attached to a "course" product)
// ---------------------------------------------------------------------------

export type LessonStatus = "PENDING" | "PROCESSING" | "READY" | "FAILED";

export type CourseLesson = {
  id: string;
  productId: string;
  title: string;
  order: number;
  status: LessonStatus;
  durationSeconds: number | null;
  createdAt: string;
};

export const courseLessonsApi = {
  list: (productId: string) => api<CourseLesson[]>(`/products/${productId}/lessons`),
  upload: (productId: string, title: string, order: number, file: File) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("order", String(order));
    formData.append("file", file);
    return api<CourseLesson>(`/products/${productId}/lessons`, { method: "POST", body: formData });
  },
  update: (productId: string, id: string, data: { title: string; order?: number }) =>
    api<CourseLesson>(`/products/${productId}/lessons/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  remove: (productId: string, id: string) =>
    api<{ deleted: boolean }>(`/products/${productId}/lessons/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export type FaqEntry = {
  id: string;
  question: string;
  alternatePhrases: string[];
  answer: string;
  createdAt: string;
};

export type UpsertFaqInput = {
  question: string;
  alternatePhrases?: string[];
  answer: string;
};

export const faqApi = {
  list: () => api<FaqEntry[]>("/faq"),
  create: (data: UpsertFaqInput) => api<FaqEntry>("/faq", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: UpsertFaqInput) =>
    api<FaqEntry>(`/faq/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id: string) => api<{ deleted: boolean }>(`/faq/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// Lookup (orders / access)
// ---------------------------------------------------------------------------

export type LookupKind = "ORDER" | "ACCESS";

export type LookupEntryProduct = {
  id: string;
  name: string;
  price: number | null;
  imageUrl: string | null;
  _count: { courseLessons: number };
};

export type LookupEntry = {
  id: string;
  kind: LookupKind;
  identifier: string;
  status: string;
  customerPhone: string | null;
  note: string | null;
  notifyOnUpdate: boolean;
  productId: string | null;
  product: LookupEntryProduct | null;
  createdAt: string;
};

export type UpsertLookupInput = {
  kind: LookupKind;
  identifier: string;
  status: string;
  customerPhone?: string;
  note?: string;
  notifyOnUpdate?: boolean;
  productId?: string;
};

export const lookupApi = {
  list: (kind?: LookupKind) => api<LookupEntry[]>(`/lookup${kind ? `?kind=${kind}` : ""}`),
  create: (data: UpsertLookupInput) =>
    api<LookupEntry>("/lookup", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: UpsertLookupInput) =>
    api<LookupEntry>(`/lookup/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  markPaid: (id: string) => api<LookupEntry>(`/lookup/${id}/mark-paid`, { method: "POST" }),
  remove: (id: string) => api<{ deleted: boolean }>(`/lookup/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// Customers
// ---------------------------------------------------------------------------

export type Customer = {
  id: string;
  telegramUserId: string;
  telegramUsername: string | null;
  phone: string | null;
  messageCount: number;
  blocked: boolean;
  firstSeenAt: string;
  lastSeenAt: string;
};

export const customersApi = {
  list: () => api<Customer[]>("/customers"),
};

// ---------------------------------------------------------------------------
// Forms
// ---------------------------------------------------------------------------

export type FormFieldType = "TEXT" | "NUMBER" | "PHONE" | "SINGLE_CHOICE" | "MULTI_CHOICE" | "FILE";

export type FormField = {
  id?: string;
  label: string;
  type: FormFieldType;
  required: boolean;
  options: string[];
  order: number;
};

export type FormDef = {
  id: string;
  title: string;
  fields: FormField[];
  _count?: { submissions: number };
  createdAt: string;
};

export type FormSubmission = {
  id: string;
  answers: Record<string, string>;
  createdAt: string;
  customer: Customer | null;
};

export const formsApi = {
  list: () => api<FormDef[]>("/forms"),
  get: (id: string) => api<FormDef>(`/forms/${id}`),
  submissions: (id: string) => api<FormSubmission[]>(`/forms/${id}/submissions`),
  create: (data: { title: string; fields: FormField[] }) =>
    api<FormDef>("/forms", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: { title: string; fields: FormField[] }) =>
    api<FormDef>(`/forms/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id: string) => api<{ deleted: boolean }>(`/forms/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export type TeamMember = {
  id: string;
  phone: string;
  role: "OWNER" | "EMPLOYEE";
  createdAt: string;
};

export const teamApi = {
  list: () => api<TeamMember[]>("/team"),
  add: (phone: string) => api<TeamMember>("/team", { method: "POST", body: JSON.stringify({ phone }) }),
  remove: (id: string) => api<{ deleted: boolean }>(`/team/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// Subscription
// ---------------------------------------------------------------------------

export type PlanTier = "STARTER" | "BUSINESS" | "PRO";

export type PlanInfo = {
  tier: PlanTier;
  label: string;
  maxBots: number;
  maxTeamMembers: number;
  broadcastAllowed: boolean;
  monthlyMessageQuota: number;
};

export type SubscriptionStatus = {
  planTier: PlanTier;
  planLabel: string;
  isSubscriptionActive: boolean;
  limits: PlanInfo;
  messagesUsedAllTime: number;
  allPlans: PlanInfo[];
};

export const subscriptionApi = {
  get: () => api<SubscriptionStatus>("/subscription"),
  changePlan: (planTier: PlanTier) =>
    api<unknown>("/subscription/plan", { method: "POST", body: JSON.stringify({ planTier }) }),
};

// ---------------------------------------------------------------------------
// Reports
// ---------------------------------------------------------------------------

export type ReportsSummary = {
  totalCustomers: number;
  totalMessages: number;
  totalOrders: number;
  totalAccessRecords: number;
  formSubmissionCount: number;
  unansweredCount: number;
  newUsersLast7Days: { date: string; count: number }[];
};

export type UnansweredQuestion = { id: string; question: string; askedAt: string };

export const reportsApi = {
  summary: () => api<ReportsSummary>("/reports/summary"),
  unanswered: () => api<UnansweredQuestion[]>("/reports/unanswered"),
};

// ---------------------------------------------------------------------------
// Bots
// ---------------------------------------------------------------------------

export type BotSummary = { id: string; username: string; isActive: boolean; createdAt: string };

export const botsApi = {
  list: () => api<BotSummary[]>("/bots"),
  create: (token: string) => api<BotSummary>("/bots", { method: "POST", body: JSON.stringify({ token }) }),
  toggle: (id: string, isActive: boolean) =>
    api<{ id: string; isActive: boolean }>(`/bots/${id}/active`, {
      method: "PATCH",
      body: JSON.stringify({ isActive }),
    }),
  remove: (id: string) => api<{ deleted: boolean }>(`/bots/${id}`, { method: "DELETE" }),
};

// ---------------------------------------------------------------------------
// Broadcast
// ---------------------------------------------------------------------------

export type Broadcast = {
  id: string;
  text: string;
  mediaUrl: string | null;
  status: "DRAFT" | "QUEUED" | "SENDING" | "DONE" | "FAILED";
  sentCount: number;
  failCount: number;
  createdAt: string;
};

export const broadcastApi = {
  list: () => api<Broadcast[]>("/broadcast"),
  create: (text: string, mediaUrl?: string) =>
    api<Broadcast>("/broadcast", { method: "POST", body: JSON.stringify({ text, mediaUrl }) }),
};

// ---------------------------------------------------------------------------
// Contact (public — no auth)
// ---------------------------------------------------------------------------

export type ContactTopic = "SALES" | "SUPPORT" | "BILLING" | "PARTNERSHIP" | "OTHER";

export type ContactMessageInput = {
  name: string;
  phone: string;
  email?: string;
  topic: ContactTopic;
  message: string;
  /** Honeypot — must stay empty for real users. */
  website?: string;
};

export type ContactMessage = Omit<ContactMessageInput, "website" | "email"> & {
  id: string;
  email: string | null;
  isRead: boolean;
  createdAt: string;
};

export const contactApi = {
  send: (data: ContactMessageInput) =>
    request<{ sent: boolean }>("/contact", { method: "POST", body: JSON.stringify(data) }),
};

// ---------------------------------------------------------------------------
// Platform admin (separate token/session from the business-owner panel)
// ---------------------------------------------------------------------------

const ADMIN_TOKEN_KEY = "telebino_admin_token";

export const adminTokenStorage = {
  get: () => (typeof window === "undefined" ? null : localStorage.getItem(ADMIN_TOKEN_KEY)),
  set: (token: string) => localStorage.setItem(ADMIN_TOKEN_KEY, token),
  clear: () => localStorage.removeItem(ADMIN_TOKEN_KEY),
};

function adminApi<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = adminTokenStorage.get();
  return request<T>(path, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${token}` },
  });
}

export type AdminAccount = { id: string; email: string; name: string };

export type AdminBusiness = {
  id: string;
  name: string;
  type: "SHOP" | "EDUCATION" | "CONSULTING";
  planTier: PlanTier;
  isSubscriptionActive: boolean;
  ownerPhone: string | null;
  botCount: number;
  customerCount: number;
  teamSize: number;
  createdAt: string;
};

export type PlatformStats = {
  totalBusinesses: number;
  businessesByType: Record<string, number>;
  businessesByPlan: Record<string, number>;
  totalBots: number;
  activeBots: number;
  totalCustomers: number;
  totalMessages: number;
  newBusinessesLast7Days: { date: string; count: number }[];
};

export const adminAuthApi = {
  login: (email: string, password: string) =>
    request<{ accessToken: string; admin: AdminAccount }>("/admin/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  me: () => adminApi<AdminAccount>("/admin/auth/me"),
};

export const adminApiClient = {
  listBusinesses: () => adminApi<AdminBusiness[]>("/admin/businesses"),
  updateBusiness: (id: string, data: { planTier?: PlanTier; isSubscriptionActive?: boolean }) =>
    adminApi<AdminBusiness>(`/admin/businesses/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  stats: () => adminApi<PlatformStats>("/admin/stats"),
  listContactMessages: () => adminApi<ContactMessage[]>("/admin/contact-messages"),
  setContactMessageRead: (id: string, isRead: boolean) =>
    adminApi<ContactMessage>(`/admin/contact-messages/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isRead }),
    }),
};
