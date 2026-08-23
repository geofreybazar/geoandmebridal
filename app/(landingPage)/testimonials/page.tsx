import Image from "next/image";
import { title, paragraph } from "@/utils/fonts/fonts";
import { GetTestimonials } from "@/services/testimonilas";

const TestimonialsPage = async () => {
  const testimonials = await GetTestimonials();

  return (
    <main className='bg-[#FAF8F6] py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-24 text-center'>
          <p
            className={`${paragraph.className} uppercase tracking-[0.35em] text-sm text-[#A38A7A]`}
          >
            GEO + ME BRIDAL
          </p>

          <h1
            className={`${title.className} mt-4 text-5xl lg:text-6xl text-[#2F2825]`}
          >
            Love Stories
          </h1>

          <p
            className={`${paragraph.className} mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600`}
          >
            Every gown tells a story, and every wedding becomes a treasured
            memory. We are honored to have been part of these beautiful
            celebrations.
          </p>
        </div>

        {/* Testimonials */}
        <div className='space-y-28'>
          {testimonials.map((testimonial, index) => (
            <section
              key={testimonial._id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className='relative'>
                <div className='overflow-hidden rounded-[2rem] shadow-xl'>
                  <Image
                    src={testimonial.brideId.photo}
                    alt={testimonial.brideId.bridesName}
                    width={600}
                    height={750}
                    className='h-[550px] w-full object-cover transition duration-700 hover:scale-105'
                  />
                </div>
              </div>

              {/* Content */}
              <div className='relative'>
                <span
                  className={`${title.className} absolute -top-14 left-0 text-[8rem] leading-none text-[#E8DED6]`}
                >
                  “
                </span>

                <div className='relative'>
                  <div
                    className='mb-6 flex gap-1 text-xl text-[#C9A96A]'
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>
                        {index < testimonial.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                  <p
                    className={`${paragraph.className} text-lg leading-9 text-gray-700 italic`}
                  >
                    {testimonial.review}
                  </p>

                  <div className='mt-10'>
                    <h2
                      className={`${title.className} text-3xl text-[#2F2825] capitalize`}
                    >
                      {testimonial.brideId.bridesName.split(" ")[0]}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
