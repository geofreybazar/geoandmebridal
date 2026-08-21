"use server";

import { z } from "zod";
import {
  CreatePaymongoPaymentRequestType,
  CreatePaymongoPaymentRequestSchema,
} from "@/zodSchemas/customOrderPayment";
import { CustomOrderRequestPayment } from "@/services/customOrders";

export const requestPayment = async (
  data: CreatePaymongoPaymentRequestType,
) => {
  const parsed = CreatePaymongoPaymentRequestSchema.safeParse(data);

  // Validation failed
  if (!parsed.success) {
    return {
      success: false,
      errors: z.flattenError(parsed.error),
    };
  }

  try {
    const result = await CustomOrderRequestPayment(parsed.data);
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
