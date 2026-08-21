import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { GetPaymentRequest } from "@/services/paymentRequest";

import Header from "@/components/SuccessPayment/Header";
import SummaryCard from "@/components/SuccessPayment/SummaryCard";
import Actions from "@/components/SuccessPayment/Actions";

const messageMap: Record<string, string> = {
  downpayment:
    "Your downpayment has been successfully received and your couture order is now confirmed. Our atelier will begin crafting your bespoke pieces.",
  balance:
    "Your balance has been successfully settled. Your couture pieces are now ready for pickup or delivery.",
};

const SuccessfulPaymentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const paymentRequest = await GetPaymentRequest(id);

  if (!paymentRequest) return notFound();

  const message = messageMap[paymentRequest.type] || messageMap.downpayment;

  return (
    <section className='max-w-3xl mx-auto py-12 space-y-12 text-center'>
      {/* Icon */}
      <div className='flex justify-center'>
        <CheckCircle className='w-16 h-16 text-warmTaupe' />
      </div>

      {/* Header */}
      <Header message={message} />

      {/* Summary Card */}
      <SummaryCard paymentRequest={paymentRequest} />

      {/* Actions */}
      <Actions />
    </section>
  );
};

export default SuccessfulPaymentPage;
