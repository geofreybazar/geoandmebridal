import { useSession } from "next-auth/react";

import { Spinner } from "@/components/ui/spinner";

import { SheetContent } from "@/components/ui/sheet";

import { Dispatch, SetStateAction } from "react";
import NativeNavigations from "./NativeNavigations";
import Footer from "./Footer";
import UserNavigations from "./UserNavigations";
import Header from "./Header";

interface Links {
  link: string;
  text: string;
}

interface SheetContentComponentProps {
  links: Links[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SheetContentComponent = ({
  links,
  setOpen,
}: SheetContentComponentProps) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <SheetContent className='w-full flex flex-col'>
      {/* Sheet Header */}
      <Header setOpen={setOpen} />

      {/* Navigations */}
      <div className='flex-1 overflow-y-auto'>
        {/* Default Navigations */}
        <NativeNavigations links={links} setOpen={setOpen} />

        {/* User Naviations */}
        {session && <UserNavigations session={session} setOpen={setOpen} />}
      </div>

      {/* Sheet Footer */}
      <Footer session={session} setOpen={setOpen} />
    </SheetContent>
  );
};

export default SheetContentComponent;
