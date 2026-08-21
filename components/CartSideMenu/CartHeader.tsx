import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { title } from "@/utils/fonts/fonts";

const CartHeader = () => {
  return (
    <SheetHeader className={`${title.className} pb-4 border-b `}>
      <SheetTitle className='text-2xl'>Shopping Bag</SheetTitle>

      <SheetDescription className='sr-only'>
        GEO + Me Bridal shopping cart
      </SheetDescription>

      <p className='text-xs text-muted-foreground tracking-widest'>
        GEO + Me Bridal
      </p>
    </SheetHeader>
  );
};

export default CartHeader;
