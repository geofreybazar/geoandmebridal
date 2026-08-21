export type CustomOrderStatus =
  | "draft"
  | "active_projects"
  | "completed_projects"
  | "archived_projects";

export type PaymentStatus = "unpaid" | "downpayment_paid" | "paid" | "refunded";

export type PaymentProvider = "paymongo" | "cash";

export type PaymentType = "downpayment" | "balance";

export interface CustomOrderItem {
  _id: string;
  status: "design" | "measurements" | "in-production" | "fitting" | "completed";
  item: string;
  quantity: number;
  price: number;
}

interface PaymenSource {
  brand: string;
  country: string;
  id: string;
  last4: string;
  type: string;
}

interface Payments {
  _id: string;
  clientId: string;
  createdAt: Date;
  customOrderId: string;
  netAmount: number;
  paidAt: Date;
  paymentRequestId: string;
  paymentSource: PaymenSource;
  paymentStage: "downpayment" | "balance";
  paymongoEventiD: string;
  paymongoFee: number;
  paymongoForeignFee: number;
  referenceNumber: string;
  totalAmount: number;
  updatedAt: Date;
}

export interface CustomOrder {
  _id: string;
  clientId: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  status: CustomOrderStatus;
  paymentStatus: PaymentStatus;
  eventDate: Date;
  orders: CustomOrderItem[];
  totalAmount: number;
  downpaymentAmount: number;
  balanceAmount: number;
  payments: Payments[] | [];
  createdAt: Date;
  updatedAt: Date;
}
