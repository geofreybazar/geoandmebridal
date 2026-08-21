import { CustomOrder } from "@/types/customOrders";
import { Card, CardContent } from "@/components/ui/card";
import { orderStatus } from "@/utils/constants/customOrdet";

const OrderInfo = ({ customorder }: { customorder: CustomOrder }) => {
  const eventDate = new Date(customorder.eventDate).toLocaleDateString(
    "en-PH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <Card className='rounded-2xl border border-porcelainBeige shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
      <CardContent className='space-y-8'>
        {/* Reference */}
        <div className='space-y-1'>
          <p className='text-xs tracking-widest uppercase text-muted-foreground'>
            Reference
          </p>
          <p className='text-lg font-medium'>{customorder.referenceNumber}</p>
        </div>

        {/* Event Date */}
        <div className='space-y-1'>
          <p className='text-xs tracking-widest uppercase text-muted-foreground'>
            Event Date
          </p>
          <p className='text-base'>{eventDate}</p>
        </div>

        {/* Status */}
        <div>
          <p className='text-xs tracking-widest uppercase text-muted-foreground'>
            Status
          </p>

          <span className='inline-block text-xs px-3 py-1 rounded-full bg-ivoryVeil text-warmTaupe'>
            {orderStatus[customorder.status]}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderInfo;
