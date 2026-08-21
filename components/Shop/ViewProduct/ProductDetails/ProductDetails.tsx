import { paragraph, title } from "@/utils/fonts/fonts";
import { ProductType } from "@/types/shop";

import { formattedValue } from "@/utils/currency/currency";
import UserInputs from "./UserInputs/UserInputs";

const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <div className='flex flex-col gap-6'>
      {/* Category */}
      <p className='text-xs uppercase tracking-[0.25em] text-black/50'>
        {product.category.replace(/([A-Z])/g, " $1")}
      </p>

      {/* Title */}
      <h1
        className={`${title.className} text-2xl md:text-4xl text-black capitalize`}
      >
        {product.productName}
      </h1>

      {/* Price */}
      <div className='flex items-center gap-4'>
        <p className='text-lg text-black/80'>{formattedValue(product.price)}</p>

        {product.isOnSale && (
          <p className='text-sm text-red-600 line-through'>
            {formattedValue(product.price)}
          </p>
        )}
      </div>

      {/* Description */}
      <p className={`${paragraph.className} text-black/70 leading-relaxed`}>
        {product.description}
      </p>

      {/* Variants */}
      <UserInputs product={product} />

      {/* Meta */}
      <div className='pt-8 border-t border-black/10 text-sm text-black/50 space-y-1'>
        <p>Tag: {product.tag}</p>
        <p>Availability: {product.isPublished ? "Available" : "Preview"}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
