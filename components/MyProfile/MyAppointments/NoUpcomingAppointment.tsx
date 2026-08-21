import Link from "next/link";
import { Button } from "@/components/ui/button";

const NoUpcomingAppointment = () => {
  return (
    <div className='text-center py-10 space-y-4'>
      <p className='text-muted-foreground'>
        You have no scheduled appointments yet.
      </p>

      <Button asChild className='bg-warmTaupe hover:bg-deepMocha text-white'>
        <Link href='/myprofile/bookconsultation'>Book Consultation</Link>
      </Button>
    </div>
  );
};

export default NoUpcomingAppointment;
