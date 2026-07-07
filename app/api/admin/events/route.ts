import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function GET(request: Request) {
  try {
    requireAdminKey(request);
    const { data, error } = await supabaseAdmin
      .from("cms_events")
      .select("*")
      .order("event_date", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    requireAdminKey(request);
    const body = await request.json();
    const title = body.title || "Untitled event";

    const payload = {
      ...body,
      slug: body.slug || slugify(title),
      status: body.status || "published",
      featured: body.featured === true || body.featured === "true",
      impact_young_people: Number(body.impact_young_people || 0),
      impact_families: Number(body.impact_families || 0),
      impact_volunteers: Number(body.impact_volunteers || 0),
      bleed_kits_supported: Number(body.bleed_kits_supported || 0),
      gallery_urls: typeof body.gallery_urls === "string"
        ? body.gallery_urls.split("\n").map((item: string) => item.trim()).filter(Boolean)
        : body.gallery_urls || [],
      tags: typeof body.tags === "string"
        ? body.tags.split(",").map((item: string) => item.trim()).filter(Boolean)
        : body.tags || [],
    };

    const { data, error } = await supabaseAdmin
      .from("cms_events")
      .insert(payload)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
