import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Controller } from "react-hook-form";
import {
  DeliveryDetailsInput,
  DeliveryDetailsOutput,
} from "@/zodSchemas/cartCheckoutForm";
import { cityShippingFees } from "@/utils/constants/metroManilaProvinces";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const cities = Object.entries(cityShippingFees);

const ShippingForm = () => {
  const [open, setOpen] = useState(false);

  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<DeliveryDetailsInput, undefined, DeliveryDetailsOutput>();

  const selectedCity = useWatch({
    control,
    name: "city",
  });

  return (
    <div className='flex flex-col gap-2'>
      <Controller
        name='address'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Address</FieldLabel>
            <Input
              aria-invalid={fieldState.invalid}
              {...field}
              type='text'
              placeholder='123 Main St'
              className='bg-white'
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} className='text-left' />
            )}
          </Field>
        )}
      />

      <Controller
        name='postalCode'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Postal Code</FieldLabel>
            <Input
              aria-invalid={fieldState.invalid}
              {...field}
              type='text'
              placeholder='12345'
              className='bg-white'
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} className='text-left' />
            )}
          </Field>
        )}
      />

      <Controller
        name='city'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>City</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  aria-invalid={fieldState.invalid}
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='justify-between font-normal'
                >
                  {selectedCity || "Select City"}
                  <ChevronsUpDown className='opacity-50' />
                </Button>
              </PopoverTrigger>

              <PopoverContent align='start' className='p-0 max-h-60'>
                <Command>
                  <CommandInput placeholder='Search city...' className='h-9' />
                  <CommandList>
                    <CommandEmpty>City not found</CommandEmpty>
                    <CommandGroup>
                      {cities.map(([city, fee]) => (
                        <CommandItem
                          key={city}
                          value={city}
                          onSelect={() => {
                            field.onChange(city);
                            setValue("shippingFee", fee);
                            setOpen(false);
                          }}
                        >
                          {city}

                          <Check
                            className={cn(
                              "ml-auto",
                              field.value === city
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} className='text-left' />
            )}
          </Field>
        )}
      />
    </div>
  );
};

export default ShippingForm;
