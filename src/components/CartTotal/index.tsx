import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ButtonAdd } from "../Button";
import { iProduct } from "../ProductList";
import { StyledCartTotal } from "./style";

export function CartTotal() {
  const { cart, setCart } = useContext(CartContext);

  const sum = cart.reduce((acc: number, value: iProduct) => {
    return acc + value.price;
  }, 0);

  return (
    <StyledCartTotal>
      <div>
        <h3>Total </h3>
        <h3>R$ {sum.toFixed(2)}</h3>
      </div>

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
