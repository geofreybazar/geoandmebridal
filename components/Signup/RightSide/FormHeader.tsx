import Image from "next/image";
import { title, paragraph } from "@/utils/fonts/fonts";
import logo from "@/assets/GMB.svg";

const FormHeader = () => {
  return (
    <>
      <div className='flex justify-center mb-6'>
        <Image
          className='h-16 w-auto'
          src={logo}
          alt='Geo and Me Bridal Official logo'
          priority
        />
      </div>

      <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-3'>
        Registration
      </p>

      <h1 className={`${title.className} text-3xl md:text-4xl text-black mb-4`}>
        Begin Your Journey
      </h1>

      <div className='w-20 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

      <p className={`${paragraph.className} text-sm text-black/70 mb-8`}>
        Create your account to manage fittings, appointments, and your custom
        gown story.
      </p>
    </>
  );
};

export default FormHeader;
