import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductList";
import { api } from "../../services/api";

export function Home() {
  const [productList, setProductList] = useState([]);

  function getProducts() {
    const token = window.localStorage.getItem("@token-hamburgueria2.0");
    async function getProductsApi() {
      const resp = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(resp.data);
      setProductList(resp.data);
    }
    getProductsApi();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header isHome={true} />
      <ProductsList productList={productList} />
    </>
  );
}
