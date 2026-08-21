import Image from "next/image";
import { title, paragraph } from "@/utils/fonts/fonts";
import whiteLogo from "@/assets/whiteLogo.png";

const Left = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Image
        src={whiteLogo}
        alt='GEO + Me Bridal'
        className='w-60 h-auto'
        priority
      />

      <h3 className={`${title.className} text-2xl md:text-3xl max-w-md`}>
        A couture experience crafted for life’s most meaningful moments.
      </h3>

      <p
        className={`${paragraph.className} text-sm text-offwhite/60 max-w-md leading-relaxed`}
      >
        GEO + Me Bridal creates bespoke wedding gowns defined by artistry,
        heritage, and refined craftsmanship.
      </p>
    </div>
  );
};

export default Left;
