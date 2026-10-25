"use client";

import { signIn, useSession } from "next-auth/react";
import useGetClientCart from "@/hooks/cart/useGetClientCart";

import { SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";
import CartMessage from "./CartMessage";

const CartSideMenu = () => {
  const { data: session, status } = useSession();

  const {
    cartItems: fetchedCartItems,
    isLoading,
    isError,
    refetch,
  } = useGetClientCart(session?.user.id || "");

  const cartItems = fetchedCartItems?.items ?? [];
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <SheetContent className='w-full sm:max-w-md flex flex-col bg-offwhite'>
      {/* ---------- HEADER ---------- */}
      <CartHeader />

      {status === "loading" || isLoading ? (
        <div className='flex-1 flex items-center justify-center'>
          <Spinner className='size-6 text-mocha' />
        </div>
      ) : status === "unauthenticated" ? (
        <CartMessage
          message='Sign in to see your shopping bag.'
          action='Sign In'
          onAction={() => signIn()}
        />
      ) : isError ? (
        <CartMessage
          message="We couldn't load your shopping bag."
          action='Try Again'
          onAction={() => refetch()}
        />
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
