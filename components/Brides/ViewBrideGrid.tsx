"use client";

import { useState } from "react";

import { Bride } from "@/types/brides";
import Image from "next/image";

import LightBox from "../LightBox/LightBox";
import NoBridePhoto from "./NoBridePhoto";

const ViewBrideGrid = ({ bride }: { bride: Bride }) => {
  const [openImage, setOpenImage] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(0);

  const images = bride.photos.map((bride) => ({
    src: bride.imageInfo.url,
  }));

  const handlePictureClick = (index: number) => {
    setPictureIndex(index);
    setOpenImage(true);
  };

  if (images.length === 0) {
    return <NoBridePhoto />;
  }

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {bride.photos.map((photo, index) => (
          <div
            key={index}
            className='relative aspect-[3/4] rounded-md overflow-hidden'
          >
            <Image
              onClick={() => handlePictureClick(index)}
              src={photo.imageInfo.url}
              alt={`${bride.bridesName} wedding look ${index + 1}`}
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

export default ViewBrideGrid;
