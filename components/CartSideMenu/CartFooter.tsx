import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { SheetFooter } from "../ui/sheet";
import { Button } from "../ui/button";
import { Items } from "@/types/cart";
import { formattedValue } from "@/utils/currency/currency";

import { SheetClose } from "@/components/ui/sheet";

interface CartFooterProps {
  cartItems: Items[];
}

const CartFooter = ({ cartItems }: CartFooterProps) => {
  const router = useRouter();

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const handleCheckout = () => {
    router.push("/cartcheckoutpage");
  };

  return (
    <SheetFooter className='flex flex-col gap-5'>
      {/* Subtotal */}
      <div className='flex justify-between items-center text-base font-medium'>
        <span className='tracking-wide'>Subtotal</span>

        <span className='text-lg font-semibold'>
          {formattedValue(subtotal)}
        </span>
      </div>

      {/* Checkout Button */}
      <Button
        disabled={cartItems.length === 0}
        className='
            w-full h-12
            bg-mocha text-offwhite
            font-medium tracking-wide
            rounded-md
            hover:bg-mocha/90
            disabled:opacity-40
            transition
          '
        size='lg'
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>

      {/* Continue Shopping */}
      <SheetClose asChild>
        <Link
          href='/shop'
          className='
            text-center text-xs
            tracking-widest uppercase
            text-muted-foreground
            hover:text-black
            transition
          '
        >
          Continue Shopping
        </Link>
      </SheetClose>
    </SheetFooter>
  );
};

export default CartFooter;
