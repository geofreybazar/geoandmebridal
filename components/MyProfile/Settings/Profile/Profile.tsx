import { Card, CardContent } from "@/components/ui/card";
import { ClientUser } from "@/types/client";

const Profile = ({ user }: { user: ClientUser }) => {
  return (
    <Card>
      <CardContent className='space-y-6'>
        <h2 className='font-medium text-lg'>Profile Information</h2>

        <div className='space-y-4'>
          <div>
            <p className='text-xs text-muted-foreground'>First Name</p>
            <p className='text-sm mt-1'>{user.firstName}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Last Name</p>
            <p className='text-sm mt-1'>{user.lastName}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Email</p>
            <p className='text-sm mt-1'>{user.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
