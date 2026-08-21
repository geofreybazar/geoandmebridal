import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn, providerMap } from "@/auth";
import Facebook from "@/icons/Facebook";
import Google from "@/icons/Google";

const SIGNIN_ERROR_URL = "/error";

const providerIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook />,
  google: <Google />,
};

const LoginButtons = () => {
  return (
    <div className='flex flex-col gap-4'>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                redirectTo: "/auth/redirect",
              });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <button
            type='submit'
            className='w-full flex items-center justify-center gap-3 border border-black/10 rounded-md py-3 px-4 bg-white hover:bg-black/5 transition'
          >
            <span className='w-6'>{providerIcons[provider.id]}</span>

            <span className='text-sm font-medium text-black'>
              Continue with {provider.name}
            </span>
          </button>
        </form>
      ))}
    </div>
  );
};

export default LoginButtons;
