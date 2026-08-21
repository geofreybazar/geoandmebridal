import { z } from "zod";

// ✅ Base fields shared by both pickup & delivery
const baseSchema = {
  emailAddress: z.email("Invalid email address").min(1, "Email is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z
    .string()
    .transform((val) => (val.startsWith("0") ? val.slice(1) : val))
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Phone number must contain only numbers",
    })
    .refine((val) => val.length >= 9, {
      message: "Phone number must be at least 9 digits",
    })
    .refine((val) => val.length <= 15, {
      message: "Phone number must be at most 15 digits",
    }),
  shippingFee: z.number().default(0),
};

// ✅ Delivery schema (requires postalCode, city, address)
const deliverySchema = z.object({
  ...baseSchema,
  pickupOrDelivery: z.literal("fordelivery"),
  postalCode: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  dateOfPickup: z.date().optional(),
  timeOfPickup: z.string().optional(),
});

// ✅ Pickup schema (requires dateOfPickup, timeOfPickup)
const pickupSchema = z.object({
  ...baseSchema,
  pickupOrDelivery: z.literal("forpickup"),
  dateOfPickup: z.date("Date of pickup is required"),
  timeOfPickup: z.string().min(1, "Time of pickup is required"),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
});

// ✅ Final schema using discriminatedUnion
export const deliveryDetailsSchema = z.discriminatedUnion("pickupOrDelivery", [
  deliverySchema,
  pickupSchema,
]);

export type DeliveryDetailsInput = z.input<typeof deliveryDetailsSchema>;
export type DeliveryDetailsOutput = z.output<typeof deliveryDetailsSchema>;
