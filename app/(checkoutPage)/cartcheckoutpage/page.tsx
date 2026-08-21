import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

import logo from "@/assets/GMB.svg";
import CheckOutPage from "@/components/CartCheckOutPage/CheckOutPage";

const CartCheckOutPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className='space-y-5 md:space-y-2'>
      <header className='flex items-center px-10 py-5 '>
        <div className='h-12 w-full lg:w-auto lg:h-16 pr-8'>
          <Link href='/'>
            <Image
              className='h-16 w-auto'
              src={logo}
              alt='Geo and Me Bridal Official logo'
            />
          </Link>
        </div>
      </header>

      <div className='text-center px-2 md:px-6 xl:px-22 2xl:px-36 pb-10'>
        <CheckOutPage />
      </div>
    </div>
  );
};

export default CartCheckOutPage;
