import Image from "next/image";
import Link from "next/link";

import OutlinedMochaButton from "../../ButtonComponents/OutlinedMochaButton";
import LoginSignupButton from "../../ButtonComponents/LoginSignupButton";

import { paragraph } from "@/utils/fonts/fonts";
import logo from "@/assets/GMB.svg";
import OpenCart from "./OpenCart";

interface Links {
  link: string;
  text: string;
}

interface DesktopModeProps {
  links: Links[];
  pathname: string;
}

const DesktopMode = ({ links, pathname }: DesktopModeProps) => {
  return (
    <div
      className={`${paragraph.className} hidden lg:block lg:flex items-center grow justify-between mx-12 xl:mx-36 2xl:mx-52`}
    >
      <div className='flex lg:gap-8 xl:gap-10 items-center'>
        <div className='h-12 w-full lg:w-auto lg:h-16 pr-8'>
          <Link href='/'>
            <Image
              className='h-16 w-auto'
              src={logo}
              alt='Geo and Me Bridal Official logo'
              priority
            />
          </Link>
        </div>
      </div>

      <div className='flex gap-10'>
        {links.map((link, index) => (
          <Link key={index} href={link.link}>
            <p
              className={`border-0 cursor-pointer text-mocha text-sm tracking-wide uppercase ${
                pathname.includes(link.link) ? "border-b-2 border-mocha" : ""
              }`}
            >
              {link.text}
            </p>
          </Link>
        ))}
      </div>

      <div className='flex gap-5 lg:text-lg items-center h-full'>
        <OpenCart />
        <LoginSignupButton />
        <Link href='/appointment'>
          <OutlinedMochaButton>Book Appointment</OutlinedMochaButton>
        </Link>
      </div>
    </div>
  );
};

export default DesktopMode;
