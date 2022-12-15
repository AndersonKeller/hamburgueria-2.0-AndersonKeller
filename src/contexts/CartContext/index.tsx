import { createContext, ReactNode, useEffect, useState } from "react";
import { iProduct, iProductList } from "../../components/ProductList";
import { StyledProductList } from "../../components/ProductList/style";
import { api } from "../../services/api";

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iCartProviderProps {
  children: ReactNode;
}
interface iCartContext {
  cart: iProduct[] | [];
  setCart: (cart: iProduct[]) => void;
  modalShow: boolean;
  setModalShow: (modalShow: boolean) => void;
  productList: iProduct[];
}

export function CartProvider({ children }: iCartProviderProps) {
  const [modalShow, setModalShow] = useState(false);
  const [cart, setCart] = useState<iProduct[]>([]);
  const [productList, setProductList] = useState<iProduct[]>([]);
  function getProductsApi() {
    async function getApi() {
      const token = window.localStorage.getItem("@token-hamburgueria2.0");
      const resp = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProductList(resp.data);
      return resp.data;
    }
    getApi();
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getProductsApi();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, setCart, modalShow, setModalShow, productList }}
    >
      {children}
    </CartContext.Provider>
  );
}
