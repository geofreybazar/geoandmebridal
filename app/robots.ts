import type { MetadataRoute } from "next";

const SITE_URL = "https://www.geoandmebridal.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Signed-in, checkout and auth pages: nothing to index
      disallow: [
        "/myprofile",
        "/checkout",
        "/cartcheckoutpage",
        "/auth",
        "/api",
        "/login",
        "/signup",
        "/appointmentsuccess",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
