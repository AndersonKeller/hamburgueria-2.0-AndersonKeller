import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductList";

import { api } from "../../services/api";
import { StyledMain } from "./style";

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function getProducts() {
    const token = window.localStorage.getItem("@token-hamburgueria2.0");
    async function getProductsApi() {
      try {
        setLoading(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <StyledMain>
      <Header isHome={true} />
    </StyledMain>
  ) : (
    <StyledMain>
      <Header isHome={true} />
      <ProductsList />
    </StyledMain>
  );
}
