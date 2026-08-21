import Image from "next/image";
import { title, paragraph } from "@/utils/fonts/fonts";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";
import GEOandMeShop from "@/assets/AboutUs/shop.jpg";

const AboutUsPage = () => {
  return (
    <main>
      {/* Header */}
      <PageHeader
        miniTitle={"About Us"}
        mainTitle={"Our Story"}
        description={
          "GEO + Me Bridal is a couture atelier dedicated to creating bespoke wedding gowns that reflect individuality, craftsmanship, and timeless elegance."
        }
      />

      {/* Brand Story */}
      <section className='text-center md:text-left'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Text */}
          <div className='flex flex-col gap-6'>
            <h2 className={`${title.className} text-3xl text-black `}>
              Crafted with Purpose
            </h2>

            <p
              className={`${paragraph.className} text-black/70 leading-relaxed `}
            >
              Founded with a passion for refined design and thoughtful
              craftsmanship, GEO + Me Bridal was created to offer brides an
              experience that goes beyond the gown itself. Each piece is
              designed and handcrafted with meticulous attention to detail,
              ensuring every bride feels confident, elegant, and truly herself.
            </p>

            <p
              className={`${paragraph.className} text-black/70 leading-relaxed`}
            >
              From the first consultation to the final fitting, our process is
              intimate and collaborative. We believe that every gown should tell
              a story — one that reflects the bride’s personality, vision, and
              most meaningful moments.
            </p>
          </div>

          {/* Image */}
          <div className='relative aspect-[3/4] rounded-md overflow-hidden'>
            <Image
              src={GEOandMeShop}
              alt='GEO + Me Bridal Atelier'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
      </section>

      {/* Designer Section */}
      <section className='text-center md:text-left'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Image */}
          <div className='relative aspect-[3/4] rounded-md overflow-hidden order-last lg:order-first'>
            <Image
              src='/mock/about/designer.jpg'
              alt='Medy G. Magsipoc-Bazar'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>

          {/* Text */}
          <div className='flex flex-col gap-6'>
            <p className='text-xs tracking-[0.35em] uppercase text-black/60'>
              The Designer
            </p>

            <h2 className={`${title.className} text-3xl text-black`}>
              Medy G. Magsipoc-Bazar
            </h2>

            <p
              className={`${paragraph.className} text-black/70 leading-relaxed`}
            >
              Medy G. Magsipoc-Bazar is the creative force behind GEO + Me
              Bridal. With formal training in fashion design and years of
              hands-on experience, she brings together tradition, modern
              aesthetics, and couture techniques in every gown she creates.
            </p>

            <p
              className={`${paragraph.className} text-black/70 leading-relaxed`}
            >
              Having apprenticed under respected designers and drawing
              inspiration from both classic silhouettes and contemporary bridal
              fashion, Medy approaches each design with intention, balance, and
              artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className='text-center'>
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Our Philosophy
        </p>

        <h2
          className={`${title.className} text-3xl md:text-4xl text-black mb-6`}
        >
          Timeless. Personal. Crafted.
        </h2>

        <p
          className={`${paragraph.className} text-black/70 max-w-3xl mx-auto leading-relaxed`}
        >
          At GEO + Me Bridal, we believe true luxury lies in thoughtful design,
          quality craftsmanship, and meaningful experiences. Our gowns are not
          mass-produced — they are carefully made, one bride at a time.
        </p>
      </section>
    </main>
  );
};

export default AboutUsPage;
