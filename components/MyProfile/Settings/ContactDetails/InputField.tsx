import { Controller, useFormContext } from "react-hook-form";
import type { UpdateClientContactType } from "@/zodSchemas/clients";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface InputFieldProps {
  name: keyof UpdateClientContactType;
  label: string;
  type?: string;
}

const InputField = ({ name, label, type = "text" }: InputFieldProps) => {
  const { control } = useFormContext<UpdateClientContactType>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          <Input
            {...field}
            type={type}
            id={`form-rhf-demo-${name}`}
            aria-invalid={fieldState.invalid}
            placeholder={label}
            autoComplete='off'
            className='bg-offwhite text-black border-none '
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default InputField;
