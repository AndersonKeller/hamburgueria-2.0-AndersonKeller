import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  placeholder: string;
  type: string;
  register: {};
}

export function Input({ label, placeholder, type, register }: iInputProps) {
  return (
    <StyledInput>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
    </StyledInput>
  );
}
