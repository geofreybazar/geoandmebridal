import { DeliveryDetailsOutput } from "@/zodSchemas/cartCheckoutForm";
import { clientAuthHeaders } from "@/lib/backendAuth";
import { backendUrl } from "@/lib/backendUrl";

const service_route = process.env.NEXT_PUBLIC_CHECKOUT_ROUTE;
const API_URL = backendUrl(service_route, "NEXT_PUBLIC_CHECKOUT_ROUTE");

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

    return await response.json();
  } catch (error: unknown) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
