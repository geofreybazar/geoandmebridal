import { Appointment } from "@/types/appointments";
import {
  BookAppointmentType,
  RescheduleAppointmentType,
} from "@/zodSchemas/appointment";

const service_route = process.env.NEXT_PUBLIC_APPOINTMENT_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const AddNewAppointment = async (data: BookAppointmentType) => {
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const msg = result?.message || result?.error || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  return await result;
};

export const googleTokenVerification = async (token: string) => {
  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );

  const google = await verifyRes.json();

  if (!google.success || google.score < 0.5) {
    return {
      success: false,
      error: "Failed security check. Please try again.",
    };
  }
};

export const GetClientAppointments = async (
  clientId: string,
): Promise<Appointment[]> => {
  const response = await fetch(`${API_URL}/clientappointments/${clientId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      //  revalidate: 86400,
      tags: ["appopintments", clientId],
    },
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const msg = result?.message || result?.error || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  return await result;
};

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

export const RescheduleAppointment = async (
  data: RescheduleAppointmentType,
) => {
  const response = await fetch(`${API_URL}/reschedule/${data.clientId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const msg = result?.message || result?.error || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  return await result;
};
