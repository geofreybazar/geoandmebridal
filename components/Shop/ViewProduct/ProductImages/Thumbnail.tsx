import Image from "next/image";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import { ChevronUp, ChevronDown } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { ProductType } from "@/types/shop";

interface ThumbnailProps {
  product: ProductType;
  setThumbsSwiper: (swiper: SwiperClass) => void;
  activeIndex: number;
}

const Thumbnail = ({
  product,
  setThumbsSwiper,
  activeIndex,
}: ThumbnailProps) => {
  return (
    <>
      {/* Desktop Controls */}
      <button className='custom-prev hidden lg:flex justify-center p-2 hover:text-blue-500'>
        <ChevronUp />
      </button>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        direction='horizontal'
        breakpoints={{
          1024: {
            direction: "vertical",
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className='w-full lg:h-[600px]'
      >
        {product.images.map((img, index) => (
          <SwiperSlide
            key={index}
            className={`relative aspect-square cursor-pointer rounded-md overflow-hidden border
                            ${
                              activeIndex === index
                                ? "border-elegantGold"
                                : "border-transparent opacity-60"
                            }`}
          >
            <Image
              fill
              src={img.imageInfo.url}
              alt={`${product.productName} ${index + 1}`}
              className='object-cover'
              sizes='(max-width: 768px) 25vw, 10vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop Controls */}
      <button className='custom-next hidden lg:flex justify-center p-2 hover:text-blue-500'>
        <ChevronDown />
      </button>
    </>
  );
};

export default Thumbnail;
