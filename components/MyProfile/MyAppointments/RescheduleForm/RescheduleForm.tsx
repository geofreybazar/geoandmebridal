import { useSession } from "next-auth/react";

import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useRescheduleAppointment from "@/hooks/appointments/useRescheduleAppointment";
import {
  rescheduleAppointmentSchema,
  RescheduleAppointmentType,
} from "@/zodSchemas/appointment";

import DatePicker from "./DatePicker";
import useGetAppoinmentAvailableSlots from "@/hooks/useGetAppoinmentAvailableSlots";
import TimePicker from "./TimePicker";
import Reason from "./Reason";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ReschduleForm = ({ setOpen }: { setOpen: (x: boolean) => void }) => {
  const { data: session, status } = useSession();

  const { rescheduleAppointment } = useRescheduleAppointment();

  const methods = useForm<RescheduleAppointmentType>({
    resolver: zodResolver(rescheduleAppointmentSchema),
    defaultValues: {
      clientId: session?.user.id,
      rescheduleDate: undefined,
      rescheduleTime: "",
      reason: "",
    },
  });

  const selectedDate = useWatch({
    control: methods.control,
    name: "rescheduleDate",
  });

  const { availableTime, isLoading: loading } =
    useGetAppoinmentAvailableSlots(selectedDate);

  const onSubmit = async (data: RescheduleAppointmentType) => {
    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "submit" },
    );
    const dataWithRecaptchaToken = {
      ...data,
      recaptchaToken: token,
    };

    const result = await rescheduleAppointment(dataWithRecaptchaToken);

    if (result.success) {
      toast.success("Request for appoinment reschedule was submitted");
      setOpen(false);
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

        <Reason />

        <DatePicker />

        <TimePicker
          availableTime={availableTime}
          loading={loading}
          selectedDate={selectedDate}
        />

        <div className='w-full flex justify-center'>
          <Button
            type='submit'
            className='btn-primary'
            disabled={methods.formState.isSubmitting}
          >
            {methods.formState.isSubmitting
              ? "Rescheduling"
              : "Reschedule Appointment"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ReschduleForm;
