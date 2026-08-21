import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface SheetContentComponentProps {
  links: {
    link: string;
    text: string;
  }[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NativeNavigations = ({ links, setOpen }: SheetContentComponentProps) => {
  return (
    <nav className='flex-1 px-4 flex flex-col'>
      {links.map((item) => (
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
  );
};

export default NativeNavigations;
