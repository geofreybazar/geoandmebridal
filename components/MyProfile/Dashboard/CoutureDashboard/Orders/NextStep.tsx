import { CustomOrder } from "@/types/customOrders";

const getNextStep = (status: string, paymentStatus: string) => {
  if (status === "archived_projects") {
    return "Your order has been archived.";
  }

  if (paymentStatus === "paid") {
    return "Your order is fully paid. You may now schedule pickup or delivery.";
  }

  switch (status) {
    case "draft":
      return "A downpayment is required to begin your order.";
    case "active_projects":
      return "Our team will contact you soon for your fitting schedule.";
    case "completed_projects":
      return "Your pieces are complete. Please settle the remaining balance before pickup.";
    default:
      return "We are currently preparing your couture pieces.";
  }
};

const NextStep = ({ order }: { order: CustomOrder }) => {
  const paymentStatus = order.paymentStatus;

  return (
    <div className='mt-6'>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Next Step
      </p>

      <p className='text-sm mt-2 text-warmTaupe'>
        {getNextStep(order.status, paymentStatus)}
      </p>
    </div>
  );
};

export default NextStep;
