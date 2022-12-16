import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../ProductList";
import { StyledCartProduct } from "./style";

interface iCartProductProps {
  product: iProduct;
}

export function CartProduct({ product }: iCartProductProps) {
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const counting = cart.filter((sale) => {
    return sale.id === product.id;
  });
  function removeItems() {
    setCart(
      cart.filter((sale, index) => {
        console.log(sale);
        return cart.indexOf(sale) !== index;
      })
    );
  }

  useEffect(() => {
    setCount(counting.length);
  }, [counting]);

  return (
    <StyledCartProduct key={product.id}>
      <img src={product.img} alt="" />
      <div>
        <h2>
          {product.name.length > 10
            ? product.name.substring(0, 10) + "..."
            : product.name}
        </h2>
        <button onClick={() => removeItems()}>Remover</button>
        <p>{product.category}</p>
        <span>X {counting.length}</span>
      </div>
    </StyledCartProduct>
  );
}
