import Link from "next/link";
import { paragraph } from "@/utils/fonts/fonts";

const HeroButton = () => {
  return (
    <Link
      href='/shop'
      className={`
        ${paragraph.className}
        block text-center
        w-full
        rounded-md
        border border-champagneGold
        bg-champagneGold
        px-10 py-4
        text-base
        text-black
        transition-all duration-300 ease-out
        hover:bg-champagneGold/90
        hover:border-champagneGold
        hover:-translate-y-0.5
      `}
    >
      Shop the Collection
    </Link>
  );
};

export default HeroButton;
