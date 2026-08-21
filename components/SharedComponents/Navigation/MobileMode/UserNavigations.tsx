import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import type { Session } from "next-auth";

interface UserNavigationsProps {
  session: Session;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const userLinks = [
  {
    text: "My Profile",
    link: "/myprofile",
  },
  {
    text: "Couture Orders",
    link: "/myprofile/myorders",
  },
  {
    text: "Shop Orders",
    link: "/myprofile/myshoporders",
  },
  {
    text: "Appointments",
    link: "/myprofile/myappointments",
  },
  {
    text: "Account Settings",
    link: "/myprofile/settings",
  },
  {
    text: "Payment Orders",
    link: "/myprofile/paymentorders",
  },
];

const UserNavigations = ({ session, setOpen }: UserNavigationsProps) => {
  return (
    <div className='p-4'>
      <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>
        Welcome Back
      </p>

      <Link
        href='/myprofile'
        onClick={() => setOpen(false)}
        className='mt-3 flex items-center justify-between gap-4'
      >
        <div>
          <p className='font-medium'>{session.user.name}</p>
        </div>
        <div className='relative h-12 w-12 overflow-hidden rounded-full'>
          <Image
            src={session.user.image || "/default-profile.png"}
            alt='Profile'
            fill
            className='object-cover'
          />
        </div>
      </Link>

      <nav className='flex-1 flex flex-col'>
        {userLinks.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            onClick={() => setOpen(false)}
            className='
        py-2
        border-b
        border-black/5
        text-sm
        font-light
        transition-colors
        hover:text-warmTaupe
      '
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default UserNavigations;
