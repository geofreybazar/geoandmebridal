import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import DateAndTime from "./DateAndTime/DateAndTime";
import {
  bookAppointmentSchema,
  BookAppointmentType,
} from "@/zodSchemas/appointment";
import FormFooter from "./FormFooter";
import ClientInformation from "./ClientInformation/ClientInformation";
import Review from "./Review/Review";
import { submitNewAppointment } from "@/actions/appointments";
import { ClientUser } from "@/types/client";

interface FormProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  userProfile?: ClientUser;
}

const Form = ({ step, setStep, userProfile }: FormProps) => {
  const router = useRouter();

  const isTherAuthenticatedUser = !!userProfile;

  const methods = useForm<BookAppointmentType>({
    resolver: zodResolver(bookAppointmentSchema),
    defaultValues: {
      clientId: userProfile ? userProfile._id : undefined,
      selectedDate: undefined,
      selectedTime: "",
      fullName: userProfile
        ? `${userProfile.firstName} ${userProfile.lastName}`
        : "",
      address: userProfile?.address || "",
      email: userProfile?.email || "",
      phone: userProfile?.phoneNumber || "",
    },
  });

  const onSubmit = async (data: BookAppointmentType) => {
    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "submit" },
    );

    const newData = { ...data, recaptchaToken: token };

    const result = await submitNewAppointment(newData);

    if (result.success) {
      router.push("/appoinmentsuccess");
      return;
    }

    if (!result.success) {
      methods.setError("root.serverError", { message: result.error });
      return;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
        {/* error message */}
        {methods.formState.errors.root?.serverError?.message && (
          <div className='rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800'>
            <strong className='font-medium'>Submission failed:</strong>
            <span className='ml-1'>
              {methods.formState.errors.root.serverError.message}
            </span>
          </div>
        )}

        {/* Steps  */}
        {step === 0 && (
          <>
            <DateAndTime />
          </>
        )}
        {step === 1 && (
          <ClientInformation
            isTherAuthenticatedUser={isTherAuthenticatedUser}
          />
        )}

        {step === 2 && <Review />}

        <FormFooter step={step} setStep={setStep} />
      </form>
    </FormProvider>
  );
};

export default Form;
