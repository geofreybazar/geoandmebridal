import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaymentRequest } from "@/types/paymentRequest";

const Footer = ({ payment }: { payment: PaymentRequest }) => {
  const isPaid = payment.status === "paid";

  return (
    <div className='border-t border-porcelainBeige pt-5 flex items-center justify-between'>
      {/* Left Text */}
      <p className='text-xs text-muted-foreground'>
        Secure payment via PayMongo
      </p>

      {/* Right Action */}
      {isPaid ? (
        <Button variant='outline' size='sm' className='rounded-xl px-4'>
          <Link href={`/myprofile/paymentorders/receipt/${payment._id}`}>
            View Receipt
          </Link>
        </Button>
      ) : (
        <Button
          size='sm'
          className='rounded-xl px-4 bg-warmTaupe hover:bg-deepMocha text-white'
        >
          <Link href={`/myprofile/paymentorders/payment/${payment._id}`}>
            Pay Now
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Footer;
