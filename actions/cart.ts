"use server";

import {
  AddItemToCart,
  GetClientCart,
  RemoveItemFromCart,
  UpdateCartItem,
} from "@/services/cart";
import { requireClientId } from "@/lib/backendAuth";
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

// Cart of the signed-in client (called by the cart hooks in the browser)
export const getCart = async () => {
  try {
    const result = await GetClientCart(await requireClientId());

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

export const removeItem = async (data: { productSku: string; cartId: string }) => {
  try {
    const result = await RemoveItemFromCart(data);

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

export const updateItem = async (data: {
  itemId: string;
  variantId: string;
  quantity: number;
}) => {
  try {
    const result = await UpdateCartItem(data);

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
