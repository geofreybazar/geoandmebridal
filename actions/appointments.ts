"use server";


import {
  AddNewAppointment,
  googleTokenVerification,
  RescheduleAppointment,
} from "@/services/appointment";
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

  // Verify google token
  await googleTokenVerification(token);

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

  // Verify google token
  await googleTokenVerification(token);

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
