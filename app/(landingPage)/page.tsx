import dynamic from "next/dynamic";

import AboutMe from "@/components/LandingPage/AboutMe/AboutMe";
import Hero from "@/components/LandingPage/Hero";
import Testimonials from "@/components/LandingPage/Testimonials/Testimonials";

const Collection = dynamic(() => import("@/components/LandingPage/Collection"));
const RealBrides = dynamic(() => import("@/components/LandingPage/RealBrides"));

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Collection />
      <RealBrides />
      <Testimonials />
      <AboutMe />
    </>
  );
};

export default LandingPage;
