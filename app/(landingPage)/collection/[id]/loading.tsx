const Loading = () => {
  return (
    <section className='animate-pulse'>
      <div className='max-w-3xl mx-auto text-center mb-16'>
        <div className='h-10 w-2/3 mx-auto bg-black/10 rounded' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='aspect-[3/4] bg-black/10 rounded-md' />
        ))}
      </div>
    </section>
  );
};

export default Loading;
