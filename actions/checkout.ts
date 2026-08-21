"use server";

import { CartCheckout } from "@/services/checkout";
import { DeliveryDetailsOutput } from "@/zodSchemas/cartCheckoutForm";

export const CheckOut = async (data: DeliveryDetailsOutput) => {
  try {
    const result = await CartCheckout(data);

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
