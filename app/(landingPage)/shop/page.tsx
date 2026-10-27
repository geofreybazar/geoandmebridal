import type { Metadata } from "next";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

import CategoryGrid from "@/components/Shop/CategoryRow";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Ready-to-wear bridal gowns, entourage dresses, formalwear, menswear and accessories from GEO + Me Bridal in the Philippines.",
  alternates: { canonical: "/shop" },
};

const ShopPage = () => {
  return (
    <main>
      {/* Header */}
      <PageHeader
        miniTitle={"GEO + Me Bridal"}
        mainTitle={"Shop Collections"}
        description={
          "Discover our curated ready-to-wear selection. From bridal gowns to groom ensembles and finishing accessories."
        }
      />

      <section className='space-y-20'>
        <CategoryGrid />
      </section>
    </main>
  );
};

export default ShopPage;
