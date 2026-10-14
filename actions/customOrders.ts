"use server";

import { GetClientCustomOrder } from "@/services/customOrders";
import { requireClientId } from "@/lib/backendAuth";

// Custom orders of the signed-in client
export const getMyCustomOrders = async (status: string) => {
  try {
    const result = await GetClientCustomOrder(status, await requireClientId());

    return {
      success: true,
      result,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Unexpected server error.",
    };
  }
};
