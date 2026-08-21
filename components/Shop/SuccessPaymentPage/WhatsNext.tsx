import { PackageCheck, UserRound } from "lucide-react";

const WhatsNext = () => {
  return (
    <div className='rounded-xl bg-muted/40 px-6 py-6 text-left'>
      <h2 className='mb-5 font-serif text-xl font-medium'>
        What happens next?
      </h2>

      <div className='space-y-5'>
        <div className='flex gap-4'>
          <PackageCheck className='mt-0.5 size-5 shrink-0 text-warmTaupe' />

          <div>
            <p className='font-medium'>Order preparation</p>

            <p className='mt-1 text-sm text-muted-foreground'>
              Our team will prepare your order for your selected pickup or
              delivery method.
            </p>
          </div>
        </div>

        <div className='flex gap-4'>
          <UserRound className='mt-0.5 size-5 shrink-0 text-warmTaupe' />

          <div>
            <p className='font-medium'>Track your order</p>

            <p className='mt-1 text-sm text-muted-foreground'>
              Visit your Profile page anytime to check the latest status of your
              order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNext;
