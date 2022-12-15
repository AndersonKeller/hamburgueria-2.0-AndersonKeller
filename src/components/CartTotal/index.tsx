import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ButtonAdd } from "../Button";
import { StyledCartTotal } from "./style";

export function CartTotal() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  return (
    <StyledCartTotal>
      <h3>Total</h3>
      {/* //<span>R$ {sum.toFixed(2)}</span> */}

      <ButtonAdd
        id={6}
        sizeButton="big"
        type="button"
        text="Remover Todos"
        onClick={() => setCart([])}
      ></ButtonAdd>
    </StyledCartTotal>
  );
}
