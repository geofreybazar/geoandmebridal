const LoadingTimeSkeleton = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className='h-[48px] rounded-md bg-gray-200 animate-pulse'
        />
      ))}
    </div>
  );
};

export default LoadingTimeSkeleton;
