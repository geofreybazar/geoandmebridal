import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import logo from "@/assets/GMB.svg";

import { Menu, ShoppingCart } from "lucide-react";
import SheetContentComponent from "./SheetContentComponent";

import CartSideMenu from "@/components/CartSideMenu/CartSideMenu";
import { useState } from "react";
import CartButton from "../../ButtonComponents/CartButton";
import CartItemQuantity from "../DesktopMode/CartItemQuantity";

interface Links {
  link: string;
  text: string;
}

interface MobileModeProps {
  links: Links[];
}

const MobileMode = ({ links }: MobileModeProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='lg:hidden w-full px-5 flex justify-between items-center'>
      <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <SheetTrigger asChild>
          <button aria-label='Open menu'>
            <Menu className='w-5 h-5' />
          </button>
        </SheetTrigger>
        <SheetContentComponent links={links} setOpen={setOpen} />
      </Sheet>

      <Link href='/'>
        <Image
          className='h-14 w-auto'
          src={logo}
          alt='Geo and Me Bridal Official logo'
          priority
        />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button aria-label='Open menu' className='relative'>
            <CartButton />
            <CartItemQuantity />
          </button>
        </SheetTrigger>
        <CartSideMenu />
      </Sheet>
    </div>
  );
};

export default MobileMode;
