import type { Metadata } from "next";
import { title, paragraph } from "@/utils/fonts/fonts";
import CategoryPageClient from "@/components/Shop/CategoryPageClient";
import { SHOP_CATEGORIES } from "@/utils/constants/shop";

const formatCategory = (category: string) =>
  category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export async function generateMetadata({
  params,
}: Pick<ProductPageProps, "params">): Promise<Metadata> {
  const { category } = await params;
  const known = SHOP_CATEGORIES.find((c) => c.link === `/shop/${category}`);
  const name = known?.title ?? formatCategory(category);

  return {
    title: `${name} | Shop`,
    description:
      known?.description ?? `Browse ${name.toLowerCase()} from GEO + Me Bridal.`,
    // Filters and pages share the category's address
    alternates: { canonical: `/shop/${category}` },
  };
}

interface ProductPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const { category } = await params;

  const formattedCategory = formatCategory(category);

  return (
    <main>
      <section>
        <h1
          className={`${title.className} text-3xl md:text-5xl text-black mb-3`}
        >
          {formattedCategory}
        </h1>

        <p
          className={`${paragraph.className} text-black/70 text-sm md:text-base max-w-2xl`}
        >
          Browse curated pieces from our {formattedCategory.toLowerCase()}{" "}
          selection.
        </p>
      </section>

      {/* Client side product grid + sorting */}
      <CategoryPageClient
        searchQuery={await searchParams}
        formattedCategory={formattedCategory}
        categoryParams={category}
      />
    </main>
  );
};

export default ProductPage;
