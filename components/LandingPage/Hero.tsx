import Link from "next/link";
import { title } from "@/utils/fonts/fonts";

import OutlinedMochaButton from "../SharedComponents/ButtonComponents/OutlinedMochaButton";
import HeroButton from "../SharedComponents/ButtonComponents/HeroButton";

const Hero = () => {
  return (
    <section className='relative'>
      <video
        className='w-full h-[60vh] lg:h-[75vh] object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src='/videos/Hero2.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 xl:px-36 2xl:px-52'>
        {/* Eyebrow */}
        <p className='text-xs tracking-[0.35em] uppercase text-ivoryWhite mb-4'>
          Bridal Couture
        </p>

        {/* Headline */}
        <h1
          className={`${title.className} text-3xl md:text-4xl lg:text-6xl text-ivoryWhite max-w-4xl`}
        >
          Forever Begins Here
        </h1>

        {/* Divider */}
        <div className='w-50 h-px my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {/* CTA */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto'>
          <Link href='/appointment' className='w-full sm:w-auto'>
            <OutlinedMochaButton>Book Appointment</OutlinedMochaButton>
          </Link>

          <Link href='/shop' className='w-full sm:w-auto'>
            <HeroButton />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
