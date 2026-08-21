import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { RescheduleAppointmentType } from "@/zodSchemas/appointment";

const DatePicker = () => {
  const [open, setOpen] = useState(false);
  const { control, setValue } = useFormContext<RescheduleAppointmentType>();

  const shouldDisableDate = (date: Date) => date <= new Date();

  return (
    <Controller
      name='rescheduleDate'
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>Date</FieldLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                aria-invalid={fieldState.invalid}
                variant='outline'
                id='date'
                className={cn(
                  "justify-start text-left font-normal justify-between focus:outline-none focus:ring-1 focus:ring-champagneGold",
                )}
              >
                {field.value ? (
                  field.value.toDateString()
                ) : (
                  <span>Select date</span>
                )}
                <CalendarIcon />
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
                captionLayout='dropdown'
                onSelect={(date) => {
                  if (date) {
                    field.onChange(date);
                    setOpen(false);
                    setValue("rescheduleTime", "");
                  }
                }}
              />
            </PopoverContent>
          </Popover>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default DatePicker;
