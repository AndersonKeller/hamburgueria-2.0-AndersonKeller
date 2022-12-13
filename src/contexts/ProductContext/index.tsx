import { createContext, ReactNode } from "react";

export const ProductContext = createContext({} as iProduct);

export interface iProduct {
  id: number;
  title: string;
}

interface iProductsProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: iProductsProviderProps) {
  return (
    <ProductContext.Provider value={{ id: 0, title: "" }}>
      {children}
    </ProductContext.Provider>
  );
}
