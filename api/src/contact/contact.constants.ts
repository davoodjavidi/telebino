export const CONTACT_TOPICS = ["SALES", "SUPPORT", "BILLING", "PARTNERSHIP", "OTHER"] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];
