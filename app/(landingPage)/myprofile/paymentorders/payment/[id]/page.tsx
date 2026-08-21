import PaymentRequestCard from "@/components/MyProfile/Dashboard/PaymentRequest/PaymentRequest";
import { GetPaymentRequest } from "@/services/paymentRequest";
import { notFound } from "next/navigation";

const PaymentRequestPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const paymentRequest = await GetPaymentRequest(id);
  if (!paymentRequest) return notFound();

  return (
    <div className='flex-1'>
      <PaymentRequestCard paymentRequest={paymentRequest} />;
    </div>
  );
};

export default PaymentRequestPage;
