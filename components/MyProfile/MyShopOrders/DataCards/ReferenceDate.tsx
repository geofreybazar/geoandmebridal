import { ShopOrder } from "@/types/shopOrders";

const ReferenceDate = ({
  order,
  dateOrdered,
}: {
  order: ShopOrder;
  dateOrdered: string;
}) => {
  return (
    <div className='space-y-1'>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Reference
      </p>

      <p className='text-lg font-medium'>{order.referenceNumber}</p>

      <p className='text-xs tracking-widest uppercase text-muted-foreground mt-4'>
        Date Ordered
      </p>

      <p className='text-base'>{dateOrdered}</p>
    </div>
  );
};

export default ReferenceDate;
