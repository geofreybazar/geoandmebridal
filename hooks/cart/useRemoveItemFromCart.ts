import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { RemoveItemFromCart } from "@/services/cart";

const useRemoveItemFromCart = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const {
    mutateAsync: removeItemFromCart,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: RemoveItemFromCart,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["cartItems", session?.user.id],
      });
    },
  });

  return { removeItemFromCart, isPending, isError, error, isSuccess };
};

export default useRemoveItemFromCart;
