import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/GMB.svg";

import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <SheetHeader className='space-y-2'>
      <SheetTitle>
        <Link href='/' onClick={() => setOpen(false)}>
          <Image
            className='h-12 w-auto'
            src={logo}
            alt='Geo and Me Bridal Official logo'
          />
        </Link>
      </SheetTitle>
      <SheetDescription className='sr-only'>
        GEO + Me Bridal mobile navigation menu
      </SheetDescription>
      <p className='text-center text-xs tracking-[0.35em] uppercase text-muted-foreground'>
        Luxury Bridal Atelier
      </p>
    </SheetHeader>
  );
};

export default Header;
