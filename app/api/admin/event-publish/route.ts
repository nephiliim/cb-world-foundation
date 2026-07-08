import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";
import { publishEventFeeds } from "@/lib/eventAutoFeed";

export async function POST(request: Request) {
  try {
    requireAdminKey(request);
    const { eventId } = await request.json();
    const { data, error } = await supabaseAdmin.from("cms_events").select("*").eq("id", eventId).single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    const feedResults = await publishEventFeeds(data);
    return NextResponse.json({ ok: true, feedResults });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
