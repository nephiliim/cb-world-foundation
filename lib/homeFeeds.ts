import { supabase } from "@/lib/supabase";

export async function getHomepageFeaturedEvents(limit = 2) {
  const { data, error } = await supabase
    .from("cms_events")
    .select("*")
    .eq("status", "published")
    .eq("show_on_homepage", true)
    .order("event_date", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Homepage featured events error", error);
    return [];
  }

  return data || [];
}
