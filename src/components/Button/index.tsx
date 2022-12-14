import { StyledButton } from "./style";

interface iButtonProps {
  type: "button" | "submit";
  text: string;
}

export function Button({ type, text }: iButtonProps) {
  return <StyledButton type={type}>{text}</StyledButton>;
}
