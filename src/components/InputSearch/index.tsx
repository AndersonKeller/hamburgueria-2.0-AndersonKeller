import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../ProductList";

import { StyledInputSearch } from "./style";

export function InputSearch() {
  const [value, setValue] = useState("");

  const { productList, filterList, setFilterList } = useContext(CartContext);
  //console.log(productList);
  function search() {
    setFilterList(
      productList.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  }
  console.log(filterList);
  //   function search(list = []) {
  //     setFilterList(
  //       list.filter((prod) => {
  //         return prod.name.toLowerCase().includes(value.toLowerCase());
  //       })
  //     );
  //   }

  return (
    <>
      <StyledInputSearch
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyUp={(event) => search()}
        itemType="text"
        placeholder="Digite sua pesquisa aqui..."
      />
      <button onClick={() => search()}>Pesquisar</button>
    </>
  );
}
