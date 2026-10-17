"use server";


import { AddNewAppointment, RescheduleAppointment } from "@/services/appointment";
import { RECAPTCHA_ACTIONS, verifyRecaptcha } from "@/lib/recaptcha";
import {
  BookAppointmentType,
  RescheduleAppointmentType,
} from "@/zodSchemas/appointment";

interface SubmitNewAppointmentPayload extends BookAppointmentType {
  recaptchaToken: string;
}

interface RescheduleAppointmentPayload extends RescheduleAppointmentType {
  recaptchaToken: string;
}

export async function submitNewAppointment(data: SubmitNewAppointmentPayload) {
  const token = data.recaptchaToken;
  const { recaptchaToken, ...appointmentData } = data;

  // Refused when reCAPTCHA says bot; nothing is sent to the backend (SEC-13)
  const check = await verifyRecaptcha(token, RECAPTCHA_ACTIONS.book);
  if (!check.ok) {
    return { success: false, error: check.error };
  }

  try {
    const result = await AddNewAppointment(appointmentData);

    return {
      success: true,
      result,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Unexpected server error.",
    };
  }
}

export const rescheduleAppointmentAction = async (
  data: RescheduleAppointmentPayload,
) => {
  const token = data.recaptchaToken;
  const { recaptchaToken, ...appointmentData } = data;

  const check = await verifyRecaptcha(token, RECAPTCHA_ACTIONS.reschedule);
  if (!check.ok) {
    return { success: false, error: check.error };
  }

  try {
    const rescheduleAppointment = await RescheduleAppointment(appointmentData);

    return {
      success: true,
      rescheduleAppointment,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Unexpected server error.",
    };
  }
};
