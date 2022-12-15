import { useState, useEffect } from "react";
import { iProduct, iProductList } from "../ProductList";
import { StyledCartProduct } from "./style";

interface iCartProductProps {
  product: iProduct;
}

export function CartProduct({ product }: iCartProductProps) {
  // console.log(currentSale);
  console.log(product);
  const [count, setCount] = useState(1);
  //   const counting = currentSale.filter((sale) => {
  //     return sale.id === product.id;
  //   });
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
  console.log(count);
  return (
    <StyledCartProduct>
      <img src={product.img} alt="" />
      <div>
        <h2>
          {product.name.length > 10
            ? product.name.substring(0, 10) + "..."
            : product.name}
        </h2>
        <button onClick={() => console.log("remove")}>Remover</button>
        <p>{product.category}</p>
        <span>X {count}</span>
      </div>
    </StyledCartProduct>
  );
}
