import { title, paragraph } from "@/utils/fonts/fonts";
import SwiperComponent from "../SharedComponents/SwiperComponent";
import MochaContainedButton from "../SharedComponents/ButtonComponents/MochaContainedButton";

import Image1 from "@/assets/CollectionSlider/1.svg";
import Image2 from "@/assets/CollectionSlider/2.svg";
import Image3 from "@/assets/CollectionSlider/3.svg";
import Image4 from "@/assets/CollectionSlider/4.svg";
import Image5 from "@/assets/CollectionSlider/5.svg";
import Image6 from "@/assets/CollectionSlider/6.svg";

import Link from "next/link";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Collection = () => {
  return (
    <section className='py-16 lg:py-24 px-6 xl:px-36 2xl:px-52 bg-linear-to-b from-ivoryWhite to-champagneBeige'>
      {/* Header */}
      <div className='max-w-4xl mx-auto text-center mb-14'>
        {/* Eyebrow */}
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Collections
        </p>

        {/* Title */}
        <h2
          className={`mb-4 ${title.className} text-3xl md:text-4xl lg:text-5xl text-black'`}
        >
          Our Signature Creations
        </h2>

        {/* Description */}
        <p
          className={`${paragraph.className} text-sm md:text-base lg:text-lg text-black/70 leading-relaxed max-w-3xl mx-auto`}
        >
          Discover our exclusive range of handcrafted wedding gowns,
          thoughtfully designed with exquisite attention to detail. Each piece
          is created to reflect your individuality and make your most cherished
          moments truly unforgettable.
        </p>
      </div>

      {/* Slider */}
      <SwiperComponent images={images} />

      {/* CTA */}
      <div className='flex justify-center mt-12'>
        <Link href='/collection' className='w-full sm:w-auto'>
          <MochaContainedButton>View Full Collection</MochaContainedButton>
        </Link>
      </div>
    </section>
  );
};

export default Collection;
