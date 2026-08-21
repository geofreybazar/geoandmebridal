import Link from "next/link";
import { ShoppingBag, UserRound } from "lucide-react";

const Actions = () => {
  return (
    <div className='flex flex-col justify-center gap-3 sm:flex-row'>
      <Link
        href='/myprofile/myshoporders'
        className='inline-flex h-11 items-center justify-center rounded-md bg-warmTaupe px-6 text-sm font-medium text-white transition-opacity hover:opacity-90'
      >
        <UserRound className='mr-2 size-4' />
        View My Orders
      </Link>

      <Link
        href='/shop'
        className='inline-flex h-11 items-center justify-center rounded-md border px-6 text-sm font-medium transition-colors hover:bg-muted'
      >
        <ShoppingBag className='mr-2 size-4' />
        Continue Shopping
      </Link>
    </div>
  );
};

export default Actions;
