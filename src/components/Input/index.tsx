import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  placeholder: string;
  type: string;
}

export function Input({ label, placeholder, type }: iInputProps) {
  return (
    <StyledInput>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </StyledInput>
  );
}
