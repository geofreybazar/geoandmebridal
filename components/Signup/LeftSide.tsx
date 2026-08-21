import Image from "next/image";
import { title } from "@/utils/fonts/fonts";
import kaki from "@/assets/SignUp/kaki.jpeg";

const LeftSide = () => {
  return (
    <div className='relative hidden md:block'>
      <Image
        src={kaki}
        alt='GEO + Me Bridal'
        fill
        priority
        className='object-cover'
      />

      {/* Soft Overlay */}
      <div className='absolute inset-0 bg-black/20' />

      {/* Brand Text */}
      <div className='absolute bottom-12 left-12 text-white'>
        <h2 className={`${title.className} text-4xl mb-3`}>GEO + Me Bridal</h2>
        <p className='text-sm tracking-[0.3em] uppercase opacity-80'>
          Timeless Elegance
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
