import { ProductType, ProductVariantType } from "@/types/shop";
import { Dispatch, SetStateAction } from "react";

interface SizeSelectProps {
  product: ProductType;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  setSelectedSize: Dispatch<SetStateAction<ProductVariantType | null>>;
}

const ColorSelect = ({
  product,
  selectedColor,
  setSelectedColor,
  setSelectedSize,
}: SizeSelectProps) => {
  const colors = Array.from(
    new Map(
      product.variants.map((v) => [v.attributes.color.hex, v.attributes.color]),
    ).values(),
  );

  return (
    <div>
      <p className='text-sm uppercase tracking-widest mb-3'>Available Colors</p>

      <div className='flex gap-3 flex-wrap'>
        {colors.map((color) => {
          const isSelected = selectedColor === color.hex;

          // check if ALL variants of this color are out of stock
          const hasStock = product.variants.some(
            (v) => v.attributes.color.hex === color.hex && v.stock > 0,
          );

          return (
            <button
              key={color.hex}
              type='button'
              disabled={!hasStock}
              onClick={() => {
                if (hasStock) {
                  setSelectedColor(color.hex);
                  setSelectedSize(null);
                }
              }}
              className={`
                relative w-10 h-10 rounded-full border transition-all duration-200
                flex items-center justify-center

                ${
                  !hasStock
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer hover:scale-105"
                }

                ${isSelected ? "ring-2 ring-black ring-offset-2" : ""}
              `}
              style={{ backgroundColor: color.hex }}
              title={color.hex}
            >
              {/* Optional: X mark if no stock */}
              {!hasStock && (
                <span className='absolute text-xs text-black font-bold'>×</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected label */}
      {selectedColor && (
        <p className='text-xs mt-2 text-muted-foreground'>
          Selected: {selectedColor}
        </p>
      )}
    </div>
  );
};

export default ColorSelect;
