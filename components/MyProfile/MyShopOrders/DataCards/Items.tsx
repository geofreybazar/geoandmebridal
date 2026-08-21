import { ShopOrder } from "@/types/shopOrders";

const Items = ({ order }: { order: ShopOrder }) => {
  return (
    <div>
      <p className='text-xs tracking-widest uppercase text-muted-foreground mb-2'>
        Your Items
      </p>

      <ul className='space-y-1 text-sm'>
        {order.items.map((item: any) => (
          <li key={item._id} className='flex justify-between'>
            <span>
              {item.name} ×{item.quantity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
