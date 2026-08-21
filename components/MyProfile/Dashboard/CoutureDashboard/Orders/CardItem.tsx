import { Card, CardContent } from "@/components/ui/card";
import { CustomOrder } from "@/types/customOrders";
import ReferenceDate from "./ReferenceDate";
import Status from "./Status";
import Items from "./Items";
import NextStep from "./NextStep";
import CTA from "./CTA";

const CardItem = ({
  order,
  eventDate,
}: {
  order: CustomOrder;
  eventDate: string;
}) => {
  return (
    <Card className='rounded-2xl border border-darkerGray shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
      <CardContent className='space-y-6'>
        {/* Reference + Date */}
        <ReferenceDate order={order} eventDate={eventDate} />

        {/* Status */}
        <Status order={order} />

        {/* Items */}
        <Items order={order} />

        {/* Next Steps */}
        <NextStep order={order} />

        {/* CTA */}
        <CTA order={order} />
      </CardContent>
    </Card>
  );
};

export default CardItem;
