import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <ShoppingCart className='rounded-full h-10 w-10 p-2 cursor-pointer text-mocha hover:bg-mocha hover:text-offwhite transition' />
  );
};

export default CartButton;
