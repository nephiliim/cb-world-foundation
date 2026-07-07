import { publicList } from "@/lib/cmsApi";
export const dynamic = "force-dynamic";
export async function GET() { return publicList("feedback"); }
