const Header = () => {
  return (
    <div className='text-center space-y-4'>
      <h1 className='font-serif text-3xl font-light'>Payment Receipt</h1>

      <div className='w-16 h-[2px] bg-champagneGold mx-auto' />

      <p className='text-muted-foreground text-sm'>
        Thank you for your payment. Here are your transaction details.
      </p>
    </div>
  );
};

export default Header;
