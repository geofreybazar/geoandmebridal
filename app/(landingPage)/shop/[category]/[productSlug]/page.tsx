import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductView from "@/components/Shop/ViewProduct/ProductView";
import { GetProduct } from "@/services/shop";
import { excerpt } from "@/lib/seo";

type Params = { params: Promise<{ category: string; productSlug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, productSlug } = await params;
  const product = await GetProduct(productSlug);
  if (!product) return {};

  return {
    title: product.productName,
    description:
      excerpt(product.description) ||
      `${product.productName} from GEO + Me Bridal.`,
    alternates: { canonical: `/shop/${category}/${productSlug}` },
    openGraph: {
      images: product.images?.[0]?.imageInfo?.url ? [product.images[0].imageInfo.url] : [],
    },
  };
}

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
