const Header = ({ message }: { message: string }) => {
  return (
    <div className='space-y-4'>
      <h1 className='font-serif text-4xl font-light'>Payment Successful</h1>

      <div className='w-16 h-[2px] bg-champagneGold mx-auto' />

      <p className='text-muted-foreground max-w-xl mx-auto'>{message}</p>
    </div>
  );
};

export default Header;
