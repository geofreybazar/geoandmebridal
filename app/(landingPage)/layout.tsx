import type { Metadata } from "next";

import Navigation from "@/components/SharedComponents/Navigation/Navigation";
import Footer from "@/components/SharedComponents/Footer/Footer";
import BreadCrumbsComponent from "@/components/SharedComponents/BreadCrumbsComponent/BreadCrumbsComponent";

export const metadata: Metadata = {
  title: "GEO + Me Bridal",
  description:
    "GEO and Me Bridal creates luxurious, bespoke wedding gowns and full entourage attire in the Philippines. Experience elegance with custom designs tailored to your dream wedding.",
  keywords:
    "wedding gowns, bridal couture, bespoke wedding dresses, custom wedding gowns, Philippines bridal shop, entourage attire, luxury bridal wear",
  authors: [{ name: "Medy G Magsipoc-Bazar" }, { name: "Geofrey R Bazar" }],
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-linear-to-b from-offwhite to-champagneBeige'>
      <Navigation />
      <BreadCrumbsComponent />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
