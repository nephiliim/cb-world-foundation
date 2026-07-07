import { adminCreate, adminDelete, adminList, adminUpdate } from "@/lib/cmsApi";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return adminList("news", request); }
export async function POST(request: Request) { return adminCreate("news", request); }
export async function PATCH(request: Request) { return adminUpdate("news", request); }
export async function DELETE(request: Request) { return adminDelete("news", request); }
