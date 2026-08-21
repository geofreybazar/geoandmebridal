import { Dispatch, SetStateAction, useEffect } from "react";

import { FormProvider, useForm } from "react-hook-form";
import _ from "lodash";
import { ClientUser } from "@/types/client";

import InputField from "./InputField";
import {
  updateClientContactSchema,
  UpdateClientContactType,
} from "@/zodSchemas/clients";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { updateClientProfile } from "@/actions/clients";

interface UpdateContactProps {
  user: ClientUser;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const UpdateContact = ({ user, setOpen }: UpdateContactProps) => {
  const closeModal = () => {
    methods.reset();
    setOpen(false);
  };

  const defaultValues = {
    address: user.address,
    phoneNumber: user.phoneNumber,
  };

  const methods = useForm<UpdateClientContactType>({
    resolver: zodResolver(updateClientContactSchema),
    defaultValues,
  });

  const onSubmit = async (data: UpdateClientContactType) => {
    if (_.isEqual(data, defaultValues)) {
      setOpen(false);
      return;
    }
    const res = await updateClientProfile(user._id, data);

    if (res?.success) {
      setOpen(false);
    } else {
      let errorMessage = "Something went wrong";

      if ("errors" in res && res.errors?.formErrors?.length) {
        errorMessage = res.errors.formErrors[0];
      } else if ("error" in res && res.error) {
        errorMessage = res.error;
      }

      methods.setError("root", {
        message: errorMessage,
      });
    }
  };

  useEffect(() => {
    methods.reset(defaultValues);
  }, [user]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='space-y-4 p-2 overflow-auto'
      >
        <InputField name='phoneNumber' label='Phone Number' />
        <InputField name='address' label='Address' />

        {methods.formState.errors.root && (
          <div className='text-center text-red-600 '>
            {methods.formState.errors.root.message}
          </div>
        )}

        <DialogFooter>
          <Button
            type='button'
            variant='outline'
            onClick={() => closeModal()}
            disabled={methods.formState.isSubmitting}
          >
            Cancel
          </Button>
          <Button type='submit' disabled={methods.formState.isSubmitting}>
            {methods.formState.isSubmitting ? (
              <>
                <Loader2 className='w-4 h-4 mr-2 animate-spin' /> Saving...
              </>
            ) : (
              "Update Profile"
            )}
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default UpdateContact;
