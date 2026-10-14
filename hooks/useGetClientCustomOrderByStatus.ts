import { useSuspenseQuery } from "@tanstack/react-query";
import { getMyCustomOrders } from "@/actions/customOrders";

const useGetClientCustomOrderByStatus = (status: string, clientId: string) => {
  const {
    data: customOrders,
    isLoading,
    isFetching,
    isError,
    error,
  } = useSuspenseQuery({
    queryKey: ["customOrders", status, clientId],
    // Server action: orders of the signed-in client (clientId kept for callers)
    queryFn: async () => {
      const res = await getMyCustomOrders(status);
      if (!res.success) throw new Error(res.error);
      return res.result!;
    },
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
