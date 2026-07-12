import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";
import { cmsTables, type CmsModule } from "@/lib/cmsTables";

function tableFor(module: CmsModule) {
  return cmsTables[module];
}

export async function adminList(module: CmsModule, request: Request) {
  try {
    requireAdminKey(request);
    const { data, error } = await supabaseAdmin
      .from(tableFor(module))
      .select("*")
      .order("created_at", { ascending: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data: data ?? [] });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function adminCreate(module: CmsModule, request: Request) {
  try {
    requireAdminKey(request);
    const body = await request.json();
    const { data, error } = await supabaseAdmin
      .from(tableFor(module))
      .insert(body)
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function adminUpdate(module: CmsModule, request: Request) {
  try {
    requireAdminKey(request);
    const body = await request.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    const { data, error } = await supabaseAdmin
      .from(tableFor(module))
     .update({
  ...updates,
  approved:
    updates.status === "published"
      ? true
      : updates.status === "draft"
      ? false
      : undefined,
  updated_at: new Date().toISOString(),
})
      .eq("id", id)
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function adminDelete(module: CmsModule, request: Request) {
  try {
    requireAdminKey(request);
    const body = await request.json();
    const { id } = body;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    const { error } = await supabaseAdmin.from(tableFor(module)).delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function publicList(module: CmsModule) {
  const { data, error } = await supabaseAdmin
    .from(tableFor(module))
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data: data ?? [] });
}
