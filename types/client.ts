import { Appointment } from "./appointments";
import { CustomOrder } from "./customOrders";
import { PaymentRequest } from "./paymentRequest";
import { ProductType } from "./shop";

export interface ClientUser {
  _id: string;
  firstName: string;
  title?: string;
  lastName: string;
  email: string;
  provider?: string;
  phoneNumber: string;
  address?: string;
  city?: string;
  orders: ProductType[];
  customOrder: CustomOrder[];
  createdAt: Date;
  updatedAt: Date;
  paymentRequest: PaymentRequest[];
  appointments: Appointment[];
  status: "active" | "inactive";
}
