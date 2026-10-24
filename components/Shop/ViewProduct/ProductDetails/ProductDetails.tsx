import { paragraph, title } from "@/utils/fonts/fonts";
import { ProductType } from "@/types/shop";

import { formattedValue } from "@/utils/currency/currency";
import UserInputs from "./UserInputs/UserInputs";

const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <div className='flex flex-col gap-6'>
      {/* Category */}
      <p className='text-xs uppercase tracking-[0.25em] text-warmTaupe'>
        {product.category.replace(/([A-Z])/g, " $1")}
      </p>

      {/* Title */}
      <h1
        className={`${title.className} text-2xl md:text-4xl text-black capitalize`}
      >
        {product.productName}
      </h1>

      {/* Price */}
      <p className='text-lg text-black/80'>{formattedValue(product.price)}</p>

      {/* Description */}
      <p className={`${paragraph.className} text-black/70 leading-relaxed`}>
        {product.description}
      </p>

      {/* Variants */}
      <UserInputs product={product} />
    </div>
  );
};

export default ProductDetails;
