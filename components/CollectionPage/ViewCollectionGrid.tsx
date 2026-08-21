"use client";

import { useState } from "react";
import { CollectionType } from "@/types/collections";
import Image from "next/image";
import LightBox from "../LightBox/LightBox";
import NoImagesUploaded from "./NoImagesUploaded";

const ViewCollectionGrid = ({ collection }: { collection: CollectionType }) => {
  const [openImage, setOpenImage] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(0);

  const images = collection.photos.map((collection) => ({
    src: collection.imageInfo.url,
  }));

  const handlePictureClick = (index: number) => {
    setPictureIndex(index);
    setOpenImage(true);
  };

  if (images.length === 0) {
    return <NoImagesUploaded />;
  }

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {collection.photos.map((item, index) => (
          <div
            key={item._id ?? index}
            className='relative aspect-[3/4] rounded-md overflow-hidden'
          >
            <Image
              onClick={() => handlePictureClick(index)}
              src={item.imageInfo.url}
              alt={`${collection.collectionName} look ${index + 1}`}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-700 hover:scale-105 cursor-pointer'
              priority={index < 2}
            />
          </div>
        ))}
      </div>

      <LightBox
        open={openImage}
        setClose={setOpenImage}
        images={images}
        startIndex={pictureIndex}
      />
    </section>
  );
};

export default ViewCollectionGrid;
