import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DeliveryDetailsInput,
  DeliveryDetailsOutput,
} from "@/zodSchemas/cartCheckoutForm";

const PickupForm = () => {
  const [open, setOpen] = useState(false);

  const { control } = useFormContext<
    DeliveryDetailsInput,
    undefined,
    DeliveryDetailsOutput
  >();

  const shouldDisableDate = (date: Date) => date <= new Date();

  return (
    <FieldGroup className='sm:flex-row'>
      <Controller
        name='dateOfPickup'
        control={control}
        render={({ field, fieldState }) => (
          <Field className='w-full sm:w-1/2' data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor='date-picker-optional'
              className="className='block text-sm tracking-wide text-black/60 "
            >
              Date
            </FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  aria-invalid={fieldState.invalid}
                  variant='outline'
                  id='date-picker-optional'
                  className='w-32 justify-between font-normal'
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Select date</span>
                  )}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className='w-auto overflow-hidden p-0'
                align='start'
              >
                <Calendar
                  disabled={shouldDisableDate}
                  mode='single'
                  selected={field.value}
                  defaultMonth={field.value}
                  captionLayout='dropdown'
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} className='text-left' />
            )}
          </Field>
        )}
      />

      <Controller
        name='timeOfPickup'
        control={control}
        render={({ field, fieldState }) => (
          <Field className='w-full sm:w-1/2' data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor='time-picker-optional'
              className="className='block text-sm tracking-wide text-black/60 "
            >
              Time
            </FieldLabel>
            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              type='time'
              step='1'
              className='appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} className='text-left' />
            )}
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export default PickupForm;
