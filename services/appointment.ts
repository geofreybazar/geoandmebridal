import { Appointment } from "@/types/appointments";
import {
  BookAppointmentType,
  RescheduleAppointmentType,
} from "@/zodSchemas/appointment";
import {
  clientAuthHeaders,
  optionalClientAuthHeaders,
} from "@/lib/backendAuth";

const service_route = process.env.NEXT_PUBLIC_APPOINTMENT_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const AddNewAppointment = async (data: BookAppointmentType) => {
  // Signed-in clients book as themselves; guests book without an account
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await optionalClientAuthHeaders()),
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
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(await clientAuthHeaders()),
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
      ...(await clientAuthHeaders()),
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
