import { CustomOrder } from "@/types/customOrders";
import { CreatePaymongoPaymentRequestType } from "@/zodSchemas/customOrderPayment";
import { clientAuthHeaders } from "@/lib/backendAuth";
import { backendUrl } from "@/lib/backendUrl";

const service_route = process.env.NEXT_PUBLIC_CUSTOM_ORDER_ROUTE;
const API_URL = backendUrl(service_route, "NEXT_PUBLIC_CUSTOM_ORDER_ROUTE");

export const GetCustomOrder = async (
  customOrderId: string,
): Promise<CustomOrder | null> => {
  try {
    const response = await fetch(`${API_URL}/${customOrderId}`, {
      method: "GET",
      cache: "no-store",
      headers: await clientAuthHeaders(),
    });

    // Not the caller's or unknown: the page shows "not found" (404)
    if (response.status === 404) return null;

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

export const GetClientCustomOrder = async (
  status: string,
  clientId: string,
): Promise<CustomOrder[]> => {
  try {
    const response = await fetch(
      `${API_URL}/clientorders/${clientId}/${status}`,
      {
        method: "GET",
        cache: "no-store",
        headers: await clientAuthHeaders(),
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

export const CustomOrderRequestPayment = async (
  data: CreatePaymongoPaymentRequestType,
) => {
  try {
    const response = await fetch(`${API_URL}/paymentrequest`, {
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
    console.error("Error logging in:", error);
    throw error;
  }
};
