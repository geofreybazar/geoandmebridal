import { Card, CardContent } from "@/components/ui/card";
import ReferenceDate from "./ReferenceDate";
import Status from "./Status";
import Items from "./Items";

import { ShopOrder } from "@/types/shopOrders";

const CardItem = ({
  order,
  dateOrdered,
}: {
  order: ShopOrder;
  dateOrdered: string;
}) => {
  return (
    <Card className='rounded-2xl border border-darkerGray shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
      <CardContent className='space-y-6'>
        {/* Reference + Date */}
        <ReferenceDate order={order} dateOrdered={dateOrdered} />

        {/* Status */}
        <Status order={order} />

        {/* Items */}
        <Items order={order} />
      </CardContent>
    </Card>
  );
};

export default CardItem;
