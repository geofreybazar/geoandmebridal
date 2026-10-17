import { addDays, addMonths, startOfDay } from "date-fns";

// Same rule as the backend (new_backend/src/utils/manilaDate.ts): clients book
// from tomorrow up to 12 months ahead (owner decision 2026-10-17). Dates outside
// the window are also refused by the backend.
export const BOOKING_MONTHS_AHEAD = 12;

export const bookingWindow = () => {
  const today = startOfDay(new Date());
  return {
    first: addDays(today, 1),
    last: addMonths(today, BOOKING_MONTHS_AHEAD),
  };
};
