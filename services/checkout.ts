import { DeliveryDetailsOutput } from "@/zodSchemas/cartCheckoutForm";

const service_route = process.env.NEXT_PUBLIC_CHECKOUT_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

type notEnoughStockType = {
  productId: string;
  sku: string;
  requestedQuantity: number;
  availableStock: number;
  userReserved: number;
  variantId: string;
};

type CartCheckoutReturn = {
  success: boolean;
  reason?: string;
  message?: string;
  checkoutUrl?: string;
  items?: notEnoughStockType[];
};

export const CartCheckout = async (
  data: DeliveryDetailsOutput,
): Promise<CartCheckoutReturn> => {
  try {
    const response = await fetch(`${API_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

    return await response.json();
  } catch (error: unknown) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
