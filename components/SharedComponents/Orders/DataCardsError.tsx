import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FallbackProps, getErrorMessage } from "react-error-boundary";

const DataCardsError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className='space-y-6'>
      <Card className='rounded-2xl'>
        <CardContent className='flex flex-col items-center justify-center py-10 text-center space-y-4'>
          {/* Title */}
          <p className='text-lg font-semibold text-destructive'>
            Failed to load orders
          </p>

          {/* Description */}
          <p className='text-sm text-muted-foreground max-w-md'>
            Something went wrong while fetching your orders. This could be a
            network issue or a server problem.
          </p>

          <p className='text-xs text-muted-foreground'>
            {getErrorMessage(error)}
          </p>

          {/* Retry button */}
          <Button onClick={resetErrorBoundary} className='rounded-xl'>
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCardsError;
