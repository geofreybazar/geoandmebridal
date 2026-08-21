import useGetClientCustomOrderByStatus from "@/hooks/useGetClientCustomOrderByStatus";

import CardItem from "../Dashboard/CoutureDashboard/Orders/CardItem";

interface DataCardsProps {
  activeTab: string;
  userId: string;
}

const DataCards = ({ activeTab, userId }: DataCardsProps) => {
  const { customOrders } = useGetClientCustomOrderByStatus(activeTab, userId);

  return (
    <div className='space-y-6'>
      {customOrders.length === 0 ? (
        <p className='text-sm text-muted-foreground'>No orders found.</p>
      ) : (
        customOrders.map((order) => {
          const eventDate = new Date(order.eventDate).toLocaleDateString(
            "en-PH",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          );

          return (
            <CardItem key={order._id} order={order} eventDate={eventDate} />
          );
        })
      )}
    </div>
  );
};

export default DataCards;
