import Navigation from "@/components/SharedComponents/Navigation/Navigation";
import Footer from "@/components/SharedComponents/Footer/Footer";
import BreadCrumbsComponent from "@/components/SharedComponents/BreadCrumbsComponent/BreadCrumbsComponent";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-linear-to-b from-offwhite to-champagneBeige'>
      <Navigation />
      <BreadCrumbsComponent />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
