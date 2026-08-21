import { title, paragraph } from "@/utils/fonts/fonts";
import CategoryPageClient from "@/components/Shop/CategoryPageClient";

interface ProductPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const { category } = await params;

  const formattedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

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
