import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { paragraph } from "@/utils/fonts/fonts";
import { ProductType } from "@/types/shop";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Card className='bg-ivoryWhite border border-black/5 shadow-sm group p-0'>
      <CardContent className='p-0'>
        <Link href={`/shop/${product.tag}/${product.slug}`} className='block'>
          <div className='relative aspect-[3/4] overflow-hidden rounded-t-md'>
            <Image
              src={product.images[0].imageInfo.url}
              alt={product.productName}
              fill
              sizes='(max-width: 768px) 100vw, 33vw'
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
          </div>

          <div className='p-6 flex flex-col gap-3'>
            <h3
              className={`${paragraph.className} text-base font-medium text-black`}
            >
              {product.productName}
            </h3>

            <p className='text-sm text-black/70'>
              ₱{product.price.toLocaleString()}
            </p>

            <Button
              variant='outline'
              className='border-black text-black hover:bg-black hover:text-white transition mt-2'
            >
              View Product
            </Button>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
