import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledCart } from "./style";
import { iProduct } from "../../components/ProductList";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export function Cart() {
  const { cart, setCart, modalShow, setModalShow, productList } =
    useContext(CartContext);

  //   const filterPrice = currentSale.reduce((acc, sale) => {
  //     return acc + sale.price;
  //   }, 0);

  // eslint-disable-next-line no-self-compare
  const findId = cart.filter((prod: iProduct) => prod.id !== prod.id);
  console.log(findId);
  return (
    <StyledCart className="cart-main">
      <div className="cart-header">
        <h2>Carrinho de compras</h2>
        <button onClick={() => setModalShow(!modalShow)}>X</button>
      </div>
      <div className="cart-body">
        {cart.length ? (
          cart.map((prod: iProduct) => {
            return (
              <>
                <CartProduct
                  // findId={findId}
                  // currentSale={cart}
                  // setCurrentSale={setCart}
                  // key={prod.id}
                  product={prod}
                />
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
