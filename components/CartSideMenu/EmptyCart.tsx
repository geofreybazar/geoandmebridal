import Link from "next/link";
import { paragraph } from "@/utils/fonts/fonts";
import { SheetClose } from "../ui/sheet";

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 px-6 text-center'>
      {/* Divider */}
      <div className='w-20 h-px mb-6 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

      {/* Message */}
      <p
        className={`${paragraph.className} text-sm text-black/60 leading-relaxed`}
      >
        Your selection is currently empty.
        <br />
        Discover our curated bridal and formalwear pieces.
      </p>

      {/* CTA */}
      <SheetClose asChild>
        <Link
          href='/shop'
          className='
              mt-6 text-xs uppercase tracking-[0.2em]
              text-black/70 hover:text-black
              transition
            '
        >
          Continue Shopping
        </Link>
      </SheetClose>
    </div>
  );
};

export default EmptyCart;
