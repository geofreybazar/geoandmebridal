"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const BreadCrumbsComponent = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  // Extract segments and remove empty strings
  const segments = pathname.split("/").filter(Boolean);

  // Helper fn to build href for each segment
  const buildHref = (index: number) => {
    return "/" + segments.slice(0, index + 1).join("/");
  };

  return (
    <Breadcrumb className='px-6 xl:px-36 2xl:px-52 pt-10 pb-6'>
      <BreadcrumbList>
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/' className='hover:text-black/80 transition'>
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Dynamic Segments */}
        {segments.map((segment, index) => {
          const href = buildHref(index);
          const isLast = index === segments.length - 1;
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <span key={href} className='flex items-center'>
              <BreadcrumbSeparator>
                <ChevronRight className='h-4 w-4 text-black/30' />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className='text-black font-medium'>
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className='hover:text-black/80 capitalize transition'
                    >
                      {label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbsComponent;
