import { ReturnedGetProducts } from "@/types/shop";
import ProductCard from "./ProductCard";
import EmptyProducts from "./EmptyProducts";

const ProductGrid = ({ products }: { products: ReturnedGetProducts }) => {
  const isEmpty = products.products.length === 0;

  if (isEmpty) {
    return <EmptyProducts />;
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-14'>
      {products.products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
