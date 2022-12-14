import { ReactNode } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledForm } from "./style";

interface iFormProps {
  children: ReactNode;
  onSubmit: () => void;
}

export function FormLogin({ children, onSubmit }: iFormProps) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Login</h2>
      {children}
    </StyledForm>
  );
}
