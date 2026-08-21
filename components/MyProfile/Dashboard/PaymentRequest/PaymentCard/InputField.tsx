import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CreatePaymongoPaymentRequestType } from "@/zodSchemas/customOrderPayment";

interface InputFieldProps {
  name: "city" | "address" | "postalCode" | "province";
  placeholder: string;
  label: string;
}

const InputField = ({ name, placeholder, label }: InputFieldProps) => {
  const { control } = useFormContext<CreatePaymongoPaymentRequestType>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid>
          <FieldLabel className="className='block text-sm tracking-wide text-black/60">
            {label}
          </FieldLabel>
          <Input
            aria-invalid
            {...field}
            placeholder={placeholder}
            className='bg-white text-black focus-visible:ring-gold '
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default InputField;
