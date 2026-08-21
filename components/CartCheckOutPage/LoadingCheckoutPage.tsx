import { paragraph, title } from "@/utils/fonts/fonts";

const LoadingCheckoutPage = () => {
  return (
    <main className='min-h-screen flex items-center justify-center bg-linear-to-b from-offwhite to-champagneBeige'>
      <div className='flex flex-col items-center text-center px-6'>
        {/* Brand Name */}
        <h1
          className={`${title.className} text-3xl md:text-4xl text-black mb-6`}
        >
          GEO + Me Bridal
        </h1>

        {/* Divider */}
        <div className='w-24 h-px mb-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {/* Loading Indicator */}
        <div className='flex gap-2 mb-6'>
          <span className='w-2 h-2 rounded-full bg-black/60 animate-bounce [animation-delay:-0.3s]' />
          <span className='w-2 h-2 rounded-full bg-black/60 animate-bounce [animation-delay:-0.15s]' />
          <span className='w-2 h-2 rounded-full bg-black/60 animate-bounce' />
        </div>

        {/* Text */}
        <p
          className={`${paragraph.className} text-sm tracking-wide text-black/60`}
        >
          Preparing your experience
        </p>
      </div>
    </main>
  );
};

export default LoadingCheckoutPage;
