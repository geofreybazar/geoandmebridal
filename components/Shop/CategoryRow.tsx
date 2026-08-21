import Image from "next/image";
import Link from "next/link";
import { title, paragraph } from "@/utils/fonts/fonts";
import OutlinedMochaButton from "../SharedComponents/ButtonComponents/OutlinedMochaButton";
import { SHOP_CATEGORIES } from "@/utils/constants/shop";

const CategoryGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
      {SHOP_CATEGORIES.map((cat) => (
        <div
          key={cat.title}
          className='group relative rounded-xl overflow-hidden'
        >
          {/* Image */}
          <div className='relative w-full aspect-[3/4]'>
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
          </div>

          {/* Overlay Content */}
          <div className='absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white'>
            <h2 className={`${title.className} text-xl md:text-2xl`}>
              {cat.title}
            </h2>

            <p className={`${paragraph.className} text-white/80 text-sm mt-2`}>
              {cat.description}
            </p>

            <div className='mt-4'>
              <Link href={cat.link}>
                <OutlinedMochaButton>{cat.cta}</OutlinedMochaButton>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
