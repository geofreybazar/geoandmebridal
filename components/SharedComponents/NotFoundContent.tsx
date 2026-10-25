import Link from "next/link";
import { title, paragraph } from "@/utils/fonts/fonts";
import MochaContainedButton from "./ButtonComponents/MochaContainedButton";
import OutlinedMochaButton from "./ButtonComponents/OutlinedMochaButton";

// Shown for unknown brides, collections, products, orders and URLs
const NotFoundContent = () => {
  return (
    <section className='min-h-[70vh] flex items-center justify-center py-24 px-6 xl:px-36 2xl:px-52'>
      <div className='max-w-2xl flex flex-col items-center text-center'>
        {/* Eyebrow */}
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Page Not Found
        </p>

        {/* Title */}
        <h1
          className={`${title.className} text-3xl md:text-4xl lg:text-5xl text-black`}
        >
          We couldn&apos;t find that page
        </h1>

        {/* Divider */}
        <div className='w-24 h-px my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {/* Message */}
        <p
          className={`${paragraph.className} text-sm md:text-base lg:text-lg text-black/70 leading-relaxed`}
        >
          The gown, bride or collection you&apos;re looking for may have been
          moved or is no longer available.
        </p>

        {/* Actions */}
        <div className='mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto'>
          <div className='w-full sm:w-auto'>
            <MochaContainedButton href='/'>Back to Home</MochaContainedButton>
          </div>

          <div className='w-full sm:w-auto'>
            <OutlinedMochaButton href='/shop'>Visit the Shop</OutlinedMochaButton>
          </div>
        </div>

        <Link
          href='/brides'
          className={`${paragraph.className} mt-8 text-sm tracking-wide underline underline-offset-4 text-black/70 hover:text-black transition`}
        >
          See our Real Brides
        </Link>
      </div>
    </section>
  );
};

export default NotFoundContent;
