import Link from "next/link";
import { CircleX, ShoppingBag, CreditCard } from "lucide-react";

const CancelledShopPaymentPage = () => {
  const message =
    "Your payment was not completed, and no purchase has been confirmed. Your items may still be available in your cart, so you can review your order and try again when you're ready.";

  return (
    <section className='mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16'>
      <div className='space-y-10 text-center'>
        {/* Cancel Icon */}
        <div className='flex justify-center'>
          <div className='flex size-20 items-center justify-center rounded-full bg-muted'>
            <CircleX className='size-12 text-muted-foreground' />
          </div>
        </div>

        {/* Header */}
        <div className='space-y-4'>
          <h1 className='font-serif text-4xl font-light'>Payment Cancelled</h1>

          <div className='w-16 h-[2px] bg-champagneGold mx-auto' />

          <p className='text-muted-foreground max-w-xl mx-auto'>{message}</p>
        </div>

        {/* Payment Status */}
        <div className='rounded-xl border bg-background px-6 py-6'>
          <p className='text-sm text-muted-foreground'>Payment Status</p>

          <p className='mt-1 text-lg font-medium'>Payment Not Completed</p>
        </div>

        {/* What's Next */}
        <div className='rounded-xl bg-muted/40 px-6 py-6 text-left'>
          <h2 className='mb-5 font-serif text-xl font-medium'>
            What can you do next?
          </h2>

          <div className='space-y-5'>
            <div className='flex gap-4'>
              <CreditCard className='mt-0.5 size-5 shrink-0 text-warmTaupe' />

              <div>
                <p className='font-medium'>Try your payment again</p>

                <p className='mt-1 text-sm text-muted-foreground'>
                  Return to checkout to review your order details and proceed
                  with payment again.
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <ShoppingBag className='mt-0.5 size-5 shrink-0 text-warmTaupe' />

              <div>
                <p className='font-medium'>Continue shopping</p>

                <p className='mt-1 text-sm text-muted-foreground'>
                  You can return to our shop and browse other Ready-to-Wear
                  pieces from our collections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className='flex flex-col justify-center gap-3 sm:flex-row'>
          <Link
            href='/shop'
            className='inline-flex h-11 items-center justify-center rounded-md border px-6 text-sm font-medium transition-colors hover:bg-muted'
          >
            <ShoppingBag className='mr-2 size-4' />
            Continue Shopping
          </Link>
        </div>

        <p className='text-xs text-muted-foreground'>
          If you cancelled the payment by mistake, you can return to checkout
          and try again.
        </p>
      </div>
    </section>
  );
};

export default CancelledShopPaymentPage;
