import { Product } from "../Product";
import { StyledProductList } from "./style";

interface iProductListProps {
  productList: iProduct[];
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export function ProductsList({ productList }: iProductListProps) {
  console.log(productList);

  return (
    <StyledProductList>
      {productList.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </StyledProductList>
  );
}
