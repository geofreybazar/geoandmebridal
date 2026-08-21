import { Bride, ReturnedBrides } from "@/types/brides";

const service_route = process.env.NEXT_PUBLIC_BRIDE_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

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

export async function GetBride(id: string): Promise<Bride> {
  const data = await fetch(`${API_URL}/getbride/${id}`, {
    method: "GET",
    next: { revalidate: 86400 },
  });

  if (!data.ok) {
    throw new Error(
      `Failed to fetch collection ${id}: ${data.status} ${data.statusText}`,
    );
  }

  return await data.json();
}
