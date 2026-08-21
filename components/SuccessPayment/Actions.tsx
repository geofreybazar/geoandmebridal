import Link from "next/link";

import { Button } from "@/components/ui/button";

const Actions = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
      <Link href='/myprofile'>
        <Button
          size='lg'
          className='bg-warmTaupe hover:bg-deepMocha text-white rounded-xl'
        >
          Back to Dashboard
        </Button>
      </Link>

      <Link href='/myprofile/paymentorders'>
        <Button size='lg' variant='outline' className='rounded-xl'>
          View Payment History
        </Button>
      </Link>
    </div>
  );
};

export default Actions;
