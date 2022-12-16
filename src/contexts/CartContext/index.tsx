import { createContext, ReactNode, useEffect, useState } from "react";
import { number } from "yup";
import { iProduct } from "../../components/ProductList";

import { api } from "../../services/api";

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iCartProviderProps {
  children: ReactNode;
}
interface iCartContext {
  cart: iProduct[];
  setCart: (cart: iProduct[]) => void;
  modalShow: boolean;
  setModalShow: (modalShow: boolean) => void;
  productList: iProduct[];
  filterList: iProduct[];
  setFilterList: (filterList: iProduct[]) => void;
  countProducts: number;
}

export function CartProvider({ children }: iCartProviderProps) {
  const [modalShow, setModalShow] = useState(false);
  const [cart, setCart] = useState<iProduct[]>([]);
  const [filterList, setFilterList] = useState<iProduct[]>([]);
  const [productList, setProductList] = useState<iProduct[]>([]);
  const [countProducts, setCountProducts] = useState(cart.length);
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
  }, [filterList]);
  useEffect(() => {
    setCountProducts(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        filterList,
        setFilterList,
        cart,
        setCart,
        modalShow,
        setModalShow,
        productList,
        countProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
