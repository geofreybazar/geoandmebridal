import { ShopOrder } from "@/types/shopOrders";

const service_route = process.env.NEXT_PUBLIC_SHOP_ORDER_ROUTE;

const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const GetClientShopOrder = async (
  status: string,
  clientId: string,
): Promise<ShopOrder[]> => {
  try {
    const response = await fetch(
      `${API_URL}/clientshoporders/${clientId}/${status}`,
      {
        method: "GET",
        //   next: { revalidate: 86400 },
      },
    );

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error getting custom order:", error);
    throw error;
  }
};
