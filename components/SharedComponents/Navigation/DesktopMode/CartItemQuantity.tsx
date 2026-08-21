import useGetClientCart from "@/hooks/cart/useGetClientCart";
import { useSession } from "next-auth/react";

const CartItemQuantity = () => {
  const { data: session, status } = useSession();

  const { cartItems: fetchedCartItems, isLoading } = useGetClientCart(
    session?.user.id || "",
  );

  const cartItems = fetchedCartItems?.items ? fetchedCartItems.items : [];

  return (
    <>
      {cartItems.length > 0 ? (
        <div
          className='
                  absolute -right-2 -top-2
                  min-w-[18px] h-[18px]
                  px-1
                  flex items-center justify-center
                  rounded-full
                  bg-mocha
                  text-[10px]
                  text-offwhite
                  font-semibold
                  shadow-md
                  ring-2 ring-white
                  transition-all duration-300 ease-out
                  scale-100 opacity-100
                '
        >
          {cartItems.length > 99 ? "99+" : cartItems.length}
        </div>
      ) : (
        <div className='w-5 h-5 absolute -right-2 -top-2 opacity-0 scale-0 transition-all duration-300 ease-in-out' />
      )}
    </>
  );
};

export default CartItemQuantity;
