import Link from "next/link";

const Legal = () => {
  return (
    <div className='border-t border-offwhite/10'>
      <div className='px-6 xl:px-36 2xl:px-52 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-offwhite/50'>
          <p>© 2025 GEO + Me Bridal</p>

          <div className='flex gap-6'>
            <Link
              href='/privacy-policy'
              className='hover:text-offwhite transition'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms-of-service'
              className='hover:text-offwhite transition'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
