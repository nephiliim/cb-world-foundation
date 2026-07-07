import { adminCreate, adminDelete, adminList, adminUpdate } from "@/lib/cmsApi";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return adminList("gallery", request); }
export async function POST(request: Request) { return adminCreate("gallery", request); }
export async function PATCH(request: Request) { return adminUpdate("gallery", request); }
export async function DELETE(request: Request) { return adminDelete("gallery", request); }
