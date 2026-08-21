import { auth } from "@/auth";

import MyOrders from "@/components/MyProfile/MyOrders/MyOrders";

const MyOrdersPage = async () => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    return <div>User not found</div>;
  }

  return <MyOrders userId={userId} />;
};

export default MyOrdersPage;
