// Cache tags the backend may refresh through /api/revalidate. Same list as
// new_backend/src/config/revalidateTag.ts; use these names in services/*.
export const CACHE_TAGS = [
  "brides",
  "collections",
  "products",
  "categories",
  "testimonials",
] as const;

export type CacheTag = (typeof CACHE_TAGS)[number];

export const isCacheTag = (value: unknown): value is CacheTag =>
  typeof value === "string" && (CACHE_TAGS as readonly string[]).includes(value);
