"use client";

import { useSession } from "next-auth/react";
import useGetClientCart from "@/hooks/cart/useGetClientCart";

import { SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";

const CartSideMenu = () => {
  const { data: session, status } = useSession();

  const { cartItems: fetchedCartItems, isLoading } = useGetClientCart(
    session?.user.id || "",
  );

  const cartItems = fetchedCartItems?.items ?? [];
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <SheetContent className='w-full sm:max-w-md flex flex-col bg-offwhite'>
      {/* ---------- HEADER ---------- */}
      <CartHeader />

      {isLoading ? (
        <div className='flex-1 flex items-center justify-center'>
          Loading...
        </div>
      ) : isEmpty ? (
        <EmptyCart />
      ) : (
        <CartItems cartItems={cartItems} cartId={fetchedCartItems?._id} />
      )}

      {/* ---------- DIVIDER ---------- */}
      <Separator className='my-5 bg-black/10' />

      {/* ---------- FOOTER ---------- */}
      <CartFooter cartItems={cartItems} />
    </SheetContent>
  );
};

export default CartSideMenu;
