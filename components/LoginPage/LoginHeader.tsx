import Image from "next/image";
import logo from "@/assets/GMB.svg";
import { title, paragraph } from "@/utils/fonts/fonts";

const LoginHeader = () => {
  return (
    <div className='mb-8'>
      <div className='flex justify-center mb-6'>
        <Image
          className='h-16 w-auto'
          src={logo}
          alt='Geo and Me Bridal Official logo'
          priority
        />
      </div>
      <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-3'>
        Client Access
      </p>

      <h1
        className={`${title.className} text-2xl md:text-3xl md:text-4xl text-black mb-4`}
      >
        Welcome Back
      </h1>

      <div className='w-20 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

      <p className={`${paragraph.className} text-xs md:text-sm text-black/70`}>
        Sign in to manage your appointments and view your bridal journey.
      </p>
    </div>
  );
};

export default LoginHeader;
