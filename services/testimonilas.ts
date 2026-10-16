import { Testimonials } from "@/types/testimonials";

// const service_route = process.env.NEXT_PUBLIC_TESTIMONIAL_ROUTE;
const service_route = "testimonial_api";

const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

// featuredOnly: the home page shows only testimonials marked Featured in the admin
export const GetTestimonials = async (
  featuredOnly = false,
): Promise<Testimonials[]> => {
  try {
    const response = await fetch(`${API_URL}${featuredOnly ? "?featured=true" : ""}`, {
      method: "GET",
      next: {
        tags: ["testimonials"],
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage =
        data?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);

      throw new Error(errorMessage);
    }

    return data;
  } catch (error: unknown) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};
