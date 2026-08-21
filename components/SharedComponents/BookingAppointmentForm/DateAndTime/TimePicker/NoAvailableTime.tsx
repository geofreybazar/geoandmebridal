const NoAvailableTime = () => {
  return (
    <div className='rounded-lg p-6 text-center bg-yellow-50'>
      <p className='text-sm font-medium text-black/80'>
        No available time slots for the selected date.
      </p>
      <p className='text-xs text-black/50 mt-1'>
        Kindly select a different date.
      </p>
    </div>
  );
};

export default NoAvailableTime;
