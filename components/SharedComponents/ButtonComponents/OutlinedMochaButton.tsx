import { paragraph } from "@/utils/fonts/fonts";
import { ReactNode } from "react";

const OutlinedMochaButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className={`
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
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedMochaButton;
