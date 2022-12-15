import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProduct, iProductList } from "../ProductList";
import { StyledCartProduct } from "./style";

interface iCartProductProps {
  product: iProduct;
}

export function CartProduct({ product }: iCartProductProps) {
  // console.log(currentSale);

  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  //   const counting = currentSale.filter((sale) => {
  //     return sale.id === product.id;
  //   });
  function removeItems(id: number) {
    console.log("oi");
    setCart(
      cart.filter((sale) => {
        console.log(sale);
        return sale.id !== id;
        //return cart;
        //return cart.indexOf(sale) !== index;
      })
    );
    return cart;
  }
  //   function removeItems() {
  //     setCurrentSale(
  //       currentSale.filter((sale, index) => {
  //         return currentSale.indexOf(sale) !== index;
  //       })
  //     );
  //   }
  //   useEffect(() => {
  //     setCount(counting.length);
  //   }, [counting]);
  //   // //  counting.id === product.id && setCount(count + 1);

  //   console.log(counting);

  return (
    <StyledCartProduct>
      <img src={product.img} alt="" />
      <div>
        <h2>
          {product.name.length > 10
            ? product.name.substring(0, 10) + "..."
            : product.name}
        </h2>
        <button onClick={() => removeItems(product.id)}>Remover</button>
        <p>{product.category}</p>
        <span>X {count}</span>
      </div>
    </StyledCartProduct>
  );
}
