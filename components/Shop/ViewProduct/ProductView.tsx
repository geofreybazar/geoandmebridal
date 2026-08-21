import { ProductType } from "@/types/shop";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductView = ({ product }: { product: ProductType }) => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* IMAGES */}
        <div className='md:col-span-2'>
          <ProductImages product={product} />
        </div>

        {/* DETAILS */}
        <div className='flex flex-col gap-6 '>
          <ProductDetails product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductView;
