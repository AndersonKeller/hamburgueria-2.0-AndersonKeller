import { createContext, ReactNode, useState } from "react";
import { iProduct, iProductList } from "../../components/ProductList";

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iCartProviderProps {
  children: ReactNode;
}
interface iCartContext {
  cart: iProduct[];
  setCart: (cart: iProduct[]) => void;
  modalShow: boolean;
  setModalShow: (modalShow: boolean) => void;
}

export function CartProvider({ children }: iCartProviderProps) {
  const [modalShow, setModalShow] = useState(false);
  const [cart, setCart] = useState<iProduct[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart, modalShow, setModalShow }}>
      {children}
    </CartContext.Provider>
  );
}
