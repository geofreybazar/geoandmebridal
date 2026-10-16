import { createHmac, timingSafeEqual } from "crypto";

// Checks the token the backend sends with cache refresh requests
// (new_backend/src/config/revalidateTag.ts): HS256, signed with
// CLIENT_API_SECRET, for this site, at most a minute old.

if (typeof window !== "undefined") {
  throw new Error("lib/revalidateToken must only run on the server");
}

const decode = (part: string) => {
  try {
    return JSON.parse(Buffer.from(part, "base64url").toString("utf8"));
  } catch {
    return null;
  }
};

export const isValidRevalidateToken = (authorization: string | null) => {
  const secret = process.env.CLIENT_API_SECRET;
  if (!secret || !authorization?.startsWith("Bearer ")) return false;

  const parts = authorization.slice("Bearer ".length).split(".");
  if (parts.length !== 3) return false;
  const [header, payload, signature] = parts;

  const expected = createHmac("sha256", secret)
    .update(`${header}.${payload}`)
    .digest();
  const given = Buffer.from(signature, "base64url");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) {
    return false;
  }

  const head = decode(header);
  const claims = decode(payload);
  const now = Math.floor(Date.now() / 1000);

  return (
    head?.alg === "HS256" &&
    claims?.typ === "revalidate" &&
    claims.iss === "geoandmebridal-backend" &&
    claims.aud === "geoandmebridal-client" &&
    typeof claims.exp === "number" &&
    claims.exp > now &&
    typeof claims.iat === "number" &&
    claims.iat <= now + 60
  );
};
