import { Appointment } from "@/types/appointments";
import {
  BookAppointmentType,
  RescheduleAppointmentType,
} from "@/zodSchemas/appointment";
import { bookingAuthHeaders, clientAuthHeaders } from "@/lib/backendAuth";
import { backendUrl } from "@/lib/backendUrl";

const service_route = process.env.NEXT_PUBLIC_APPOINTMENT_ROUTE;
const API_URL = backendUrl(service_route, "NEXT_PUBLIC_APPOINTMENT_ROUTE");

export const AddNewAppointment = async (data: BookAppointmentType) => {
  // Signed-in clients book as themselves; guests book through this server
  // (site token). Only call after the reCAPTCHA check (actions/appointments.ts).
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await bookingAuthHeaders()),
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
