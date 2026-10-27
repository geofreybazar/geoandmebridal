import MochaContainedButton from "@/components/SharedComponents/ButtonComponents/MochaContainedButton";
import { title } from "@/utils/fonts/fonts";
import TestimonialSpotlight from "./TestimonialSpotlight";
import { GetTestimonials } from "@/services/testimonilas";

const Testimonials = async () => {
  const testimonials = await GetTestimonials(true);

  return (
    <section className='py-16 lg:py-24 px-6 xl:px-36 2xl:px-52 bg-linear-to-b from-ivoryWhite to-champagneBeige'>
      {/* Header */}
      <div className='max-w-3xl mx-auto text-center mb-12'>
        <p className='text-xs tracking-[0.3em] uppercase text-black/60 mb-4'>
          Testimonials
        </p>
        <h2
          className={`${title.className} text-3xl md:text-4xl font-serif text-black`}
        >
          Words from Our Brides
        </h2>
        <p className='mt-4 text-sm text-black/70'>
          Every gown tells a story — here are theirs.
        </p>
      </div>

      <TestimonialSpotlight testimonials={testimonials} />

      <div className='mt-16 block md:flex md:justify-center'>
        <div>
          <MochaContainedButton href='/testimonials'>Read more testimonials</MochaContainedButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
