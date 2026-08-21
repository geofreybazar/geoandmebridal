import { PaymentRequest } from "@/types/paymentRequest";

const service_route = process.env.NEXT_PUBLIC_PAYMENT_REQUEST_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const GetClientPayments = async (
  clientId: string,
): Promise<PaymentRequest[]> => {
  try {
    const response = await fetch(`${API_URL}/payments/${clientId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
    console.error("Error fetching client payments:", error);
    throw error;
  }
};

export async function GetPaymentRequest(id: string): Promise<PaymentRequest> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // next: { revalidate: 86400 },
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
    console.error("Error fetching payment request:", error);
    throw error;
  }
}

export async function GetPendingPaymentRequest(
  customOrderid: string,
): Promise<PaymentRequest> {
  try {
    const response = await fetch(`${API_URL}/pending/${customOrderid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // next: { revalidate: 86400 },
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
    console.error("Error fetching pending payment request:", error);
    throw error;
  }
}
