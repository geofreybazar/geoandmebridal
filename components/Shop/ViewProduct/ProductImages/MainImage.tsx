import Image from "next/image";

import { ProductType } from "@/types/shop";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

interface MainImageProps {
  product: ProductType;
  setActiveIndex: (index: number) => void;
  thumbsSwiper: SwiperClass | null;
}

const MainImage = ({
  product,
  setActiveIndex,
  thumbsSwiper,
}: MainImageProps) => {
  return (
    <>
      {/* Left Arrow */}
      <button className='custom-prev2 hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:text-blue-500'>
        <ChevronLeft />
      </button>

      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: ".custom-next2",
          prevEl: ".custom-prev2",
        }}
        className='w-full aspect-[3/4] lg:h-full bg-gray-100 rounded-md overflow-hidden'
      >
        {product.images.map((img, index) => (
          <SwiperSlide key={index} className='relative'>
            <Image
              fill
              src={img.imageInfo.url}
              alt={`${product.productName} ${index + 1}`}
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 70vw'
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}
      <button className='custom-next2 hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:text-blue-500'>
        <ChevronRight />
      </button>
    </>
  );
};

export default MainImage;
