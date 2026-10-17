"use server";

import { z } from "zod";

import { revalidatePath } from "next/cache";
import { DeactivateAccount, UpdateClientProfile } from "@/services/clients";
import { requireClientId } from "@/lib/backendAuth";

import {
  updateClientContactSchema,
  UpdateClientContactType,
} from "@/zodSchemas/clients";

type State = {
  success: boolean;
  message?: string;
};

// The first argument is kept for existing callers; the signed-in client is used
export const updateClientProfile = async (
  _clientId: string,
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
    const result = await UpdateClientProfile(
      await requireClientId(),
      parsed.data,
    );
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

export const deactivateAccount = async (_: State, _formData: FormData) => {
  try {
    // Always the signed-in client, whatever the form says
    await DeactivateAccount(await requireClientId());

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
