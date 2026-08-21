import { Card, CardContent } from "@/components/ui/card";
import { CustomOrder } from "@/types/customOrders";
import { formattedValue } from "@/utils/currency/currency";

const PaymentSummary = ({ customorder }: { customorder: CustomOrder }) => {
  const totalClientPaid = customorder.payments.reduce(
    (sum, payment) => sum + payment.totalAmount,
    0,
  );

  const dueAmount = customorder.totalAmount - totalClientPaid;

  return (
    <Card>
      <CardContent className='space-y-4'>
        <p className='text-xs tracking-widest uppercase text-muted-foreground'>
          Payment Summary
        </p>
        {/* Payment Details */}
        <div className='flex justify-between text-sm'>
          <span>Total</span>
          <span>{formattedValue(customorder.totalAmount)}</span>
        </div>

        <div className='flex justify-between text-sm text-amber-600 font-medium'>
          <span>Amount Paid</span>
          <span>{formattedValue(totalClientPaid)}</span>
        </div>

        <div className='flex justify-between text-sm text-muted-foreground'>
          <span>Remaining Balance</span>
          <span>{formattedValue(dueAmount)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;
