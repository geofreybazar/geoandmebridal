import { ReactNode } from "react";
import Link from "next/link";
import { paragraph } from "@/utils/fonts/fonts";

const MochaContainedButton = ({
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
        rounded-md
        border border-mocha
        bg-mocha
        px-10 py-4
        text-base
        text-offwhite
        transition-all duration-300 ease-out
        hover:bg-mocha/90
        hover:-translate-y-0.5
        w-full
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

export default MochaContainedButton;
