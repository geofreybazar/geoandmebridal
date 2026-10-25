import Link from "next/link";

import { Button } from "@/components/ui/button";

const Actions = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
      <Button
        asChild
        size='lg'
        className='bg-warmTaupe hover:bg-deepMocha text-white rounded-xl'
      >
        <Link href='/myprofile'>Back to Dashboard</Link>
      </Button>

      <Button asChild size='lg' variant='outline' className='rounded-xl'>
        <Link href='/myprofile/paymentorders'>View Payment History</Link>
      </Button>
    </div>
  );
};

export default Actions;
