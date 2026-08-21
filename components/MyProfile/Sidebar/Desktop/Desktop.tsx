"use client";

import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import SidebarSkeleton from "./SidebarSkeleton";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const navItems = [
  { name: "Dashboard", href: "/myprofile" },
  { name: "My Couture Orders", href: "/myprofile/myorders" },
  { name: "My Shop Orders", href: "/myprofile/myshoporders" },
  { name: "My Appointments", href: "/myprofile/myappointments" },
  { name: "Payment Orders", href: "/myprofile/paymentorders" },
  { name: "Account Settings", href: "/myprofile/settings" },
];

const Desktop = () => {
  const pathname = usePathname();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <SidebarSkeleton />;
  }

  if (!session) {
    return null;
  }

  const user = session.user;

  return (
    <Card className='hidden lg:flex w-72 bg-white border-r border-black/5 px-8 py-12 flex-col justify-between min-h-150'>
      <div>
        <div className='mb-14 text-center'>
          <div className='w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4'>
            <Image
              src={user.image!}
              alt={`${user.firstName} ${user.lastName}`}
              width={80}
              height={80}
              className='rounded-full'
            />
          </div>

          <h2 className='font-serif text-lg tracking-wide'>{user.name}</h2>
        </div>

        {/* Navigation */}
        <nav className='space-y-6 text-xs tracking-[0.2em] uppercase'>
          {navItems.map((item) => {
            const isActive =
              item.href === "/myprofile"
                ? pathname === "/myprofile"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "block transition duration-200 relative",
                  isActive
                    ? "text-warmTaupe font-medium"
                    : "text-gray-500 hover:text-warmTaupe",
                )}
              >
                {item.name}

                {isActive && (
                  <span className='absolute -left-4 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-warmTaupe' />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Logout */}

      <button
        className='text-left text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-red-500 transition'
        onClick={() =>
          signOut({
            redirectTo: "/",
          })
        }
      >
        Logout
      </button>
    </Card>
  );
};

export default Desktop;
