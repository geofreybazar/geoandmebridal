import Link from "next/link";
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
      <Link href='/appointment'>
        <OutlinedMochaButton>Book Fitting</OutlinedMochaButton>
      </Link>
    </div>
  );
};

export default CTA;
