import { PaymentRequest } from "@/types/paymentRequest";

import { GetCustomOrder } from "@/services/customOrders";
import PaymentCard from "./PaymentCard/PaymentCard";
import Header from "./Header";

const PaymentRequestCard = async ({
  paymentRequest,
}: {
  paymentRequest: PaymentRequest;
}) => {
  const customorder = await GetCustomOrder(paymentRequest.customOrderId);

  return (
    <section className='space-y-6 pt-5'>
      {/* Header */}
      <Header paymentRequest={paymentRequest} />

      {/* Payment Card */}
      <PaymentCard paymentRequest={paymentRequest} customorder={customorder} />
    </section>
  );
};

export default PaymentRequestCard;
