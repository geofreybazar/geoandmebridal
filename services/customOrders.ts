import { CustomOrder } from "@/types/customOrders";
import { CreatePaymongoPaymentRequestType } from "@/zodSchemas/customOrderPayment";

const service_route = process.env.NEXT_PUBLIC_CUSTOM_ORDER_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const GetCustomOrder = async (
  customOrderId: string,
): Promise<CustomOrder> => {
  try {
    const response = await fetch(`${API_URL}/${customOrderId}`, {
      method: "GET",
      //   next: { revalidate: 86400 },
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

export const CustomOrderRequestPayment = async (
  data: CreatePaymongoPaymentRequestType,
) => {
  try {
    const response = await fetch(`${API_URL}/paymentrequest`, {
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

    return response.json();
  } catch (error: unknown) {
    console.error("Error logging in:", error);
    throw error;
  }
};
