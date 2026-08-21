"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface SliderComponentProps {
  images: StaticImageData[];
}

const SwiperComponent = ({ images }: SliderComponentProps) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        allowSlideNext={true}
        spaceBetween={10}
        speed={2000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView='auto'
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <Image
              src={img}
              alt='GEO and Me Bridal Collections'
              className='rounded-md'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
