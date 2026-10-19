import { ClientUser } from "@/types/client";
import { siteTokenHeader } from "@/lib/backendToken";
import { backendUrl } from "@/lib/backendUrl";

// Used by auth.ts on sign-in. Kept apart from services/clients.ts, which reads
// the Auth.js session and would otherwise import auth.ts back.

const service_route = process.env.NEXT_PUBLIC_CLIENT_ROUTE;
const API_URL = backendUrl(service_route, "NEXT_PUBLIC_CLIENT_ROUTE");

export const ClientUserLogin = async (
  email: string,
  provider: string | undefined,
): Promise<ClientUser | null> => {
  const data = {
    email,
    provider,
  };
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...siteTokenHeader(),
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error logging in:", error);
    throw error;
  }
};
