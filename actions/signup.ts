"use server";

import { z } from "zod";
import { ClientUserSignup } from "@/services/clients";
import { clientSignupSchema, ClientSignupType } from "@/zodSchemas/signupForm";

export const signupUser = async (data: ClientSignupType) => {
  const parsed = clientSignupSchema.safeParse(data);

  // Validation failed
  if (!parsed.success) {
    return {
      success: false,
      errors: z.flattenError(parsed.error),
    };
  }

  try {
    const result = await ClientUserSignup(parsed.data);
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
