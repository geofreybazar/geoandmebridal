import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/actions/cart";

const useGetClientCart = (clientId: string) => {
  const {
    data: cartItems,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cartItems", clientId],
    // Server action: the cart of the signed-in client
    queryFn: async () => {
      const res = await getCart();
      if (!res.success) throw new Error(res.error);
      return res.result;
    },
    enabled: !!clientId,
  });

  return {
    cartItems,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  };
};

export default useGetClientCart;
