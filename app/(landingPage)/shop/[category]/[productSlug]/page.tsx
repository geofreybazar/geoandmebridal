import { notFound } from "next/navigation";
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
    notFound();
  }

  return <ProductView product={product} />;
};

export default ViewProductPage;
