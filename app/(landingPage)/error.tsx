"use client";

import Link from "next/link";
import { title, paragraph } from "@/utils/fonts/fonts";
import MochaContainedButton from "@/components/SharedComponents/ButtonComponents/MochaContainedButton";
import OutlinedMochaButton from "@/components/SharedComponents/ButtonComponents/OutlinedMochaButton";

// Unexpected errors on the public site and "my profile"; no automatic
// redirect (visitors who are not signed in have no dashboard)
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className='min-h-[70vh] flex items-center justify-center py-24 px-6 xl:px-36 2xl:px-52'>
      <div className='max-w-2xl flex flex-col items-center text-center'>
        {/* Eyebrow */}
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Something Went Wrong
        </p>

        {/* Title */}
        <h1
          className={`${title.className} text-3xl md:text-4xl lg:text-5xl text-black`}
        >
          This page seems to have wandered
        </h1>

        {/* Divider */}
        <div className='w-24 h-px my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {/* Message */}
        <p
          className={`${paragraph.className} text-sm md:text-base lg:text-lg text-black/70 leading-relaxed`}
        >
          We couldn&apos;t load this page just now. Please try again in a
          moment, or let us guide you back to your couture journey.
        </p>

        {/* Actions */}
        <div className='mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto'>
          <div className='w-full sm:w-auto'>
            <MochaContainedButton onClick={reset}>Try Again</MochaContainedButton>
          </div>

          <Link href='/' className='w-full sm:w-auto'>
            <OutlinedMochaButton>Back to Home</OutlinedMochaButton>
          </Link>
        </div>

        <p className='mt-10 text-[10px] tracking-[0.35em] uppercase text-black/50'>
          GEO + Me Bridal Atelier
        </p>
      </div>
    </section>
  );
}
