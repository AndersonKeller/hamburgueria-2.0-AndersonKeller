import { ReactNode } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledForm } from "./style";

interface iFormProps {
  title: string;
  children: ReactNode;
  onSubmit: () => void;
}

export function FormLogin({ children, onSubmit, title }: iFormProps) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
    </StyledForm>
  );
}
