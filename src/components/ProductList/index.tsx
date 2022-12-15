import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

import { Product } from "../Product";
import { StyledProductList } from "./style";

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface iProductList {
  productList: iProduct[];
}

export function ProductsList() {
  const { productList, filterList } = useContext(CartContext);
  const [fil, setFil] = useState(false);

  useEffect(() => {
    if (filterList.length) {
      setFil(true);
    }
  }, [filterList]);

  return fil ? (
    <StyledProductList>
      {filterList.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </StyledProductList>
  ) : (
    <StyledProductList>
      {productList.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </StyledProductList>
  );
}
