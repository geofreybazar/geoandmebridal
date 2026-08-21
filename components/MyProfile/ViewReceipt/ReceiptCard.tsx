import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PaymentRequest } from "@/types/paymentRequest";

import { formattedValue } from "@/utils/currency/currency";
import { formatDate } from "@/utils/dates/dates";

const ReceiptCard = ({
  paymentRequest,
}: {
  paymentRequest: PaymentRequest;
}) => {
  const amount = formattedValue(paymentRequest.amount);
  const date = formatDate(paymentRequest.createdAt);

  return (
    <Card>
      <CardContent className='space-y-8'>
        {/* Top Info */}
        <div className='space-y-5'>
          <div>
            <p className='text-xs tracking-widest uppercase text-muted-foreground'>
              Reference Number
            </p>
            <p className='text-lg font-medium mt-1'>
              {paymentRequest.referenceNumber}
            </p>
          </div>

          <div>
            <p className='text-xs tracking-widest uppercase text-muted-foreground'>
              Payment Type
            </p>
            <p className='text-base capitalize mt-1'>
              {paymentRequest.type.replace("_", " ")}
            </p>
          </div>
        </div>

        {/* Divider */}
        <Separator />

        {/* Amount */}
        <div>
          <p className='text-sm text-muted-foreground'>Amount Paid</p>
          <p className='text-3xl font-semibold text-warmTaupe mt-2'>{amount}</p>
        </div>

        {/* Details Grid */}
        <div className='grid grid-cols-2 gap-6 text-sm'>
          <div>
            <p className='text-muted-foreground'>Date</p>
            <p className='mt-1'>{date}</p>
          </div>

          <div>
            <p className='text-muted-foreground'>Status</p>
            <span className='inline-block mt-1 text-xs px-3 py-1 rounded-full bg-green-100 text-green-700'>
              {paymentRequest.status}
            </span>
          </div>
        </div>

        {/* Divider */}
        <Separator />

        {/* Footer */}
        <div className='space-y-2 text-center'>
          <p className='text-xs text-muted-foreground'>
            Secure payment via PayMongo
          </p>

          <p className='text-xs text-muted-foreground'>
            GEO + Me Bridal Atelier
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReceiptCard;
