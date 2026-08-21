"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import DesktopMode from "./DesktopMode/DesktopMode";
import MobileMode from "./MobileMode/MobileMode";

const Navigation = () => {
  const links = [
    { link: "/aboutus", text: "Our Story" },
    // { link: "/contact", text: "Contact" },
    { link: "/collection", text: "Collection" },
    { link: "/brides", text: "Brides" },
    { link: "/shop", text: "Shop" },
  ];

  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scroll
          ? " py-2 sticky top-0 z-40 bg-offwhite drop-shadow-md ease-in-out duration-300"
          : " py-5 sticky top-0 z-40 bg-offwhite drop-shadow-none ease-in-out duration-300"
      }
    >
      <DesktopMode links={links} pathname={pathname} />
      <MobileMode links={links} />
    </div>
  );
};

export default Navigation;
