import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  placeholder: string;
  type: string;
  register: {};
  errorMsg?: string;
}

export function Input({
  label,
  placeholder,
  type,
  register,
  errorMsg,
}: iInputProps) {
  return (
    <>
      <StyledInput>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register} />
      </StyledInput>
      {errorMsg && <span>{errorMsg}</span>}
    </>
  );
}
