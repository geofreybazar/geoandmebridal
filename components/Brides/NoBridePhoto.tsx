const NoBridePhoto = () => {
  return (
    <section className='px-6 xl:px-36 2xl:px-52 pb-24'>
      <div className='flex flex-col items-center justify-center text-center min-h-[40vh]'>
        {/* Divider */}
        <div className='w-24 h-px mb-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {/* Message */}
        <p className='text-sm tracking-[0.35em] uppercase text-black/60 mb-4'>
          Coming Soon
        </p>

        <h2 className='text-xl md:text-2xl font-serif text-black mb-3'>
          This Bride’s Photo Is Being Curated
        </h2>

        <p className='text-sm md:text-base text-black/70 max-w-md'>
          Our team is currently preparing this bride’s photo collection. Please
          check back soon to view the complete gallery.
        </p>
      </div>
    </section>
  );
};

export default NoBridePhoto;
