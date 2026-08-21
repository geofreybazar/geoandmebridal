import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  DeliveryDetailsInput,
  DeliveryDetailsOutput,
} from "@/zodSchemas/cartCheckoutForm";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { control, resetField } = useFormContext<
    DeliveryDetailsInput,
    undefined,
    DeliveryDetailsOutput
  >();
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col sm:flex-row gap-2'>
        <Controller
          name='firstName'
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>First Name</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                type='text'
                placeholder='Juana'
                className='bg-white'
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} className='text-left' />
              )}
            </Field>
          )}
        />

        <Controller
          name='lastName'
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Last Name</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                type='text'
                placeholder='Dela Cruz'
                className='bg-white'
              />
              <FieldError errors={[fieldState.error]} className='text-left' />
            </Field>
          )}
        />
      </div>

      <Controller
        name='emailAddress'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Email Address</FieldLabel>
            <Input
              aria-invalid={fieldState.invalid}
              {...field}
              type='email'
              placeholder='example@mail.com'
              className='bg-white'
            />
            <FieldError errors={[fieldState.error]} className='text-left' />
          </Field>
        )}
      />

      <Controller
        name='phoneNumber'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Phone Number</FieldLabel>
            <Input
              {...field}
              placeholder='+639151234567'
              aria-invalid={fieldState.invalid}
              className='bg-white'
            />
            <FieldError errors={[fieldState.error]} className='text-left' />
          </Field>
        )}
      />

      <Controller
        name='pickupOrDelivery'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>For Pick-up / For Delivery</FieldLabel>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                const fieldsToReset = [
                  "city",
                  "postalCode",
                  "address",
                  "dateOfPickup",
                  "timeOfPickup",
                ] as const;

                fieldsToReset.forEach((name) => resetField(name));
              }}
              value={field.value}
              defaultValue='forpickup'
            >
              <SelectTrigger
                id='status'
                className='bg-white text-black border-none'
              >
                <SelectValue placeholder='For Pick-up / For Delivery' />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value='forpickup'>For Pick-up</SelectItem>
                <SelectItem value='fordelivery'>For Delivery</SelectItem>
              </SelectContent>
            </Select>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
};

export default Contact;
