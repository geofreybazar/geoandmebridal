import { Card, CardContent } from "@/components/ui/card";
import { PaymentRequest } from "@/types/paymentRequest";
import { formattedValue } from "@/utils/currency/currency";
import { compareDesc } from "date-fns";

import Amount from "./Amount";
import Footer from "./Footer";
import Left from "./Left";
import Status from "./Status";

const PaymentsDetails = ({
  userPayments,
}: {
  userPayments: PaymentRequest[];
}) => {
  const sortedPayments = [...userPayments].sort((a, b) =>
    compareDesc(a.createdAt, b.createdAt),
  );

  return (
    <div className='space-y-6'>
      {userPayments.length === 0 ? (
        <p className='text-sm text-muted-foreground'>No payments found.</p>
      ) : (
        sortedPayments.map((payment: PaymentRequest) => {
          const amount = formattedValue(payment.amount);

          return (
            <Card
              key={payment._id}
              className='rounded-2xl border border-porcelainBeige shadow-[0_10px_30px_rgba(0,0,0,0.04)]'
            >
              <CardContent className='space-y-6'>
                {/* Top Row */}
                <div className='flex justify-between items-start'>
                  {/* Left */}
                  <Left payment={payment} />

                  {/* Status */}
                  <Status status={payment.status} />
                </div>

                {/* Amount */}
                <Amount amount={amount} status={payment.status} />

                {/* Optional Footer */}
                <Footer payment={payment} />
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default PaymentsDetails;
