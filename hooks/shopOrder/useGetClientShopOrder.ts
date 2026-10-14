import { useSuspenseQuery } from "@tanstack/react-query";
import { getMyShopOrders } from "@/actions/shopOrders";

const useGetClientShopOrder = (status: string, clientId: string) => {
  const {
    data: shopOrders,
    isLoading,
    isFetching,
    isError,
    error,
  } = useSuspenseQuery({
    queryKey: ["shopOrders", status, clientId],
    // Server action: orders of the signed-in client (clientId kept for callers)
    queryFn: async () => {
      const res = await getMyShopOrders(status);
      if (!res.success) throw new Error(res.error);
      return res.result!;
    },
  });

  return {
    shopOrders,
    isLoading,
    isError,
    error,
    isFetching,
  };
};

export default useGetClientShopOrder;
