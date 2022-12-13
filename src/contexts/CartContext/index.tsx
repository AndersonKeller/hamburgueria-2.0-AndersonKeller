import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext({});

interface iCartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: iCartProviderProps) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
