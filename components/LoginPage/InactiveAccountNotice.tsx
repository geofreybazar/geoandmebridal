import { paragraph } from "@/utils/fonts/fonts";

const InactiveAccountNotice = () => {
  return (
    <div
      role='alert'
      className={`${paragraph.className} mt-6 rounded-md border border-mocha/30 bg-champagneBeige/60 px-4 py-3 text-left text-sm text-black/80`}
    >
      <p className='font-medium text-black'>Your account is inactive.</p>
      <p className='mt-1'>
        To reactivate it, contact us at{" "}
        <a
          href='mailto:support@geoandmebridal.com'
          className='underline hover:text-black'
        >
          support@geoandmebridal.com
        </a>{" "}
        or (+63) 920-581-7115.
      </p>
    </div>
  );
};

export default InactiveAccountNotice;
