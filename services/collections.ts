import { CollectionType } from "@/types/collections";

const service_route = process.env.NEXT_PUBLIC_COLLECTION_ROUTE;

const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export async function GetCollections(): Promise<CollectionType[]> {
  const data = await fetch(`${API_URL}/getclientcollections/`, {
    method: "GET",
    next: { revalidate: 86400, tags: ["collections"] },
  });

  if (!data.ok) {
    throw new Error(
      `Failed to fetch collections  ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}

export async function GetCollectionsImages(
  id: string,
): Promise<CollectionType | null> {
  const data = await fetch(`${API_URL}/getcollection/${id}`, {
    method: "GET",
    next: { revalidate: 86400, tags: ["collections"] },
  });

  // Unknown or malformed id: the page shows "not found" (404/400 since P2-7)
  if (data.status === 404 || data.status === 400) return null;

  if (!data.ok) {
    throw new Error(
      `Failed to fetch collection ${id}: ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}
