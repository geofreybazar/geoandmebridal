import Image from "next/image";
import { type Items } from "@/types/cart";
import { formattedValue } from "@/utils/currency/currency";

const Items = ({ cartItems }: { cartItems: Items[] }) => {
  return (
    <div className='space-y-5'>
      {cartItems.map((item) => {
        const total = Number(item.price) * item.quantity;

        return (
          <div
            key={item.sku}
            className='flex justify-between sm:gap-4 border-b border-[#E8DFD8] pb-5 last:border-b-0'
          >
            {/* Product Image */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
              <div className='relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-lg flex-shrink-0'>
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  fill
                  sizes='(max-width: 640px) 80px, 96px'
                  className='object-cover'
                />
              </div>

              <div className='text-left'>
                <h3 className='font-serif text-base sm:text-lg text-[#2C211D] line-clamp-2'>
                  {item.name}
                </h3>

                <div className='mt-1 text-xs sm:text-sm text-muted-foreground space-y-1'>
                  <p>SKU: {item.sku}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
            </div>

            {/* Product Price */}
            <div className='flex flex-col items-end justify-center flex-shrink-0'>
              <p className='font-serif text-lg sm:text-xl text-[#2C211D]'>
                {formattedValue(total)}
              </p>

              <p className='text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground'>
                Total
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
