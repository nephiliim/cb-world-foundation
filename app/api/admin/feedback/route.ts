import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

export async function POST(request: Request) {
  try {
    requireAdminKey(request);
    const body = await request.json();
    const { data, error } = await supabaseAdmin.from("cms_gallery").insert(body).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
