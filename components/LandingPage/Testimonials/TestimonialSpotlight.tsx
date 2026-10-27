"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import { title } from "@/utils/fonts/fonts";
import { Testimonials } from "@/types/testimonials";

// One featured bride at a time: portrait beside her quote, the others as
// round photos to switch to
const TestimonialSpotlight = ({
  testimonials,
}: {
  testimonials: Testimonials[];
}) => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  if (!current) return null;

  // Only the first name is shown publicly
  const firstName = (t: Testimonials) => t.brideId.bridesName.split(" ")[0];

  return (
    <div className='grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-12 md:gap-16 items-center max-w-5xl mx-auto'>
      {/* Portrait, rounded like the Real Weddings photos */}
      <div className='relative aspect-[4/5] w-full'>
        <Image
          key={current._id}
          src={current.brideId.photo}
          alt={`${firstName(current)}, a GEO + Me Bridal bride`}
          fill
          sizes='(max-width: 768px) 100vw, 420px'
          className='rounded-md object-cover object-top animate-in fade-in duration-500'
        />
      </div>

      {/* Quote */}
      <figure aria-live='polite'>
        <span
          aria-hidden='true'
          className={`${title.className} block text-7xl leading-none text-champagneGold -mb-4`}
        >
          “
        </span>

        <blockquote>
          <p
            className={`${title.className} line-clamp-6 text-lg md:text-xl leading-relaxed text-[#2F2825]`}
          >
            {current.review}
          </p>
        </blockquote>

        <figcaption className='mt-6'>
          <div
            className='flex gap-1'
            aria-label={`${current.rating} out of 5 stars`}
            role='img'
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < current.rating
                    ? "fill-[#C9A96A] text-[#C9A96A]"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className={`${title.className} mt-3 text-base text-[#2F2825]`}>
            {firstName(current)}
          </p>
          <p className='mt-1 text-xs uppercase tracking-[0.2em] text-[#A38A7A]'>
            Bride
          </p>
        </figcaption>

        {/* Other brides */}
        {testimonials.length > 1 && (
          <div className='mt-6 flex gap-3'>
            {testimonials.map((t, index) => (
              <button
                key={t._id}
                type='button'
                onClick={() => setActive(index)}
                aria-label={`Show ${firstName(t)}'s story`}
                aria-pressed={index === active}
                className={`relative h-11 w-11 rounded-full overflow-hidden transition ${
                  index === active
                    ? "outline outline-1 outline-warmTaupe outline-offset-2"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={t.brideId.photo}
                  alt=''
                  fill
                  sizes='44px'
                  className='object-cover object-top'
                />
              </button>
            ))}
          </div>
        )}
      </figure>
    </div>
  );
};

export default TestimonialSpotlight;
