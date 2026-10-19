import { Bride, ReturnedBrides } from "@/types/brides";
import { backendUrl } from "@/lib/backendUrl";

const service_route = process.env.NEXT_PUBLIC_BRIDE_ROUTE;
const API_URL = backendUrl(service_route, "NEXT_PUBLIC_BRIDE_ROUTE");

export async function GetBrides(
  pageParam: string | null,
): Promise<ReturnedBrides> {
  const data = await fetch(
    `${API_URL}/getclientbrides?${pageParam ? `&cursor=${pageParam}` : ""}`,
    {
      method: "GET",
      // next: { revalidate: 86400, tags: ["brides"] },
    },
  );

  if (!data.ok) {
    throw new Error(
      `Failed to fetch collections  ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}

export async function GetBride(id: string): Promise<Bride | null> {
  const data = await fetch(`${API_URL}/getbride/${id}`, {
    method: "GET",
    next: { revalidate: 86400, tags: ["brides"] },
  });

  // Unknown or malformed id: the page shows "not found" (404/400 since P2-7)
  if (data.status === 404 || data.status === 400) return null;

  if (!data.ok) {
    throw new Error(
      `Failed to fetch bride ${id}: ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}
