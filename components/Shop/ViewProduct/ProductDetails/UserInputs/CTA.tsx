import AddToCartButton from "@/components/SharedComponents/ButtonComponents/AddToCart/AddToCartButton";
import OutlinedMochaButton from "@/components/SharedComponents/ButtonComponents/OutlinedMochaButton";

import { ProductVariantType, ProductType } from "@/types/shop";

interface CTAProps {
  product: ProductType;
  selectedSize: ProductVariantType | null;
  selectedQuantity: number;
}

const CTA = ({ product, selectedSize, selectedQuantity }: CTAProps) => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 pt-6'>
      <AddToCartButton
        product={product}
        selectedSize={selectedSize}
        selectedQuantity={selectedQuantity}
      />
      <div>
        <OutlinedMochaButton href='/appointment'>Book Fitting</OutlinedMochaButton>
      </div>
    </div>
  );
};

export default CTA;
