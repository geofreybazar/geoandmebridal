import { CustomOrder } from "@/types/customOrders";
import { Card, CardContent } from "@/components/ui/card";

import { GetPendingPaymentRequest } from "@/services/paymentRequest";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const getNextStep = (status: string, paymentStatus: string) => {
  if (status === "archived_projects") {
    return "Your order has been archived.";
  }

  if (paymentStatus === "paid") {
    return "Your order is fully paid. You may now schedule pickup or delivery.";
  }

  switch (status) {
    case "draft":
      return "A downpayment is required to be gin your order.";
    case "active_projects":
      return "Our team will contact you soon for your fitting schedule.";
    case "completed_projects":
      return "Your pieces are complete. Please settle the remaining balance before pickup.";
    default:
      return "We are currently preparing your couture pieces.";
  }
};

const NextStep = async ({ customorder }: { customorder: CustomOrder }) => {
  const paymentStatus = customorder.paymentStatus;

  const pendingPaymentRequest = await GetPendingPaymentRequest(customorder._id);

  return (
    <Card>
      <CardContent className='space-y-4'>
        <p className='text-xs tracking-widest uppercase text-muted-foreground'>
          Next Step
        </p>
        <p className='text-sm text-warmTaupe'>
          {getNextStep(customorder.status, paymentStatus)}
        </p>

        {pendingPaymentRequest && (
          <Button
            size='sm'
            className='w-full rounded-xl px-4 bg-warmTaupe hover:bg-deepMocha text-white'
          >
            <Link
              href={`/myprofile/paymentorders/payment/${pendingPaymentRequest._id}`}
            >
              Pay Now
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default NextStep;
