import { PaymentRequest } from "@/types/paymentRequest";
import { formatDate } from "@/utils/dates/dates";

const Left = ({ payment }: { payment: PaymentRequest }) => {
  const date = formatDate(payment.createdAt);

  return (
    <div>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        {payment.type}
      </p>

      <p className='text-lg font-medium mt-1'>{payment.referenceNumber}</p>

      <p className='text-xs text-muted-foreground mt-1'>{date}</p>
    </div>
  );
};

export default Left;
