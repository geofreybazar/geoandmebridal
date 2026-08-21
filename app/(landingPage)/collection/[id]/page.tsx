import { notFound } from "next/navigation";
import { paragraph, title } from "@/utils/fonts/fonts";
import { GetCollectionsImages } from "@/services/collections";
import ViewCollectionGrid from "@/components/CollectionPage/ViewCollectionGrid";
import Link from "next/link";

const ViewCollectionPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const collection = await GetCollectionsImages(id);

  if (!collection) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <section>
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Bridal Collection
        </p>

        <h1
          className={`${title.className} text-4xl md:text-5xl lg:text-6xl text-black capitalize`}
        >
          {collection.collectionName}
        </h1>

        <div className='w-24 h-px mx-auto my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {collection.collectionName && (
          <p
            className={`${paragraph.className} text-sm md:text-lg text-black/70`}
          >
            {collection.collectionName}
          </p>
        )}
      </section>

      {/* Album Grid */}
      <ViewCollectionGrid collection={collection} />

      {/* Back */}
      <section className='pb-24 flex justify-center'>
        <Link
          href='/collection'
          className='text-sm tracking-wide underline underline-offset-4 text-black/70 hover:text-black transition'
        >
          Back to Collections
        </Link>
      </section>
    </main>
  );
};

export default ViewCollectionPage;
