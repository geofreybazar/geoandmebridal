"use server";

import { z } from "zod";
import { ClientUserSignup } from "@/services/clients";
import { clientSignupSchema, ClientSignupType } from "@/zodSchemas/signupForm";
import { auth } from "@/auth";

export const signupUser = async (data: ClientSignupType) => {
  // Email and provider come from the verified Google/Facebook sign-in,
  // not from the form
  const session = await auth();
  if (!session?.user?.email || !session.user.provider) {
    return {
      success: false,
      error: "Please sign in with Google or Facebook first.",
    };
  }
  if (session.user.clientId) {
    return {
      success: false,
      error: "You already have an account.",
    };
  }

  const parsed = clientSignupSchema.safeParse({
    ...data,
    email: session.user.email,
    provider: session.user.provider,
  });

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
