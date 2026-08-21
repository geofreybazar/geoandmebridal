import { notFound } from "next/navigation";
import { GetPaymentRequest } from "@/services/paymentRequest";

import Header from "@/components/MyProfile/ViewReceipt/Header";
import ReceiptCard from "@/components/MyProfile/ViewReceipt/ReceiptCard";

const ViewReceipt = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const paymentRequest = await GetPaymentRequest(id);

  if (!paymentRequest) return notFound();

  return (
    <section className='flex-1  py-16 space-y-10'>
      {/* Header */}
      <Header />

      {/* Receipt Card */}
      <ReceiptCard paymentRequest={paymentRequest} />
    </section>
  );
};

export default ViewReceipt;
