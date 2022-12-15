import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductList";
import { CartContext } from "../../contexts/CartContext";
import { api } from "../../services/api";

export function Home() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filterList } = useContext(CartContext);
  const navigate = useNavigate();

  function getProducts() {
    const token = window.localStorage.getItem("@token-hamburgueria2.0");
    async function getProductsApi() {
      try {
        const resp = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProductList(resp.data);
      } catch (error) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }
    getProductsApi();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? null : (
    <>
      <Header isHome={true} />
      <ProductsList />
    </>
  );
}
