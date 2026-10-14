"use server";

import { GetClientShopOrder } from "@/services/shopOrders";
import { requireClientId } from "@/lib/backendAuth";

// Shop orders of the signed-in client
export const getMyShopOrders = async (status: string) => {
  try {
    const result = await GetClientShopOrder(status, await requireClientId());

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
