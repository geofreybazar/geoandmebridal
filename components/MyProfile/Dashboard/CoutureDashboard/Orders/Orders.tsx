import { CustomOrder } from "@/types/customOrders";
import CardItem from "./CardItem";

const Orders = ({ customOrders }: { customOrders: CustomOrder[] }) => {
  return (
    <div className='space-y-8'>
      {customOrders.map((order) => {
        const eventDate = new Date(order.eventDate).toLocaleDateString(
          "en-PH",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        );

        return <CardItem key={order._id} order={order} eventDate={eventDate} />;
      })}
    </div>
  );
};

export default Orders;
