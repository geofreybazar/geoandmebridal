import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { isCacheTag } from "@/lib/cacheTags";
import { isValidRevalidateToken } from "@/lib/revalidateToken";

// Called by the backend after an admin change (SEC-12): only with its signed
// token, and only for the known cache tags
export async function POST(request: Request) {
  if (!isValidRevalidateToken(request.headers.get("authorization"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const tags: unknown = body?.tags;
  if (!Array.isArray(tags) || tags.length === 0 || !tags.every(isCacheTag)) {
    return NextResponse.json({ error: "Unknown cache tag" }, { status: 400 });
  }

  // Expire now, so the next visitor gets the change (not one more stale page)
  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  return NextResponse.json({ revalidated: tags });
}
