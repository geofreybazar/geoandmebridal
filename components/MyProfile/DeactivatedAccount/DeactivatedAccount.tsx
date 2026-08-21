import { Mail, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DeactivatedAccount = () => {
  return (
    <div className='flex items-center justify-center min-h-[60vh] px-4'>
      <Card className='max-w-md w-full text-center'>
        <CardHeader>
          {/* Icon */}
          <div className='flex justify-center mb-2'>
            <div className='bg-yellow-100 text-yellow-600 p-3 rounded-full'>
              <AlertTriangle className='h-6 w-6' />
            </div>
          </div>

          <CardTitle>Account Inactive</CardTitle>

          <CardDescription>
            Your account is currently inactive. You may not be able to access
            your dashboard or ongoing services.
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-3'>
          <Button asChild className='w-full flex items-center gap-2'>
            <a href='mailto:support@yourdomain.com'>
              <Mail className='h-4 w-4' />
              Contact Support
            </a>
          </Button>

          <p className='text-xs text-muted-foreground'>
            Or wait for your account to be reactivated.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeactivatedAccount;
