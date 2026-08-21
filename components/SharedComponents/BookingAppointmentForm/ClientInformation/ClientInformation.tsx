import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BookAppointmentType } from "@/zodSchemas/appointment";

const ClientInformation = ({
  isTherAuthenticatedUser,
}: {
  isTherAuthenticatedUser: boolean;
}) => {
  const { control } = useFormContext<BookAppointmentType>();

  return (
    <>
      <Controller
        name='fullName'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid>
            <FieldLabel className="className='block text-sm tracking-wide text-black/60 mb-2">
              Full Name
            </FieldLabel>
            <Input
              aria-invalid
              {...field}
              type='text'
              placeholder='Juana Dela Cruz'
              className='bg-white text-black border-none'
              disabled={isTherAuthenticatedUser}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Address */}
      <Controller
        name='address'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="className='block text-sm tracking-wide text-black/60 mb-2">
              Address
            </FieldLabel>
            <Input
              {...field}
              type='text'
              placeholder='1116 Pandacan Manila'
              aria-invalid={fieldState.invalid}
              className='bg-white text-black border-none'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Email */}
      <Controller
        name='email'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="className='block text-sm tracking-wide text-black/60 mb-2">
              Email Address
            </FieldLabel>
            <Input
              {...field}
              type='email'
              placeholder='example@mail.com'
              aria-invalid={fieldState.invalid}
              className='bg-white text-black border-none'
              disabled={isTherAuthenticatedUser}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Phone */}
      <Controller
        name='phone'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="className='block text-sm tracking-wide text-black/60 mb-2">
              Phone Number
            </FieldLabel>
            <Input
              {...field}
              placeholder='+63 900 000 0000'
              aria-invalid={fieldState.invalid}
              className='bg-white text-black border-none'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </>
  );
};

export default ClientInformation;
