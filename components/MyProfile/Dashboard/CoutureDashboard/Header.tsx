import CustomSeparator from "@/components/SharedComponents/CustomSeparator";

const Header = () => {
  return (
    <div>
      <h1 className='font-serif text-2xl font-light mb-3'>
        Your Active Couture Orders
      </h1>

      <CustomSeparator />

      <p className='text-muted-foreground mt-3'>
        We are carefully preparing your couture pieces for your special day.
      </p>
    </div>
  );
};

export default Header;
