import { auth } from "@/auth";
import { clientTokenHeader } from "./backendToken";

// The signed-in client's id, from the Auth.js session (never from the browser)
export const requireClientId = async () => {
  const session = await auth();
  const clientId = session?.user?.clientId;
  if (!clientId) {
    throw new Error("Please sign in to continue.");
  }
  return clientId;
};

// Authorization header for the signed-in client
export const clientAuthHeaders = async () =>
  clientTokenHeader(await requireClientId());

// Same, but empty for guests (appointment booking works without an account)
export const optionalClientAuthHeaders = async () => {
  const session = await auth();
  const clientId = session?.user?.clientId;
  return clientId ? clientTokenHeader(clientId) : {};
};
