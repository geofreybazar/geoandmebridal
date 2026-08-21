import { ReactNode } from "react";
import { paragraph } from "@/utils/fonts/fonts";

const MochaContainedButton = ({
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
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MochaContainedButton;
