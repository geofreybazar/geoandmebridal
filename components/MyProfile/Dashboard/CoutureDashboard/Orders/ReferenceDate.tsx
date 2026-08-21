import { CustomOrder } from "@/types/customOrders";

const ReferenceDate = ({
  order,
  eventDate,
}: {
  order: CustomOrder;
  eventDate: string;
}) => {
  return (
    <div className='space-y-1'>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Reference
      </p>

      <p className='text-lg font-medium'>{order.referenceNumber}</p>

      <p className='text-xs tracking-widest uppercase text-muted-foreground mt-4'>
        Event Date
      </p>

      <p className='text-base'>{eventDate}</p>
    </div>
  );
};

export default ReferenceDate;
