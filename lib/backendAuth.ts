import { headers } from "next/headers";
import { isIP } from "net";
import { auth } from "@/auth";
import { clientTokenHeader, siteTokenHeader } from "./backendToken";

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

// The visitor's IP as forwarded by Vercel (x-real-ip, else the first
// x-forwarded-for entry); undefined when unknown
const visitorIp = async () => {
  const requestHeaders = await headers();
  const candidate =
    requestHeaders.get("x-real-ip")?.trim() ||
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();
  return candidate && isIP(candidate) ? candidate : undefined;
};

// Booking: the signed-in client's token, or a site token for guests, both
// carrying the visitor's IP. Call only after the reCAPTCHA check passed.
export const bookingAuthHeaders = async () => {
  const session = await auth();
  const clientId = session?.user?.clientId;
  const vip = await visitorIp();
  const extra = vip ? { vip } : {};
  return clientId ? clientTokenHeader(clientId, extra) : siteTokenHeader(extra);
};
