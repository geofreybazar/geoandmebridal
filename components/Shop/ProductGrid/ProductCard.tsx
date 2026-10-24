import Image from "next/image";
import Link from "next/link";

import { paragraph, title } from "@/utils/fonts/fonts";
import { formattedValue } from "@/utils/currency/currency";
import { ProductType } from "@/types/shop";

const IMAGE_SIZES = "(max-width: 768px) 50vw, 33vw";

// Editorial card: the photo carries it, no box; a second photo shows on hover
const ProductCard = ({ product }: { product: ProductType }) => {
  const [cover, alternate] = product.images;

  return (
    <Link
      href={`/shop/${product.tag}/${product.slug}`}
      className='group block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagneGold'
    >
      <div className='relative aspect-[3/4] overflow-hidden rounded-md bg-ivoryVeil'>
        {cover && (
          <Image
            src={cover.imageInfo.url}
            alt={product.productName}
            fill
            sizes={IMAGE_SIZES}
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100'
          />
        )}

        {alternate && (
          <Image
            src={alternate.imageInfo.url}
            alt=''
            fill
            sizes={IMAGE_SIZES}
            className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none'
          />
        )}

        {product.isOnSale && (
          <span
            className={`${paragraph.className} absolute left-3 top-3 rounded-sm bg-ivoryWhite/90 px-2.5 py-1 text-xs text-deepMocha`}
          >
            Sale
          </span>
        )}
      </div>

      <div className='pt-4 flex flex-col gap-1.5'>
        <p className='text-[11px] uppercase tracking-[0.25em] text-warmTaupe'>
          {product.category.replace(/_/g, " ")}
        </p>

        <h3
          className={`${title.className} text-base md:text-lg leading-snug text-deepMocha capitalize transition-colors group-hover:text-black`}
        >
          {product.productName}
        </h3>

        <p className={`${paragraph.className} text-sm text-black/70`}>
          {formattedValue(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
