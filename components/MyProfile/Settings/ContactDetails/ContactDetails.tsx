"use client";

import { useState } from "react";

import DialogComponent from "@/components/SharedComponents/DialogComponent";
import { Card, CardContent } from "@/components/ui/card";
import { ClientUser } from "@/types/client";
import UpdateContact from "./UpdateContact";

const ContactDetails = ({ user }: { user: ClientUser }) => {
  const [open, setOpen] = useState(false);

  const modalOnChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Card>
      <CardContent className='space-y-6'>
        <h2 className='font-medium text-lg'>Contact Details</h2>

        <div className='space-y-4'>
          <div>
            <p className='text-xs text-muted-foreground'>Phone Number</p>
            <p className='text-sm mt-1'>{user.phoneNumber || "Not provided"}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Address</p>
            <p className='text-sm mt-1'>{user.address || "Not provided"}</p>
          </div>
        </div>

        <DialogComponent
          open={open}
          buttonLabel={"Edit Contact Info"}
          dialogTitle={"Edit Contact Info"}
          dialogDescription={"Update your contact information below."}
          modalOnChange={modalOnChange}
        >
          <UpdateContact user={user} setOpen={setOpen} />
        </DialogComponent>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
