import { ShopOrder } from "@/types/shopOrders";

import { orderStatus } from "@/utils/constants/shopOrder";

const Status = ({ order }: { order: ShopOrder }) => {
  return (
    <div>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Status
      </p>

      <span className='inline-block text-xs px-3 py-1 rounded-full bg-ivoryVeil text-warmTaupe'>
        {orderStatus[order.orderStatus]}
      </span>
    </div>
  );
};

export default Status;
