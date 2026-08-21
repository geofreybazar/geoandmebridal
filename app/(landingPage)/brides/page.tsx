import Brides from "@/components/Brides/Brides";
import { Suspense } from "react";
import CollectionsFallback from "@/components/CollectionPage/CollectionsFallback";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

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
