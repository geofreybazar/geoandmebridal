const SidebarSkeleton = () => {
  return (
    <aside className='hidden lg:block w-72 bg-white border-r border-black/5 px-8 py-12 flex flex-col justify-between min-h-screen'>
      <div>
        {/* Profile Section Skeleton */}
        <div className='mb-14 text-center animate-pulse'>
          {/* Avatar */}
          <div className='w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4' />

          {/* Name */}
          <div className='h-4 w-32 bg-gray-200 mx-auto rounded' />
        </div>

        {/* Navigation Skeleton */}
        <nav className='space-y-6 text-xs tracking-[0.2em] uppercase animate-pulse'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className='h-3 w-40 bg-gray-200 rounded' />
          ))}
        </nav>
      </div>

      {/* Logout Skeleton */}
      <div className='h-3 w-20 bg-gray-200 rounded animate-pulse' />
    </aside>
  );
};

export default SidebarSkeleton;
