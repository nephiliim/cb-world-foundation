import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

export async function GET(request: Request) {
  try {
    requireAdminKey(request);
    const { data, error } = await supabaseAdmin
      .from("bleed_kits")
      .select("*")
      .order("created_at", { ascending: false });
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
    const { data, error } = await supabaseAdmin
      .from("bleed_kits")
      .insert(body)
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
