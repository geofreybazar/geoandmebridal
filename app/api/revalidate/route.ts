import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const { tag } = await request.json();
  revalidateTag(tag, "default");
  return NextResponse.json({ revalidated: true });
}
