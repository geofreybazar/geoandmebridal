import { paragraph } from "@/utils/fonts/fonts";
import { ReactNode } from "react";
import Link from "next/link";

const OutlinedMochaButton = ({
  onClick,
  href,
  children,
}: {
  onClick?: () => void;
  // Renders a link styled as this button (never a <button> inside a link)
  href?: string;
  children: ReactNode;
}) => {
  const className = `
        ${paragraph.className}
        w-full
        rounded-md
        border border-champagneGold
        px-10 py-4
        text-base
        text-champagneGold
        transition-all duration-300 ease-out
        hover:bg-mocha
        hover:text-offwhite
        hover:border-mocha
        hover:-translate-y-0.5
      `;

  if (href) {
    return (
      <Link href={href} className={`${className} block text-center`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default OutlinedMochaButton;
