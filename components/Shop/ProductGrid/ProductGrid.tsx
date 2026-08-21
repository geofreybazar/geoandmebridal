import { ReturnedGetProducts } from "@/types/shop";
import ProductCard from "./ProductCard";
import EmptyProducts from "./EmptyProducts";

const ProductGrid = ({ products }: { products: ReturnedGetProducts }) => {
  const isEmpty = products.products.length === 0;

  if (isEmpty) {
    return <EmptyProducts />;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {products.products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
