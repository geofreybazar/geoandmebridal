import { useQuery } from "@tanstack/react-query";
import { GetClientCart } from "@/services/cart";

const useGetClientCart = (clientId: string) => {
  const {
    data: cartItems,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["cartItems", clientId],
    queryFn: () => GetClientCart(clientId),
    enabled: !!clientId,
  });

  return {
    cartItems,
    isLoading,
    isError,
    error,
    isFetching,
  };
};

export default useGetClientCart;
