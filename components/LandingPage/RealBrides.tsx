import Link from "next/link";
import SwiperComponent from "../SharedComponents/SwiperComponent";
import MochaContainedButton from "../SharedComponents/ButtonComponents/MochaContainedButton";
import { title, paragraph } from "@/utils/fonts/fonts";

import img1 from "@/assets/RealWeddings/1.svg";
import img2 from "@/assets/RealWeddings/2.svg";
import img3 from "@/assets/RealWeddings/3.svg";
import img4 from "@/assets/RealWeddings/4.svg";
import img5 from "@/assets/RealWeddings/5.svg";
import img6 from "@/assets/RealWeddings/6.svg";

const images = [img1, img2, img3, img4, img5, img6];

const RealBrides = () => {
  return (
    <section className='py-16 lg:py-24 px-6 xl:px-36 2xl:px-52 bg-linear-to-b from-offwhite to-champagneBeige'>
      <div className='flex flex-col lg:flex-row items-center gap-12'>
        {/* Text Content */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-md'>
          {/* Eyebrow */}
          <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
            Real Weddings
          </p>

          {/* Title */}
          <h2
            className={`${title.className} text-3xl md:text-4xl lg:text-5xl text-black`}
          >
            Our Brides, Their Stories
          </h2>

          {/* Divider */}
          <div className='w-20 h-px my-6 bg-gradient-to-r from-transparent via-champagneGold to-transparent lg:mx-0 mx-auto' />

          {/* Description */}
          <p
            className={`${paragraph.className} text-sm md:text-base lg:text-lg text-black/70 leading-relaxed`}
          >
            Be inspired by the beautiful brides who chose GEO + Me Bridal for
            their special day. Each gown reflects a personal journey, crafted
            with care to bring dream weddings to life through timeless design.
          </p>

          {/* CTA */}
          <div className='mt-8 w-full sm:w-auto'>
            <Link href='/brides'>
              <MochaContainedButton>View Real Weddings</MochaContainedButton>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div className='flex-1  w-full lg:w-[720px]'>
          <SwiperComponent images={images} />
        </div>
      </div>
    </section>
  );
};

export default RealBrides;
