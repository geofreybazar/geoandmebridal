import Header from "@/components/SuccessPayment/Header";

import { CheckCircle } from "lucide-react";
import OrderReferenceNumber from "@/components/Shop/SuccessPaymentPage/OrderReferenceNumber";
import WhatsNext from "@/components/Shop/SuccessPaymentPage/WhatsNext";
import Actions from "@/components/Shop/SuccessPaymentPage/Actions";

const SuccessfulShopPaymentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const message =
    "Your payment has been successfully received. Your order is confirmed and will now be prepared for pickup or delivery. You can track your order status anytime from your Profile page. Thank you for choosing GEO + Me Bridal.";

  return (
    <section className='max-w-3xl mx-auto py-12 space-y-12 text-center'>
      {/* Icon */}
      <div className='flex justify-center'>
        <CheckCircle className='w-16 h-16 text-warmTaupe' />
      </div>

      {/* Header */}
      <Header message={message} />

      {/* Order Reference Number */}
      <OrderReferenceNumber id={id} />

      {/* What's Next */}
      <WhatsNext />

      {/* Actions */}
      <Actions />

      <p className='text-xs text-muted-foreground'>
        Please keep your order reference for any future inquiries about this
        purchase.
      </p>
    </section>
  );
};

export default SuccessfulShopPaymentPage;
