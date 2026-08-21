import { z } from "zod";

export const bookAppointmentSchema = z.object({
  clientId: z.string().optional(),
  selectedDate: z.date("appointment date is required"),
  selectedTime: z.string().min(1, "Time is required"),
  fullName: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  email: z.email("Email address is required"),
  phone: z
    .string()
    .regex(/^(09\d{9}|(\+639)\d{9})$/, {
      message: "Invalid Philippine mobile number",
    })
    .optional()
    .or(z.literal("")),
});

export type BookAppointmentType = z.infer<typeof bookAppointmentSchema>;

export const rescheduleAppointmentSchema = z.object({
  clientId: z.string(),
  rescheduleDate: z.date("Reschedule date is required"),
  rescheduleTime: z.string().min(1, "Reschedule time is required"),
  reason: z.string().min(1, "Reason is required"),
});

export type RescheduleAppointmentType = z.infer<
  typeof rescheduleAppointmentSchema
>;
