import { supabaseAdmin } from "@/lib/adminAuth";

async function safeCount(table: string) {
  const { count, error } = await supabaseAdmin
    .from(table)
    .select("*", { count: "exact", head: true });

  if (error) {
    console.warn(`Failed to count ${table}:`, error.message);
    return 0;
  }

  return count || 0;
}

async function safeList(table: string, orderColumn = "created_at", limit = 5) {
  const { data, error } = await supabaseAdmin
    .from(table)
    .select("*")
    .order(orderColumn, { ascending: false })
    .limit(limit);

  if (error) {
    console.warn(`Failed to fetch ${table}:`, error.message);
    return [];
  }

  return data || [];
}

export async function getAdminDashboardData() {
  const [
    events,
    news,
    gallery,
    feedback,
    legacyMessages,
    bleedKits,
    upcomingEvents,
    latestFeedback,
    latestLegacyMessages,
    latestGallery,
  ] = await Promise.all([
    safeCount("cms_events"),
    safeCount("cms_news"),
    safeCount("cms_gallery"),
    safeCount("cms_feedback"),
    safeCount("legacy_messages"),
    safeCount("bleed_kit_locations"),
    safeList("cms_events", "event_date", 5),
    safeList("cms_feedback", "created_at", 5),
    safeList("legacy_messages", "created_at", 5),
    safeList("cms_gallery", "created_at", 6),
  ]);

  return {
    stats: { events, news, gallery, feedback, legacyMessages, bleedKits },
    upcomingEvents,
    latestFeedback,
    latestLegacyMessages,
    latestGallery,
  };
}
