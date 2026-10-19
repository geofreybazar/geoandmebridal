import Navigation from "@/components/SharedComponents/Navigation/Navigation";
import Footer from "@/components/SharedComponents/Footer/Footer";
import NotFoundContent from "@/components/SharedComponents/NotFoundContent";

// URLs that match no page: same look as the public site
export default function NotFound() {
  return (
    <div className='bg-linear-to-b from-offwhite to-champagneBeige'>
      <Navigation />
      <NotFoundContent />
      <Footer />
    </div>
  );
}
