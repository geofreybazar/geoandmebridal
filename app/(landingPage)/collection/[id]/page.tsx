import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { paragraph, title } from "@/utils/fonts/fonts";
import { GetCollectionsImages } from "@/services/collections";
import ViewCollectionGrid from "@/components/CollectionPage/ViewCollectionGrid";
import Link from "next/link";
import { excerpt } from "@/lib/seo";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const collection = await GetCollectionsImages(id);
  if (!collection) return {};

  return {
    title: `${collection.collectionName} Collection`,
    description:
      excerpt(collection.description) ||
      `The ${collection.collectionName} bridal collection by GEO + Me Bridal.`,
    alternates: { canonical: `/collection/${id}` },
    openGraph: { images: collection.coverImage?.url ? [collection.coverImage.url] : [] },
  };
}

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
      <section className='pb-16'>
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Bridal Collection
        </p>

        <h1
          className={`${title.className} text-4xl md:text-5xl lg:text-6xl text-black capitalize`}
        >
          {collection.collectionName}
        </h1>

        <div className='w-24 h-px mx-auto my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {collection.description && (
          <p
            className={`${paragraph.className} text-sm md:text-lg text-black/70`}
          >
            {collection.description}
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
