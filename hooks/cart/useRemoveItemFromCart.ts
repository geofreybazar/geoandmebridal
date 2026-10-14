import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { removeItem } from "@/actions/cart";

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
    mutationFn: async (data: { productSku: string; cartId: string }) => {
      const res = await removeItem(data);
      if (!res.success) throw new Error(res.error);
      return res.result;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["cartItems", session?.user.id],
      });
    },
  });

  return { removeItemFromCart, isPending, isError, error, isSuccess };
};

export default useRemoveItemFromCart;
