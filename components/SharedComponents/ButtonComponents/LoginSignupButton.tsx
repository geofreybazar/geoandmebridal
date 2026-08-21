import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

import { User } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const LoginSignupButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      {!session ? (
        <button className='text-mocha text-2xl' onClick={() => signIn()}>
          <User className='rounded-full h-10 w-10 p-2 cursor-pointer text-mocha hover:bg-mocha hover:text-offwhite transition' />
        </button>
      ) : (
        <Link href={"/myprofile"}>
          <div className='w-8 h-8 relative cursor-pointer'>
            <Image
              className='rounded-full'
              src={session.user.image || "/default-profile.png"}
              alt='Profile'
              sizes='(max-width: 600px) 32px, (max-width: 600px) 40px, 50px'
              fill
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default LoginSignupButton;
