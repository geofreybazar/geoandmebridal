import { ProductType, ProductVariantType } from "@/types/shop";
import { Dispatch, SetStateAction } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SelectSizeProps {
  product: ProductType;
  selectedColor: string;
  selectedSize: ProductVariantType | null;
  setSelectedSize: Dispatch<SetStateAction<ProductVariantType | null>>;
}

const SelectSize = ({
  product,
  selectedColor,
  selectedSize,
  setSelectedSize,
}: SelectSizeProps) => {
  const filteredVariants = product.variants.filter(
    (v) => v.attributes.color.hex === selectedColor,
  );

  return (
    <div>
      <p className='text-sm uppercase tracking-widest mb-3'>Available Sizes</p>

      {!selectedColor ? (
        <p className='text-sm text-muted-foreground'>Select a color first</p>
      ) : (
        <div className='flex gap-3 flex-wrap'>
          {filteredVariants.map((variant) => {
            const isOutOfStock = variant.stock <= 0;
            const isSelected = selectedSize?._id === variant._id;

            return (
              <Tooltip key={variant._id}>
                <TooltipTrigger asChild>
                  <button
                    type='button'
                    disabled={isOutOfStock}
                    onClick={() => {
                      if (!isOutOfStock) {
                        setSelectedSize(variant);
                      }
                    }}
                    className={`
                        px-4 py-2 border rounded-md text-sm
                        transition-all duration-200

                        ${
                          isOutOfStock
                            ? "border-black/20 text-black/40 bg-gray-100 cursor-not-allowed"
                            : "border-black text-black hover:bg-black hover:text-white"
                        }

                        ${isSelected ? "bg-black text-white border-black" : ""}
                      `}
                  >
                    {variant.attributes.size}
                  </button>
                </TooltipTrigger>

                {isOutOfStock && (
                  <TooltipContent>
                    <p>Out of Stock</p>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectSize;
