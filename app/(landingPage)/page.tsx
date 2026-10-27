import type { Metadata } from "next";
import dynamic from "next/dynamic";

import AboutMe from "@/components/LandingPage/AboutMe/AboutMe";
import Hero from "@/components/LandingPage/Hero";
import Testimonials from "@/components/LandingPage/Testimonials/Testimonials";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const Collection = dynamic(() => import("@/components/LandingPage/Collection"));
const RealBrides = dynamic(() => import("@/components/LandingPage/RealBrides"));

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Collection />
      <RealBrides />
      <Testimonials />
      <AboutMe />
    </main>
  );
};

export default LandingPage;
