import Link from "next/link";

const Right = () => {
  return (
    <div className='flex flex-col gap-10 items-start lg:items-end text-sm'>
      {/* Navigation */}
      <nav className='flex flex-col gap-3 text-offwhite/80 md:text-right'>
        <Link href='/aboutus' className='hover:text-champagneGold transition'>
          About Us
        </Link>
        <Link
          href='/collection'
          className='hover:text-champagneGold transition'
        >
          Collection
        </Link>
        <Link href='/brides' className='hover:text-champagneGold transition'>
          Real Brides
        </Link>
        <Link href='/shop' className='hover:text-champagneGold transition'>
          Shop
        </Link>
        <Link href='/contact' className='hover:text-champagneGold transition'>
          Contact
        </Link>
      </nav>

      {/* Contact */}
      <div className='text-offwhite/50 md:text-right leading-relaxed'>
        <p>Ermita, Manila</p>
        <p>(+63) 920-581-7115</p>
      </div>
    </div>
  );
};

export default Right;
