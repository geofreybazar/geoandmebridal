import { CustomOrder } from "@/types/customOrders";
import { CUSTOM_BRIDAL_PRODUCTS } from "@/utils/constants/customOrdet";

const Items = ({ order }: { order: CustomOrder }) => {
  return (
    <div>
      <p className='text-xs tracking-widest uppercase text-muted-foreground mb-2'>
        Your Pieces
      </p>

      <ul className='space-y-1 text-sm'>
        {order.orders.map((item: any) => {
          const itemName = CUSTOM_BRIDAL_PRODUCTS.find(
            (product) => product.value === item.item,
          );
          return (
            <li key={item._id} className='flex justify-between'>
              <span>
                {itemName?.label} ×{item.quantity}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Items;
