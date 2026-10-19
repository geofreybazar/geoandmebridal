import { z } from "zod";

// Address of the backend API (CFG-03). NEXT_PUBLIC_ so the catalogue reads
// that run in the browser get it too; Next.js inlines it at build time (it is
// not a secret). Unset: the Render backend in production builds, else localhost.
const DEFAULT_BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://geoandmebridalbackend.onrender.com"
    : "http://localhost:3005";

const baseUrlSchema = z
  .url({ protocol: /^https?$/ })
  .transform((value) => value.replace(/\/+$/, ""))
  .refine((value) => new URL(value).origin === value);

// Route names as mounted in the backend's app.ts, e.g. product_api
const routeSchema = z.string().regex(/^[a-z0-9_-]+$/);

const parsedBaseUrl = baseUrlSchema.safeParse(
  process.env.NEXT_PUBLIC_BACKEND_URL?.trim() || DEFAULT_BACKEND_URL,
);
if (!parsedBaseUrl.success) {
  throw new Error(
    "NEXT_PUBLIC_BACKEND_URL must be the backend's address like https://api.example.com",
  );
}

// Base URL of one backend router. Pass the route variable itself
// (process.env.NEXT_PUBLIC_..._ROUTE, so Next.js can inline it) and its name
// for the error message. Fails when the module loads, so a missing variable
// stops the build instead of sending requests to /undefined/.
export const backendUrl = (route: string | undefined, variableName: string) => {
  const parsedRoute = routeSchema.safeParse(route?.trim());
  if (!parsedRoute.success) {
    throw new Error(
      `${variableName} is missing or invalid: expected a route name like product_api`,
    );
  }
  return `${parsedBaseUrl.data}/${parsedRoute.data}`;
};
