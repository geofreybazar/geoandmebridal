import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ClientSignupType } from "@/zodSchemas/signupForm";

interface InputFieldProps {
  name:
    | "title"
    | "firstName"
    | "lastName"
    | "email"
    | "phoneNumber"
    | "provider";
  placeholder: string;
  type?: string;
}

const InputField = ({ name, placeholder, type }: InputFieldProps) => {
  const { control } = useFormContext<ClientSignupType>();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid>
            <Input
              aria-invalid
              {...field}
              type={type}
              placeholder={placeholder}
              className='bg-white text-black border-none focus-visible:ring-gold'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </>
  );
};

export default InputField;
