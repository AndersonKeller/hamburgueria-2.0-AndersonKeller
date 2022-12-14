import { createContext, ReactNode, useState } from "react";

export const ProductContext = createContext({} as iProductContext);

interface iProductContext {
  product: iProduct;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iProductsProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: iProductsProviderProps) {
  const [product, setProduct] = useState({} as iProduct);
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
}
