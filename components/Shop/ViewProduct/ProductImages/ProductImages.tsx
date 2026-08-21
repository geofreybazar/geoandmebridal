"use client";

import { useState } from "react";
import { ProductType } from "@/types/shop";

import { SwiperClass } from "swiper/react";

import Thumbnail from "./Thumbnail";
import MainImage from "./MainImage";

const ProductImages = ({ product }: { product: ProductType }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col lg:flex-row gap-4 w-full'>
      {/* THUMBNAILS */}
      <div className='order-2 lg:order-1 w-full lg:w-1/5 flex flex-col'>
        {/* Desktop Controls */}
        <Thumbnail
          product={product}
          setThumbsSwiper={setThumbsSwiper}
          activeIndex={activeIndex}
        />
      </div>

      {/* MAIN IMAGE */}
      <div className='order-1 lg:order-2 w-full lg:w-4/5 relative'>
        <MainImage
          product={product}
          setActiveIndex={setActiveIndex}
          thumbsSwiper={thumbsSwiper}
        />
      </div>
    </div>
  );
};

export default ProductImages;
