import { Suspense } from "react";
import Filter from "./Filter/Filter";
import ProductGrid from "./ProductGrid/ProductGrid";
import { GetCategories, GetProducts } from "@/services/shop";
import PaginationFooter from "./PaginationFooter";

type SearchQuery = { [key: string]: string | string[] | undefined };

interface CategoryPageClientProps {
  searchQuery: SearchQuery;
  formattedCategory: string;
  categoryParams: string;
}

const CategoryPageClient = async ({
  searchQuery,
  formattedCategory,
  categoryParams,
}: CategoryPageClientProps) => {
  const { category, size, page } = searchQuery;

  const categories = Array.isArray(category)
    ? category
    : category
      ? [category]
      : [];
  const sizes = Array.isArray(size) ? size : size ? [size] : [];

  const filter = {
    category: categories.length > 0 ? categories : undefined,
    size: sizes.length > 0 ? sizes : undefined,
    page: page ? page : undefined,
  };

  const products = await GetProducts(filter, formattedCategory);
  const subCategories = await GetCategories(categoryParams);

  return (
    <section>
      {/* Sorting */}
      <div className='flex justify-end pb-8'>
        <Filter searchQuery={searchQuery} subCategories={subCategories} />
      </div>
      {/* Product Grid */}
      <Suspense fallback={<div>Products Loading</div>}>
        <ProductGrid products={products} />
      </Suspense>

      <PaginationFooter
        currentPage={products.currentPage}
        totalPages={products.totalPages}
        searchQuery={searchQuery}
      />
    </section>
  );
};

export default CategoryPageClient;
