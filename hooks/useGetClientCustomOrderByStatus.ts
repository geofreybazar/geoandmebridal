import { useSuspenseQuery } from "@tanstack/react-query";
import { GetClientCustomOrder } from "@/services/customOrders";

const useGetClientCustomOrderByStatus = (status: string, clientId: string) => {
  const {
    data: customOrders,
    isLoading,
    isFetching,
    isError,
    error,
  } = useSuspenseQuery({
    queryKey: ["customOrders", status],
    queryFn: () => GetClientCustomOrder(status, clientId),
  });

  return {
    customOrders,
    isLoading,
    isError,
    error,
    isFetching,
  };
};

export default useGetClientCustomOrderByStatus;
