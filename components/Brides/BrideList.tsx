"use client";

import { useRef, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { title } from "@/utils/fonts/fonts";
import useGetBrides from "@/hooks/brides/useGetBrides";

const BrideList = () => {
  const { infiniteBrides, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetBrides();
  const brides = infiniteBrides?.pages.flatMap((page) => page.data) ?? [];

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = loadMoreRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10'>
      {brides.map((bride) => {
        const cover = bride.photos[0];

        return (
          <Link
            key={bride._id}
            href={`/brides/${bride._id}`}
            className='group block'
          >
            <div className='relative aspect-[3/4] rounded-md overflow-hidden'>
              <Image
                src={cover.imageInfo.url}
                alt={`Bride ${bride.bridesName}`}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />

              <div className='absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500' />

              <div className='absolute inset-0 flex flex-col justify-end p-6 text-offwhite'>
                <h3 className={`${title.className} text-2xl capitalize`}>
                  {/* get only 1st name */}
                  {bride.bridesName.split(" ")[0]}
                </h3>

                {/* removing wedding date year */}
                {/* <p className='text-xs tracking-wide opacity-80 mt-1'>
                  {new Date(bride.weddingDate).getFullYear()}
                  {bride.details?.venue ? ` • ${bride.details.venue}` : ""}
                </p> */}
              </div>
            </div>
          </Link>
        );
      })}

      {hasNextPage && (
        <div ref={loadMoreRef} className='h-10'>
          {isFetchingNextPage && "Loading..."}
        </div>
      )}
    </div>
  );
};

export default BrideList;
