import { CustomOrder } from "@/types/customOrders";
import { orderStatus } from "@/utils/constants/customOrdet";

const Status = ({ order }: { order: CustomOrder }) => {
  return (
    <div>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Status
      </p>

      <span className='inline-block text-xs px-3 py-1 rounded-full bg-ivoryVeil text-warmTaupe'>
        {orderStatus[order.status]}
      </span>
    </div>
  );
};

export default Status;
