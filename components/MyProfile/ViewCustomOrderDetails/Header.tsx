import { Card, CardContent } from "@/components/ui/card";

const Header = () => {
  return (
    <Card>
      <CardContent>
        <h1 className='font-serif text-3xl font-light'>Your Couture Order</h1>

        <p className='text-muted-foreground mt-4'>
          We are carefully preparing your pieces for your special day.
        </p>
      </CardContent>
    </Card>
  );
};

export default Header;
