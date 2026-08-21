import { auth } from "@/auth";
import Payments from "@/components/MyProfile/Payments/Payments";
import { GetClientPayments } from "@/services/paymentRequest";

const PaymentOrdersPage = async () => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    return <div>User not found</div>;
  }

  const userPayments = await GetClientPayments(userId);

  return <Payments userPayments={userPayments} />;
};

export default PaymentOrdersPage;
