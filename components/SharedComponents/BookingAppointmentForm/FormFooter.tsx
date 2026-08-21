import type { Dispatch, SetStateAction } from "react";
import { useFormContext, type FieldPath } from "react-hook-form";

import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

import type { BookAppointmentType } from "@/zodSchemas/appointment";

const steps: {
  id: number;
  label: string;
  fields?: FieldPath<BookAppointmentType>[];
}[] = [
  {
    id: 0,
    label: "DateTimePicker",
    fields: ["selectedDate", "selectedTime"],
  },
  {
    id: 1,
    label: "ClientInformation",
    fields: ["fullName", "address", "email", "phone"],
  },
  {
    id: 2,
    label: "Review",
  },
];

interface FormFooterProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const FormFooter = ({ step, setStep }: FormFooterProps) => {
  const { trigger, formState } = useFormContext<BookAppointmentType>();

  const nextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const valid = await trigger(steps[step].fields);
    if (!valid) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div
      className={`
    flex
    flex-col-reverse
    sm:flex-row
    gap-3
    px-6
    ${step > 0 ? "sm:justify-between" : "sm:justify-end"}
  `}
    >
      {step > 0 && (
        <Button
          type='button'
          variant='outline'
          onClick={prevStep}
          disabled={formState.isSubmitting}
          className='btn-secondary'
        >
          Back
        </Button>
      )}

      {step < steps.length - 1 ? (
        <Button type='button' onClick={nextStep} className='btn-primary'>
          Next
        </Button>
      ) : (
        <Button
          type='submit'
          className='btn-primary'
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? <Spinner /> : null}
          Book Appointment
        </Button>
      )}
    </div>
  );
};

export default FormFooter;
