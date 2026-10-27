import { Items } from "@/types/cart";

interface CartItemOptionsProps {
  item: Items;
  disabled: boolean;
  onChange: (variantId: string, quantity: number) => void;
}

// Colour, size and quantity of one cart item, changed in place
const CartItemOptions = ({ item, disabled, onChange }: CartItemOptionsProps) => {
  const options = item.options ?? [];
  const selected = options.find((o) => o._id === item.variantId);

  if (!selected) {
    return (
      <p className='text-xs text-red-500 mt-1'>
        This option is no longer available. Please remove it.
      </p>
    );
  }

  const colors = Array.from(new Set(options.map((o) => o.color.hex)));
  const sizes = options.filter((o) => o.color.hex === selected.color.hex);
  const canAdd = item.quantity < selected.availableStock;

  // Same size in the new colour if it has stock, else its first size in stock
  const pickColor = (hex: string) => {
    const inColor = options.filter(
      (o) => o.color.hex === hex && o.availableStock > 0,
    );
    const next =
      inColor.find((o) => o.size === selected.size) ?? inColor[0];
    if (next) onChange(next._id, item.quantity);
  };

  return (
    <div className='mt-2 space-y-2'>
      <div className='flex items-center gap-2 flex-wrap'>
        <span className='text-xs text-muted-foreground w-10'>Colour</span>
        {colors.map((hex, index) => {
          const isSelected = hex === selected.color.hex;
          const hasStock = options.some(
            (o) => o.color.hex === hex && o.availableStock > 0,
          );

          return (
            <button
              key={hex}
              type='button'
              disabled={disabled || isSelected || !hasStock}
              onClick={() => pickColor(hex)}
              className={`
                relative w-5 h-5 rounded-full border
                flex items-center justify-center
                ${isSelected ? "ring-2 ring-mocha ring-offset-1" : ""}
                ${!hasStock ? "opacity-40 cursor-not-allowed" : ""}
              `}
              style={{ backgroundColor: hex }}
              aria-label={`Colour ${index + 1}${hasStock ? "" : ", out of stock"}`}
              aria-pressed={isSelected}
            >
              {!hasStock && (
                <span className='absolute text-[10px] font-bold'>×</span>
              )}
            </button>
          );
        })}
      </div>

      <div className='flex items-center gap-1.5 flex-wrap'>
        <span className='text-xs text-muted-foreground w-10'>Size</span>
        {sizes.map((option) => {
          const isSelected = option._id === selected._id;
          const isOutOfStock = !isSelected && option.availableStock <= 0;

          return (
            <button
              key={option._id}
              type='button'
              disabled={disabled || isSelected || isOutOfStock}
              onClick={() => onChange(option._id, item.quantity)}
              className={`
                px-2 py-0.5 border rounded text-xs
                ${
                  isSelected
                    ? "bg-mocha text-white border-mocha"
                    : isOutOfStock
                      ? "border-black/10 text-black/30 line-through cursor-not-allowed"
                      : "border-black/30 hover:border-mocha"
                }
              `}
              aria-pressed={isSelected}
            >
              {option.size}
            </button>
          );
        })}
      </div>

      <div className='inline-flex items-center border rounded-full text-sm'>
        <button
          type='button'
          aria-label='Decrease quantity'
          disabled={disabled || item.quantity <= 1}
          onClick={() => onChange(selected._id, item.quantity - 1)}
          className='px-3 py-0.5 disabled:text-black/25'
        >
          −
        </button>
        <span className='px-2 min-w-6 text-center' aria-live='polite'>
          {item.quantity}
        </span>
        <button
          type='button'
          aria-label='Increase quantity'
          disabled={disabled || !canAdd}
          onClick={() => onChange(selected._id, item.quantity + 1)}
          className='px-3 py-0.5 disabled:text-black/25'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemOptions;
