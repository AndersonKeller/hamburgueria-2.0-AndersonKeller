import { StyledButton } from "./style";

interface iButtonProps {
  type: "button" | "submit";
  text: string;
  sizeButton: "big" | "small";
}

export function Button({ type, text, sizeButton }: iButtonProps) {
  return (
    <StyledButton sizeButton={sizeButton} type={type}>
      {text}
    </StyledButton>
  );
}
