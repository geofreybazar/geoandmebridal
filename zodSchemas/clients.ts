import { z } from "zod";

export const updateClientContactSchema = z.object({
  address: z.string().min(1, "Address is required"),
  phoneNumber: z
    .string()
    .min(11, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
});

export type UpdateClientContactType = z.infer<typeof updateClientContactSchema>;
