import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('CB World Foundation contact enquiry:', body);
  return NextResponse.json({ ok: true });
}
