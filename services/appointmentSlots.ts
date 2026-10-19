// Public: free appointment slots for a date. Kept apart from
// services/appointment.ts (which reads the session) because the booking
// calendar calls it from the browser.
import { backendUrl } from "@/lib/backendUrl";

const service_route = process.env.NEXT_PUBLIC_APPOINTMENT_ROUTE;
const API_URL = backendUrl(service_route, "NEXT_PUBLIC_APPOINTMENT_ROUTE");

export const GetAvailableTimeSlots = async (
  selectedDate: Date,
): Promise<string[]> => {
  const response = await fetch(`${API_URL}/availabletimes/${selectedDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      //  revalidate: 86400,
      tags: ["availabletimes"],
    },
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const msg = result?.message || result?.error || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  return await result;
};
