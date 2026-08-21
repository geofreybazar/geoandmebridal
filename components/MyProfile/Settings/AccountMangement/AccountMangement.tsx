"use client";

import { useState } from "react";
import DialogComponent from "@/components/SharedComponents/DialogComponent";
import { Card, CardContent } from "@/components/ui/card";
import DeactivateAccount from "./DeactivateAccount";

const AccountMangement = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);

  const modalOnChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Card>
      <CardContent className='space-y-6'>
        <h2 className='font-medium text-lg text-red-600'>Account Management</h2>

        <p className='text-sm text-muted-foreground'>
          If you wish to deactivate your account, please click the button below.
        </p>

        <DialogComponent
          open={open}
          buttonLabel={"Deactivate Account"}
          dialogTitle={"Deactivate Account"}
          dialogDescription={
            "This will deactivate your account and restrict access to your data. Do you want to continue?"
          }
          modalOnChange={modalOnChange}
        >
          <DeactivateAccount userId={userId} setOpen={setOpen} />
        </DialogComponent>
      </CardContent>
    </Card>
  );
};

export default AccountMangement;
