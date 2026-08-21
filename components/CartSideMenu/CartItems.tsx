import { useState } from "react";
import { useSession } from "next-auth/react";
import useRemoveItemFromCart from "@/hooks/cart/useRemoveItemFromCart";
import Image from "next/image";
import { Loader2, Trash2 } from "lucide-react";

import { Items } from "@/types/cart";

interface CartItemsProps {
  cartItems: Items[];
  cartId?: string;
}

const CartItems = ({ cartItems, cartId }: CartItemsProps) => {
  const { data: session, status } = useSession();
  const [removingSku, setRemovingSku] = useState<string | null>(null);
  const [errorSku, setErrorSku] = useState<string | null>(null);

  const { removeItemFromCart, isPending } = useRemoveItemFromCart();

  const handleRemoveItem = async (sku: string) => {
    try {
      setErrorSku(null);
      setRemovingSku(sku);

      if (!cartId) {
        throw new Error("Cart ID is required for authenticated users");
      }
      const data = {
        productSku: sku,
        cartId,
      };
      await removeItemFromCart(data);
    } catch (error) {
      setErrorSku(sku);
    } finally {
      setRemovingSku(null);
    }
  };

  return (
    <div className='flex-1 overflow-y-auto mt-6 space-y-5 px-1'>
      {cartItems.map((item) => {
        const isRemoving = isPending && removingSku === item.sku;
        const hasError = errorSku === item.sku;

        return (
          <div
            key={item.sku}
            className={`
              flex gap-4 p-3 rounded-xl bg-white border shadow-sm relative
              transition-opacity
              ${isRemoving ? "opacity-50 pointer-events-none" : ""}
            `}
          >
            {hasError && (
              <div className='absolute top-2 right-8 text-xs text-red-500'>
                Error removing item
              </div>
            )}
            {/* Remove Button */}

            <button
              type='button'
              aria-label='Remove item'
              disabled={isRemoving}
              onClick={() => handleRemoveItem(item.sku)}
              className='absolute top-2 right-2 text-xs text-black/40 hover:text-mocha transition'
            >
              {isRemoving ? (
                <Loader2 className='h-4 w-4 animate-spin' />
              ) : (
                <Trash2 className='h-4 w-4' />
              )}
            </button>

            {/* Image */}
            <div className='relative h-24 w-24 rounded-lg overflow-hidden border'>
              <Image
                src={item.imgUrl}
                alt={item.name}
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
                fill
              />
            </div>

            {/* Info */}
            <div className='flex-1 flex flex-col justify-between'>
              <div>
                <h4 className='font-medium text-sm leading-snug'>
                  {item.name}
                </h4>

                <p className='text-xs text-muted-foreground mt-1'>
                  SKU: {item.sku}
                </p>

                <p className='text-xs text-muted-foreground'>
                  Quantity: {item.quantity}
                </p>
              </div>

              <p className='font-semibold text-sm mt-2'>
                ₱
                {(Number(item.price) * item.quantity).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                  },
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
