const CollectionsFallback = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className='relative aspect-[3/4] rounded-md bg-black/10'
        />
      ))}
    </div>
  );
};

export default CollectionsFallback;
