import Link from "next/link";
import Image from "next/image";

import { GetCollections } from "@/services/collections";
import { title } from "@/utils/fonts/fonts";

const Collections = async () => {
  const collectionsData = await GetCollections();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10'>
      {collectionsData.map((collection) => {
        const cover = collection.coverImage;

        if (!cover) return null;

        return (
          <Link
            key={collection._id}
            href={`/collection/${collection._id}`}
            className='group block'
          >
            <div className='relative aspect-[3/4] rounded-md overflow-hidden'>
              {/* Image */}
              <Image
                src={cover.url}
                alt={`GEO + Me Bridal ${collection.collectionName}`}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500' />

              {/* Text */}
              <div className='absolute inset-0 flex flex-col justify-end p-6 text-offwhite'>
                <p className='text-xs tracking-[0.35em] uppercase opacity-80'>
                  Collection
                </p>
                <h3 className={`${title.className} text-2xl mt-2`}>
                  {collection.collectionName}
                </h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Collections;
