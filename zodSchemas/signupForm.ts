import { z } from "zod";

export const clientSignupSchema = z.object({
  title: z.string().min(1, "Title is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z
    .string()
    .min(11, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
  provider: z.string().min(1, "Provider is required"),
});

export type ClientSignupType = z.infer<typeof clientSignupSchema>;
