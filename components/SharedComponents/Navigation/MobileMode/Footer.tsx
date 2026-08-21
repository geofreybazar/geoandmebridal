import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { paragraph } from "@/utils/fonts/fonts";

import { SheetFooter } from "@/components/ui/sheet";

interface FooterProps {
  session: Session | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Footer = ({ session, setOpen }: FooterProps) => {
  return (
    <SheetFooter className='pt-0'>
      <Button
        variant='outline'
        className='
    w-full
    border-[#C9B38C]
    text-[#9C8577]
    hover:bg-[#F8F3EC]
  '
      >
        Book Appointment
      </Button>

      {session ? (
        <Button
          variant='ghost'
          className='
      text-red-600
      hover:bg-red-50
    '
          onClick={() => signOut()}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant='outline'
          className='
      w-full
      border-champagneGold
      text-deepMocha
    '
          onClick={() => signIn()}
        >
          <User className='mr-2 h-4 w-4' />
          Login
        </Button>
      )}
    </SheetFooter>
  );
};

export default Footer;
