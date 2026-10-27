import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { updateItem } from "@/actions/cart";

const useUpdateCartItem = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { mutateAsync: updateCartItem, isPending } = useMutation({
    mutationFn: async (data: {
      itemId: string;
      variantId: string;
      quantity: number;
    }) => {
      const res = await updateItem(data);
      if (!res.success) throw new Error(res.error);
      return res.result;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["cartItems", session?.user.id],
      });
    },
  });

  return { updateCartItem, isPending };
};

export default useUpdateCartItem;
