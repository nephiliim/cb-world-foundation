import { supabase } from "@/lib/supabase";

export type CmsEvent = {
  id?: string;
  title: string;
  slug: string;
  summary?: string | null;
  description?: string | null;
  event_date?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  venue?: string | null;
  location?: string | null;
  postcode?: string | null;
  category?: string | null;
  status?: string | null;
  featured?: boolean | null;
  cover_image?: string | null;
  video_url?: string | null;
  impact_young_people?: number | null;
  impact_families?: number | null;
  impact_volunteers?: number | null;
  bleed_kits_supported?: number | null;
  gallery_urls?: string[] | null;
  tags?: string[] | null;
};

export async function getPublishedEvents() {
  const { data, error } = await supabase
    .from("cms_events")
    .select("*")
    .eq("status", "published")
    .order("event_date", { ascending: false });

  if (error) {
    console.error("Events fetch error", error);
    return [];
  }

  return (data || []) as CmsEvent[];
}

export async function getEventBySlug(slug: string) {
  const { data, error } = await supabase
    .from("cms_events")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("Event fetch error", error);
    return null;
  }

  return data as CmsEvent;
}
