import ProductView from "@/components/Shop/ViewProduct/ProductView";
import { GetProduct } from "@/services/shop";

const ViewProductPage = async ({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) => {
  const { productSlug } = await params;

  const product = await GetProduct(productSlug);

  if (!product) {
    return (
      <div className='py-32 text-center text-black/60'>Product not found.</div>
    );
  }

  return <ProductView product={product} />;
};

export default ViewProductPage;
