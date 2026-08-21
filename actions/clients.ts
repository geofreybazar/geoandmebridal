"use server";

import { z } from "zod";

import { revalidatePath } from "next/cache";
import { DeactivateAccount, UpdateClientProfile } from "@/services/clients";

import {
  updateClientContactSchema,
  UpdateClientContactType,
} from "@/zodSchemas/clients";

type State = {
  success: boolean;
  message?: string;
};

export const updateClientProfile = async (
  clientId: string,
  data: UpdateClientContactType,
) => {
  const parsed = updateClientContactSchema.safeParse(data);

  // Validation failed
  if (!parsed.success) {
    return {
      success: false,
      errors: z.flattenError(parsed.error),
    };
  }

  try {
    const result = await UpdateClientProfile(clientId, parsed.data);
    revalidatePath(`/myprofile/settings`);
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

export const deactivateAccount = async (_: State, formData: FormData) => {
  try {
    const userId = formData.get("userId") as string;

    // call your backend/service here
    await DeactivateAccount(userId);

    return {
      success: true,
      message: "Account successfully deactivated.",
    };
  } catch (error) {
    console.error("Deactivate account error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    };
  }
};
