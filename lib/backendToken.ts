import { createHmac } from "crypto";

// Short-lived HS256 tokens the backend accepts on client-site routes
// (new_backend/src/middlewares/authenticateClient.ts). Signed on the Next.js
// server with CLIENT_API_SECRET; never sent to or created in the browser.

if (typeof window !== "undefined") {
  throw new Error("lib/backendToken must only run on the server");
}

const TOKEN_LIFETIME_SECONDS = 5 * 60;

const base64url = (value: string) => Buffer.from(value).toString("base64url");

const signToken = (claims: Record<string, unknown>) => {
  const secret = process.env.CLIENT_API_SECRET;
  if (!secret) {
    throw new Error("CLIENT_API_SECRET is not set");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({
      ...claims,
      iss: "geoandmebridal-client",
      aud: "geoandmebridal-backend",
      iat: now,
      exp: now + TOKEN_LIFETIME_SECONDS,
    }),
  );
  const signature = createHmac("sha256", secret)
    .update(`${header}.${payload}`)
    .digest("base64url");

  return `${header}.${payload}.${signature}`;
};

// Optional claims: vip = the visitor's IP as this server sees it (the backend
// limits bookings per visitor; requests reach it from this server's address)
type ExtraClaims = { vip?: string };

// For a signed-in client: the backend takes the client id from this token
export const clientTokenHeader = (clientId: string, extra: ExtraClaims = {}) => ({
  Authorization: `Bearer ${signToken({ typ: "client", sub: clientId, ...extra })}`,
});

// For calls made without a client id (sign-in lookup, signup, guest booking)
export const siteTokenHeader = (extra: ExtraClaims = {}) => ({
  Authorization: `Bearer ${signToken({ typ: "site", ...extra })}`,
});
