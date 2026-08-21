import { useSuspenseQuery } from "@tanstack/react-query";
import { GetClientShopOrder } from "@/services/shopOrders";

const useGetClientShopOrder = (status: string, clientId: string) => {
  const {
    data: shopOrders,
    isLoading,
    isFetching,
    isError,
    error,
  } = useSuspenseQuery({
    queryKey: ["shopOrders", status],
    queryFn: () => GetClientShopOrder(status, clientId),
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
