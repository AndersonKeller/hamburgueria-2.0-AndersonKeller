import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

import { StyledInputSearch } from "./style";
interface iInputSearchProps {
  showSearch: boolean;
  setShowSearch: (showSearch: boolean) => void;
}
export function InputSearch({ showSearch, setShowSearch }: iInputSearchProps) {
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
  //   function closeSearch() {
  //     setValue("")
  //     //setFilterList([]);

  //     setTimeout(() => {
  //       setShowSearch(false);
  //     }, 3000);
  //   }

  console.log(filterList);

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
