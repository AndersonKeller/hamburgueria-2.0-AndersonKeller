import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledCart } from "./style";
import { iProduct } from "../../components/ProductList";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export function Cart() {
  const { cart, setCart, modalShow, setModalShow } = useContext(CartContext);

  // eslint-disable-next-line no-self-compare
  function uniqueId(value: iProduct, index: number, cart: iProduct[]) {
    return cart.indexOf(value) === index;
  }
  const findId = cart.filter(uniqueId);

  return (
    <StyledCart className="cart-main">
      <div className="cart-header">
        <h2>Carrinho de compras</h2>
        <button onClick={() => setModalShow(!modalShow)}>X</button>
      </div>
      <div className="cart-body">
        {cart.length ? (
          findId.map((prod: iProduct) => {
            return (
              <>
                <CartProduct key={prod.id} product={prod} />
              </>
            );
          })
        ) : (
          <>
            <h2>seu carrinho está vazio</h2>
            <p>adicione itens</p>
          </>
        )}
      </div>
      {cart.length > 0 && <CartTotal />}
    </StyledCart>
  );
}
