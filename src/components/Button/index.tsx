import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProduct, iProductList } from "../ProductList";
import { StyledButton } from "./style";

interface iButtonProps {
  type: "button" | "submit";
  text: string;
  sizeButton: "big" | "small";
}

interface iButtonAddProps extends iButtonProps {
  onClick: () => void;
  id: number;
}

export function Button({ type, text, sizeButton }: iButtonProps) {
  return (
    <StyledButton sizeButton={sizeButton} type={type}>
      {text}
    </StyledButton>
  );
}
export function ButtonAdd({
  onClick,
  id,
  sizeButton,
  text,
  type,
}: iButtonAddProps) {
  return (
    <StyledButton onClick={onClick} sizeButton={sizeButton} type={type}>
      {text}
    </StyledButton>
  );
}
