import { Suspense } from "react";
import CollectionsFallback from "@/components/CollectionPage/CollectionsFallback";
import Collections from "@/components/CollectionPage/Collections";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

const CollectionPage = () => {
  return (
    <section>
      {/* Page Header */}

      <PageHeader
        miniTitle={"Bridal Lookbook"}
        mainTitle={"Our Collections"}
        description={
          "Browse through our curated bridal collections. Each collection is a visual story, thoughtfully crafted and presented as a timeless album."
        }
      />

      {/* Collection Covers */}
      <Suspense fallback={<CollectionsFallback />}>
        <Collections />
      </Suspense>
    </section>
  );
};

export default CollectionPage;
