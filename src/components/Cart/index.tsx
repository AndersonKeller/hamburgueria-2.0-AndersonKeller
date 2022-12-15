import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledCart } from "./style";
import { iProduct } from "../../components/ProductList";

export function Cart() {
  const { cart, setCart, modalShow, setModalShow, productList } =
    useContext(CartContext);

  //   const filterPrice = currentSale.reduce((acc, sale) => {
  //     return acc + sale.price;
  //   }, 0);
  console.log(productList);

  // eslint-disable-next-line no-self-compare
  const findId = cart.filter((prod: iProduct) => prod.id !== prod.id);

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
                {/* <CartProduct
                  findId={findId}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                  key={prod.id}
                  product={prod}
                /> */}
                <h2>Olá</h2>
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
      {cart.length > 0 && (
        // <CartTotal
        //   key={filterPrice}
        //   sum={filterPrice}
        //   setCurrentSale={setCurrentSale}
        // />
        <h2>Total</h2>
      )}
    </StyledCart>
  );
}
