import type { Metadata } from "next";
import Brides from "@/components/Brides/Brides";
import { Suspense } from "react";
import CollectionsFallback from "@/components/CollectionPage/CollectionsFallback";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Real Brides",
  description:
    "Real brides who wore GEO + Me Bridal: wedding photos of our bespoke gowns on their most meaningful day.",
  alternates: { canonical: "/brides" },
};

const BridesPage = () => {
  return (
    <section>
      {/* Header */}
      <PageHeader
        miniTitle={"Real Brides"}
        mainTitle={"Brides of GEO + Me"}
        description={
          "A celebration of real brides who entrusted GEO + Me Bridal with one of the most meaningful moments of their lives."
        }
      />

      {/* Brides Grid */}
      <Suspense fallback={<CollectionsFallback />}>
        <Brides />
      </Suspense>
    </section>
  );
};

export default BridesPage;
