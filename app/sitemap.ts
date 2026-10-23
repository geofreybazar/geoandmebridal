import type { MetadataRoute } from "next";
import { GetBrides } from "@/services/brides";
import { GetCollections } from "@/services/collections";
import { GetProducts } from "@/services/shop";
import { SHOP_CATEGORIES } from "@/utils/constants/shop";

const SITE_URL = "https://www.geoandmebridal.com";

// Rebuilt once a day; a failed rebuild keeps serving the last good sitemap
export const revalidate = 86400;

// Public pages only: profile, checkout, login and success pages stay out
const STATIC_PATHS = [
  "/",
  "/aboutus",
  "/appointment",
  "/brides",
  "/collection",
  "/contact",
  "/shop",
  "/testimonials",
  "/privacy-policy",
  "/terms-of-service",
];

async function brideIds() {
  const ids: string[] = [];
  let cursor: string | null = null;
  do {
    const page = await GetBrides(cursor);
    ids.push(...page.data.map((bride) => bride._id));
    cursor = page.nextCursor;
  } while (cursor);
  return ids;
}

async function productPaths() {
  const paths: string[] = [];
  let page = 1;
  let totalPages = 1;
  do {
    // No category: every published product
    const result = await GetProducts({ page: String(page) }, "");
    paths.push(...result.products.map((p) => `/shop/${p.tag}/${p.slug}`));
    totalPages = result.totalPages;
    page++;
  } while (page <= totalPages);
  return paths;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [brides, collections, products] = await Promise.all([
    brideIds(),
    GetCollections(),
    productPaths(),
  ]);

  return [
    ...STATIC_PATHS,
    ...SHOP_CATEGORIES.map((category) => category.link),
    ...brides.map((id) => `/brides/${id}`),
    ...collections.map((collection) => `/collection/${collection._id}`),
    ...products,
  ].map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` }));
}
