// Public: free appointment slots for a date. Kept apart from
// services/appointment.ts (which reads the session) because the booking
// calendar calls it from the browser.

const service_route = process.env.NEXT_PUBLIC_APPOINTMENT_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

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
