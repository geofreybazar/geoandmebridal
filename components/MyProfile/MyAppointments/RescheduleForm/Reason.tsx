import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { RescheduleAppointmentType } from "@/zodSchemas/appointment";
import { Controller, useFormContext } from "react-hook-form";

const Reason = () => {
  const { control, setValue } = useFormContext<RescheduleAppointmentType>();

  return (
    <Controller
      name='reason'
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>Reason for rescheduling</FieldLabel>
          <Textarea
            {...field}
            id='textarea-message'
            placeholder='Type your message here.'
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className='text-left' />
          )}
        </Field>
      )}
    />
  );
};

export default Reason;
