import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import CartButton from "../../ButtonComponents/CartButton";
import CartSideMenu from "@/components/CartSideMenu/CartSideMenu";
import { useSideCartStore } from "@/store/shop/sideCartStore";
import CartItemQuantity from "./CartItemQuantity";

const OpenCart = () => {
  const open = useSideCartStore((state) => state.open);
  const setOpen = useSideCartStore((state) => state.setOpen);

  return (
    <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <SheetTrigger asChild>
        <button aria-label='Open menu' className='relative'>
          <CartButton />
          <CartItemQuantity />
        </button>
      </SheetTrigger>
      {open && <CartSideMenu />}
    </Sheet>
  );
};

export default OpenCart;
