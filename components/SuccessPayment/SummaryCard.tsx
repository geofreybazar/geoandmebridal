import { Card, CardContent } from "@/components/ui/card";
import { PaymentRequest } from "@/types/paymentRequest";
import { formattedValue } from "@/utils/currency/currency";

const SummaryCard = ({
  paymentRequest,
}: {
  paymentRequest: PaymentRequest;
}) => {
  const reference = paymentRequest.referenceNumber || "—";
  const amount = formattedValue(paymentRequest.amount);

  return (
    <Card className='shadow-sm text-left'>
      <CardContent className='space-y-6'>
        <div className='flex justify-between text-sm'>
          <span className='text-muted-foreground'>Payment Status</span>
          <span className='font-medium text-green-600'>
            {paymentRequest.status === "paid"
              ? "Completed"
              : paymentRequest.status}
          </span>
        </div>

        <div className='flex justify-between text-sm'>
          <span className='text-muted-foreground'>Payment Type</span>
          <span className='capitalize'>
            {paymentRequest.type.replace("_", " ")}
          </span>
        </div>

        <div className='flex justify-between text-sm'>
          <span className='text-muted-foreground'>Payment Method</span>
          <span>PayMongo</span>
        </div>

        <div className='flex justify-between text-sm'>
          <span className='text-muted-foreground'>Reference Number</span>
          <span className='font-medium'>{reference}</span>
        </div>

        <div className='border-t pt-6 flex justify-between text-base'>
          <span className='text-muted-foreground'>Amount Paid</span>
          <span className='font-semibold text-warmTaupe'>{amount}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
