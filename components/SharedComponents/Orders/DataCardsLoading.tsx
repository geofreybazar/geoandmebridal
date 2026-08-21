import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DataCardsLoading = () => {
  return (
    <div className='space-y-6'>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className='rounded-2xl'>
          <CardContent className='flex justify-between items-center'>
            {/* Left */}
            <div className='space-y-2'>
              <Skeleton className='h-4 w-40' /> {/* reference number */}
              <Skeleton className='h-3 w-56' /> {/* item */}
              <Skeleton className='h-3 w-32' /> {/* date */}
            </div>
            {/* Right */}
            <Skeleton className='h-9 w-20 rounded-xl' /> {/* button */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataCardsLoading;
