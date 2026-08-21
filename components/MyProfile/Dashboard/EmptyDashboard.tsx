import Link from "next/link";
import { Button } from "@/components/ui/button";

const EmptyDashboard = () => {
  return (
    <div className='text-center py-16 space-y-8'>
      {/* Message */}
      <h2 className='font-serif text-xl font-light'>
        You have no active orders yet
      </h2>
      <p className='text-muted-foreground'>
        Begin your bridal journey or explore our ready-to-wear collection.
      </p>

      {/* Actions */}
      <div className='flex justify-center gap-4 flex-wrap '>
        {/* Primary CTA */}
        <Button
          asChild
          className='bg-warmTaupe hover:bg-deepMocha text-white p-6'
        >
          <Link href='/myprofile/bookconsultation'>Book Consultation</Link>
        </Button>

        {/* Secondary CTA */}
        <Button asChild variant='outline' className='p-6 border-[#E8E3DB]'>
          <Link href='/shop'>Shop Collection</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyDashboard;
