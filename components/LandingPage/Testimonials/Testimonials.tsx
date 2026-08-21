import Link from "next/link";
import MochaContainedButton from "@/components/SharedComponents/ButtonComponents/MochaContainedButton";
import { title } from "@/utils/fonts/fonts";
import TestimonialCard from "./TestimonialCard";
import { GetTestimonials } from "@/services/testimonilas";

const Testimonials = async () => {
  const testimonials = await GetTestimonials();

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

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
            name={testimonial.brideId.bridesName}
            role={"Bride"}
            message={testimonial.review}
          />
        ))}
      </div>

      <div className='mt-8 block md:flex md:justify-center'>
        <Link href='/testimonials'>
          <MochaContainedButton>Read More</MochaContainedButton>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
