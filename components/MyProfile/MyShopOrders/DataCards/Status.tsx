import { ShopOrder } from "@/types/shopOrders";

import { orderStatus } from "@/utils/constants/shopOrder";
import { formattedValue } from "@/utils/currency/currency";
import { formatDate } from "@/utils/dates/dates";

const Status = ({ order }: { order: ShopOrder }) => {
  return (
    <div>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Status
      </p>

      <span className='inline-block text-xs px-3 py-1 rounded-full bg-ivoryVeil text-warmTaupe'>
        {orderStatus[order.orderStatus]}
      </span>

      {order.refund?.refundedAt && (
        <p className='mt-2 text-sm text-warmTaupe'>
          Refunded {formattedValue(order.refund.amount)} on{" "}
          {formatDate(order.refund.refundedAt)}
        </p>
      )}
    </div>
  );
};

export default Status;
