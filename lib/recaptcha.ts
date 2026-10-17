// reCAPTCHA v3 check for bookings and reschedule requests (SEC-13).
// Runs on the Next.js server only; RECAPTCHA_SECRET_KEY never reaches the browser.

if (typeof window !== "undefined") {
  throw new Error("lib/recaptcha must only run on the server");
}

export const RECAPTCHA_ACTIONS = {
  book: "book_appointment",
  reschedule: "reschedule_appointment",
} as const;

export type RecaptchaAction =
  (typeof RECAPTCHA_ACTIONS)[keyof typeof RECAPTCHA_ACTIONS];

// Google scores 0.0 (bot) to 1.0 (human)
export const MIN_SCORE = 0.5;

export const VERIFICATION_FAILED_MESSAGE =
  "We couldn't verify your request. Please try again, or contact us directly to book.";

// Sites the token may come from; RECAPTCHA_HOSTNAMES (comma-separated) overrides
const allowedHostnames = () => {
  const configured = process.env.RECAPTCHA_HOSTNAMES?.split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
  if (configured && configured.length > 0) return configured;
  return process.env.NODE_ENV === "production"
    ? ["www.geoandmebridal.com", "geoandmebridal.com"]
    : ["localhost", "127.0.0.1"];
};

type SiteVerifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export type RecaptchaResult =
  | { ok: true; skipped?: "unavailable" }
  | { ok: false; error: string };

// A real failure (bot-like score, wrong action or site, bad or reused token)
// refuses the request. If Google cannot be reached, the request goes through
// (owner decision 2026-10-17); the backend's booking limit still applies.
export const verifyRecaptcha = async (
  token: unknown,
  expectedAction: RecaptchaAction,
  fetchImpl: typeof fetch = fetch,
): Promise<RecaptchaResult> => {
  if (typeof token !== "string" || token.length === 0 || token.length > 4000) {
    return { ok: false, error: VERIFICATION_FAILED_MESSAGE };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("reCAPTCHA: RECAPTCHA_SECRET_KEY is not set; check skipped");
    return { ok: true, skipped: "unavailable" };
  }

  let google: SiteVerifyResponse;
  try {
    const response = await fetchImpl(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }).toString(),
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    google = (await response.json()) as SiteVerifyResponse;
  } catch (error) {
    console.error(
      "reCAPTCHA: Google could not be reached; check skipped:",
      error instanceof Error ? error.message : error,
    );
    return { ok: true, skipped: "unavailable" };
  }

  const passed =
    google.success === true &&
    typeof google.score === "number" &&
    google.score >= MIN_SCORE &&
    google.action === expectedAction &&
    typeof google.hostname === "string" &&
    allowedHostnames().includes(google.hostname.toLowerCase());

  if (!passed) {
    // No token or personal data in the log
    console.warn(
      `reCAPTCHA refused: action=${google.action ?? "-"} score=${google.score ?? "-"} host=${google.hostname ?? "-"} codes=${(google["error-codes"] ?? []).join(",") || "-"}`,
    );
    return { ok: false, error: VERIFICATION_FAILED_MESSAGE };
  }

  return { ok: true };
};
