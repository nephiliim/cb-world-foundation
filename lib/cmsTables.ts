export const cmsTables = {
  gallery: "cms_gallery",
  news: "cms_news",
  events: "cms_events",
  feedback: "cms_feedback",
  legacy: "cms_legacy_messages",
  settings: "cms_settings",
} as const;

export type CmsModule = keyof typeof cmsTables;
