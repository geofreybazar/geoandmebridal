import Link from "next/link";
import { paragraph } from "@/utils/fonts/fonts";

const EmptyProducts = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 text-center'>
      <p
        className={`
            ${paragraph.className}
            text-black/60
            text-sm md:text-base
            max-w-md
            leading-relaxed
          `}
      >
        This category is currently unavailable. Please explore other collections
        from GEO + Me Bridal.
      </p>

      <Link
        href='/shop'
        className={`
            mt-6 text-xs uppercase tracking-[0.2em]
            text-black/70 hover:text-black
            transition
          `}
      >
        Browse All Products
      </Link>
    </div>
  );
};

export default EmptyProducts;
