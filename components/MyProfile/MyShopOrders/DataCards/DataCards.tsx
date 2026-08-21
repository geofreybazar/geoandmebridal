import useGetClientShopOrder from "@/hooks/shopOrder/useGetClientShopOrder";

import CardItem from "./CardItem";

interface DataCardsProps {
  activeTab: string;
  userId: string;
}

const DataCards = ({ activeTab, userId }: DataCardsProps) => {
  const { shopOrders } = useGetClientShopOrder(activeTab, userId);

  return (
    <div className='space-y-6'>
      {shopOrders.length === 0 ? (
        <p className='text-sm text-muted-foreground'>No orders found.</p>
      ) : (
        shopOrders.map((order) => (
          <CardItem
            key={order._id}
            order={order}
            dateOrdered={order.dateOrdered}
          />
        ))
      )}
    </div>
  );
};

export default DataCards;
