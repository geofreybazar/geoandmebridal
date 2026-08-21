import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { deactivateAccount } from "@/actions/clients";

type State = {
  success: boolean;
  message?: string;
};

const initialState: State = {
  success: false,
};

interface DeactivateAccountProps {
  userId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface DeactivateAccountProps {
  userId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DeactivateAccount = ({ userId, setOpen }: DeactivateAccountProps) => {
  const [state, formAction, pending] = useActionState(
    deactivateAccount,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      signOut({
        redirectTo: "/",
      });
    }
  }, [state.success, setOpen]);

  return (
    <form action={formAction} className='space-y-4'>
      <input type='hidden' name='userId' value={userId} />

      {state.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}

      <div className='flex justify-end gap-2'>
        <button
          type='button'
          onClick={() => setOpen(false)}
          className='px-4 py-2 border rounded-md'
        >
          Cancel
        </button>

        <button
          type='submit'
          disabled={pending}
          className='px-4 py-2 bg-red-600 text-white rounded-md disabled:opacity-50'
        >
          {pending ? "Deactivating..." : "Deactivate Account"}
        </button>
      </div>
    </form>
  );
};

export default DeactivateAccount;
