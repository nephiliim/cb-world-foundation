import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("bleed_kits")
    .select("id,name,address,area,status,available_hours,notes,latitude,longitude")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json([], { status: 200 });
  return NextResponse.json(data || []);
}
