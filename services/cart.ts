import { CartType, Items } from "@/types/cart";
import { clientAuthHeaders } from "@/lib/backendAuth";

const service_route = process.env.NEXT_PUBLIC_CART_ROUTE;

const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const GetClientCart = async (clientId: string): Promise<CartType> => {
  const response = await fetch(`${API_URL}/${clientId}`, {
    method: "GET",
    cache: "no-store",
    headers: await clientAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorBody = data;
    const errorMessage =
      errorBody?.error || response.statusText || "Unknown server error";

    console.error("API fetch failed:", response.status, response.statusText);
    throw new Error(errorMessage);
  }

  return data;
};

export const AddItemToCart = async (data: Items): Promise<CartType> => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await clientAuthHeaders()),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
};

export const RemoveItemFromCart = async ({
  productSku,
  cartId,
}: {
  productSku: string;
  cartId: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/${cartId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(await clientAuthHeaders()),
      },
      body: JSON.stringify({ cartId, productSku }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error removing item to cart:", error);
    throw error;
  }
};
