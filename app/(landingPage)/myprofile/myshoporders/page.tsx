import { auth } from "@/auth";
import MyShopOrders from "@/components/MyProfile/MyShopOrders/MyShopOrders";

const page = async () => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    return <div>User not found</div>;
  }

  return <MyShopOrders userId={userId} />;
};

export default page;
