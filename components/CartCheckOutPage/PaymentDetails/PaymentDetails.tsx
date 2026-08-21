import { useSession } from "next-auth/react";
import useGetClientCart from "@/hooks/cart/useGetClientCart";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import Items from "./Items";
import TotalFee from "./TotalFee";

const PaymentDetails = () => {
  const { data: session, status } = useSession();

  const { cartItems: fetchedCartItems, isLoading } = useGetClientCart(
    session?.user.id || "",
  );

  const cartItems = fetchedCartItems?.items ?? [];

  if (isLoading) {
    return (
      <Card>
        <CardContent>Loading order summary...</CardContent>
      </Card>
    );
  }

  return (
    <Card className='w-full'>
      <CardContent className='p-4 md:p-6'>
        <div className='mb-4'>
          <p className='text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#9C8577]'>
            Order Summary
          </p>

          <h2 className='mt-2 font-serif text-xl sm:text-2xl text-[#2C211D]'>
            Your Selection
          </h2>
        </div>

        <div className='rounded-2xl border p-3 sm:p-4 lg:p-6'>
          <ScrollArea>
            <Items cartItems={cartItems} />
          </ScrollArea>

          <div className='mt-4 border-t pt-4'>
            <TotalFee
              cartTotalPrice={fetchedCartItems?.totalPrice}
              cartItems={cartItems}
            />
          </div>
        </div>

        <div className='mt-6 space-y-2'>
          <Button
            size='lg'
            className='h-12 sm:h-14 w-full rounded-xl bg-warmTaupe text-white hover:bg-deepMocha'
          >
            Pay Securely
          </Button>

          <p className='text-center text-xs text-muted-foreground'>
            Secure payment powered by PayMongo.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentDetails;
