import { Separator } from "@/components/ui/separator";
import { CustomOrder } from "@/types/customOrders";
import { PaymentRequest } from "@/types/paymentRequest";
import { CUSTOM_BRIDAL_PRODUCTS } from "@/utils/constants/customOrdet";
import { formattedValue } from "@/utils/currency/currency";

interface OrderDetailsProps {
  paymentRequest: PaymentRequest;
  customorder: CustomOrder;
}

const OrderDetails = ({ paymentRequest, customorder }: OrderDetailsProps) => {
  const amountToBePaid = formattedValue(paymentRequest.amount);
  const total = formattedValue(customorder.totalAmount);

  const totalClientPaid = customorder.payments.reduce(
    (sum, payment) => sum + payment.totalAmount,
    0,
  );
  const dueAmount = customorder.totalAmount - totalClientPaid;
  const paymentType = paymentRequest.type;

  const paymentDescription: Record<string, string> = {
    downpayment:
      "This payment represents the 30% downpayment required to begin production of your bespoke order.",
    balance:
      "This payment represents the remaining balance required before your couture pieces can be released for pickup or delivery.",
  };

  return (
    <>
      {/* Reference */}
      <div>
        <p className='text-xs tracking-widest uppercase text-muted-foreground'>
          Reference Number
        </p>
        <p className='text-lg font-medium mt-1'>
          {paymentRequest.referenceNumber}
        </p>
      </div>
      <Separator />

      {/* Items Included */}
      <div>
        <p className='text-sm text-muted-foreground mb-4'>
          Included in this order
        </p>

        <ul className='space-y-2'>
          {customorder.orders.map((order: any) => {
            const itemName = CUSTOM_BRIDAL_PRODUCTS.find(
              (product) => product.value === order.item,
            );
            return (
              <li key={order._id} className='flex justify-between text-sm'>
                <span>
                  {itemName?.label} ×{order.quantity}
                </span>

                <span className='text-muted-foreground'>₱{order.price}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <Separator />

      {/* Payment Details */}
      <div className='flex justify-between text-sm'>
        <span>Total</span>
        <span>{total}</span>
      </div>

      <div className='flex justify-between text-sm text-amber-600 font-medium'>
        <span>Amount Paid</span>
        <span>{formattedValue(totalClientPaid)}</span>
      </div>

      <div className='flex justify-between text-sm text-muted-foreground'>
        <span>Remaining Balance</span>
        <span>{formattedValue(dueAmount)}</span>
      </div>

      <Separator />

      <div className='flex justify-between font-semibold text-lg'>
        <span>Amount Due Today</span>
        <span>{amountToBePaid}</span>
      </div>

      {paymentDescription[paymentType] && (
        <p className='text-xs text-muted-foreground'>
          {paymentDescription[paymentType]}
        </p>
      )}
    </>
  );
};

export default OrderDetails;
