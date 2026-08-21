"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import InputField from "./InputField";
import { Spinner } from "@/components/ui/spinner";
import { clientSignupSchema, ClientSignupType } from "@/zodSchemas/signupForm";
import { signupUser } from "@/actions/signup";

interface SignupFormProps {
  email: string | undefined | null;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  provider: string | undefined | null;
}

const SignupForm = ({
  email,
  firstName,
  lastName,
  provider,
}: SignupFormProps) => {
  const methods = useForm<ClientSignupType>({
    resolver: zodResolver(clientSignupSchema),
    defaultValues: {
      title: "",
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      phoneNumber: "",
      email: email ?? "",
      provider: provider ?? "",
    },
  });

  const onSubmit = async (data: ClientSignupType) => {
    const result = await signupUser(data);

    if (result.success) {
      await signIn(provider!, {
        callbackUrl: "/",
      });
      return;
    }

    if (!result.success) {
      methods.setError("root.serverError", { message: result.error });
      return;
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='flex flex-col gap-5 text-left'
      >
        {methods.formState.errors.root?.serverError?.message && (
          <div className='rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800'>
            <strong className='font-medium'>Submission failed:</strong>
            <span className='ml-1'>
              {methods.formState.errors.root.serverError.message}
            </span>
          </div>
        )}

        {/* provider hiddend input */}
        <InputField type='hidden' name='provider' placeholder='provider' />

        {/* Title */}
        <InputField name='title' placeholder='Title (e.g., Ms., Mrs.)' />

        {/* First + Last Name */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <InputField name='firstName' placeholder='First Name' />

          <InputField name='lastName' placeholder='Last Name' />
        </div>

        {/* Email  + Phone*/}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <InputField name='email' placeholder='Email Address' />

          <InputField name='phoneNumber' placeholder='Phone Number' />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={methods.formState.isSubmitting}
          className='w-full bg-mocha text-offwhite rounded-md py-3 text-sm tracking-wide hover:bg-deepMocha transition'
        >
          {methods.formState.isSubmitting ? (
            <span className='flex justify-center items-center gap-2'>
              <Spinner />
              Creating Account
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
