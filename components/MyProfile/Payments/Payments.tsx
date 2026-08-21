import { PaymentRequest } from "@/types/paymentRequest";
import PaymentsDetails from "./PaymentsDetails/PaymentsDetails";
import UniversalHeader from "../UniversalHeader";

const Payments = ({ userPayments }: { userPayments: PaymentRequest[] }) => {
  return (
    <section className='flex-1 space-y-10'>
      {/* Header */}
      <UniversalHeader
        title='Payment History'
        description='View and manage all your payment transactions.'
      />

      {/* Payments */}
      <PaymentsDetails userPayments={userPayments} />
    </section>
  );
};

export default Payments;
