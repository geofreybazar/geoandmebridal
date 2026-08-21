"use client";

import { useEffect } from "react";
import { ProductVariantType } from "@/types/shop";

interface SelectQuantityProps {
  selectedSize: ProductVariantType | null;
  selectedQuantity: number;
  setSelectedQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const SelectQuantity = ({
  selectedSize,
  selectedQuantity,
  setSelectedQuantity,
}: SelectQuantityProps) => {
  const availableStock = selectedSize ? selectedSize.availableStock : 0;

  useEffect(() => {
    if (!selectedSize) {
      setSelectedQuantity(1);
      return;
    }

    if (availableStock === 0) {
      setSelectedQuantity(0);
      return;
    }

    if (selectedQuantity > availableStock) {
      setSelectedQuantity(availableStock);
    }

    if (selectedQuantity < 1) {
      setSelectedQuantity(1);
    }
  }, [selectedSize, availableStock]);

  const increment = () => {
    if (selectedQuantity < availableStock) {
      setSelectedQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity((prev) => prev - 1);
    }
  };

  const isDisabled = !selectedSize || availableStock === 0;

  return (
    <div>
      <p className='text-sm uppercase tracking-widest mb-3'>Quantity</p>

      <div className='flex items-center gap-4'>
        {/* Decrease */}
        <button
          type='button'
          onClick={decrement}
          disabled={isDisabled || selectedQuantity <= 1}
          className={`
            w-10 h-10 border rounded-md text-lg
            flex items-center justify-center
            transition

            ${
              isDisabled || selectedQuantity <= 1
                ? "border-black/20 text-black/40 cursor-not-allowed"
                : "border-black hover:bg-black hover:text-white"
            }
          `}
        >
          −
        </button>

        {/* Display */}
        <span
          className={`
            min-w-[40px] text-center font-medium
            ${isDisabled ? "text-black/40" : "text-black"}
          `}
        >
          {isDisabled ? "-" : selectedQuantity}
        </span>

        {/* Increase */}
        <button
          type='button'
          onClick={increment}
          disabled={isDisabled || selectedQuantity >= availableStock}
          className={`
            w-10 h-10 border rounded-md text-lg
            flex items-center justify-center
            transition

            ${
              isDisabled || selectedQuantity >= availableStock
                ? "border-black/20 text-black/40 cursor-not-allowed"
                : "border-black hover:bg-black hover:text-white"
            }
          `}
        >
          +
        </button>

        {/* Stock Info */}
        {selectedSize && (
          <span className='text-xs text-black/60 ml-2'>
            {availableStock} left
          </span>
        )}
      </div>

      {/* Helper Text */}
      {!selectedSize && (
        <p className='mt-2 text-xs text-red-500'>Please select a size first</p>
      )}

      {selectedSize && availableStock === 0 && (
        <p className='mt-2 text-xs text-red-500'>Out of stock</p>
      )}
    </div>
  );
};

export default SelectQuantity;
