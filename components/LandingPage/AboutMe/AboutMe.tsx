import Image from "next/image";

import { title, paragraph } from "@/utils/fonts/fonts";
import Medy from "@/assets/AboutMe/2.jpg";

const AboutMe = () => {
  return (
    <section className='py-16 lg:py-24 px-6 xl:px-36 2xl:px-52 bg-linear-to-b from-offwhite to-champagneBeige'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-16'>
        {/* Text */}
        <div className='md:w-1/2 text-center md:text-left flex flex-col gap-6'>
          {/* Eyebrow */}
          <p className='text-xs tracking-[0.35em] uppercase text-black/60'>
            The Designer
          </p>

          {/* Name */}
          <h2
            className={`${title.className} text-3xl md:text-4xl lg:text-5xl text-black`}
          >
            Medy G. Magsipoc-Bazar
          </h2>

          {/* Divider */}
          <div className='w-20 h-px bg-gradient-to-r from-transparent via-champagneGold to-transparent md:mx-0 mx-auto' />

          {/* Description */}
          <p
            className={`${paragraph.className} text-sm md:text-base lg:text-lg leading-relaxed text-black/70`}
          >
            An aspiring luxury fashion designer and visionary, Medy
            Magsipoc-Bazar, the creative force behind GEO + Me Bridal, studied
            Fashion Design at the Fashion Institute of the Philippines. She
            further honed her craft through apprenticeships under recognized
            names in the industry.
            <br />
            <br />
            Carrying the legacy of her parents—who also worked with top
            designers in the Philippines—Medy brings inherited wisdom and
            refined skill to every creation. Her work has been featured on
            Inspirations.ph, the official magazine of Themes & Motifs, the
            premier producer and organizer of professional wedding fairs in the
            country.
          </p>
        </div>

        {/* Image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-[300px] aspect-[3/4] md:w-[360px] lg:w-[420px] rounded-md '>
            <Image
              src={Medy}
              alt='Medy G. Magsipoc-Bazar'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
