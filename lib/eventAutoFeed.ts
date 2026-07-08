import { supabaseAdmin } from "@/lib/adminAuth";

type EventRecord = {
  id: string;
  title: string;
  slug: string;
  summary?: string | null;
  description?: string | null;
  cover_image?: string | null;
  gallery_urls?: string[] | null;
  category?: string | null;
  featured?: boolean | null;
  show_on_homepage?: boolean | null;
  auto_create_news?: boolean | null;
  auto_create_gallery?: boolean | null;
};

export async function publishEventFeeds(event: EventRecord) {
  const results: string[] = [];

  if (event.auto_create_news !== false) {
    const { error } = await supabaseAdmin.from("cms_news").upsert({
      title: event.title,
      slug: `event-${event.slug}`,
      excerpt: event.summary || `Latest update from ${event.title}.`,
      content: event.description || event.summary || "Community update from CB'S WORLD Foundation Charity.",
      image: event.cover_image || null,
      status: "published",
      featured: event.show_on_homepage || event.featured || false,
      source_event_id: event.id,
    }, { onConflict: "slug" });

    results.push(error ? `news_error:${error.message}` : "news_created");
  }

  if (event.auto_create_gallery !== false) {
    const items = [...(event.cover_image ? [event.cover_image] : []), ...(event.gallery_urls || [])].filter(Boolean);

    for (const [index, url] of items.entries()) {
      const { error } = await supabaseAdmin.from("cms_gallery").upsert({
        title: index === 0 ? event.title : `${event.title} photo ${index + 1}`,
        caption: event.summary || event.category || "Community event",
        media_url: url,
        media_type: url.toLowerCase().includes(".mp4") ? "video" : "image",
        category: event.category || "Event",
        status: "published",
        featured: index === 0 && (event.show_on_homepage || event.featured || false),
        source_event_id: event.id,
      }, { onConflict: "media_url" });

      if (error) results.push(`gallery_error:${error.message}`);
    }

    if (items.length) results.push("gallery_created");
  }

  return results;
}
