"use client";

import { useSession } from "next-auth/react";

import { PaymentRequest } from "@/types/paymentRequest";
import { CustomOrder } from "@/types/customOrders";

import Form from "./Form";

interface PaymentCardProps {
  paymentRequest: PaymentRequest;
  customorder: CustomOrder;
}

const PaymentCard = ({ paymentRequest, customorder }: PaymentCardProps) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const user = session.user;

  return (
    <Form
      user={user}
      customorder={customorder}
      paymentRequest={paymentRequest}
    />
  );
};

export default PaymentCard;
