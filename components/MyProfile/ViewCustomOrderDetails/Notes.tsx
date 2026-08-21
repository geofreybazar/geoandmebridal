import { CustomOrder } from "@/types/customOrders";
import { Card, CardContent } from "@/components/ui/card";

const Notes = ({ customorder }: { customorder: CustomOrder }) => {
  return (
    <Card>
      <CardContent>
        <p className='text-xs tracking-widest uppercase text-muted-foreground'>
          Notes
        </p>

        <p className='text-sm mt-3 text-muted-foreground'>
          {customorder.notes}
        </p>
      </CardContent>
    </Card>
  );
};

export default Notes;
