export type PaymentType = "downpayment" | "balance";

export type PaymentStatus =
  | "pending"
  | "paid"
  | "expired"
  | "cancelled"
  | "failed";

export type PaymentMethod = "gcash" | "card" | "grabpay" | "paymaya" | "bank";

export type PaymentDetails = {
  paymentId?: string;
  paymentType?: string;
  last4?: string;
  brand?: string;
};

export type PaymentRequest = {
  _id: string;

  clientId: string;
  customOrderId: string;

  referenceNumber: string;

  type: PaymentType;

  amount: number;

  currency: string;

  status: PaymentStatus;

  description?: string;

  /* PAYMONGO DATA */

  paymongoCheckoutId?: string;
  paymongoPaymentIntentId?: string;
  checkoutUrl?: string;

  /* PAYMENT RESULT */

  paidAt?: string | Date;
  paymentMethod?: PaymentMethod;
  paymentDetails?: PaymentDetails;

  /* ADMIN TRACKING */

  createdBy?: string;

  notes?: string;

  createdAt: string;
  updatedAt: string;
};
