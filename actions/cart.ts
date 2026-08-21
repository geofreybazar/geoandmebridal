"use server";

import { AddItemToCart } from "@/services/cart";
import { Items } from "@/types/cart";

export const addItem = async (data: Items) => {
  try {
    const result = await AddItemToCart(data);

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
