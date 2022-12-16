import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

import { StyledDivSearch, StyledInputSearch } from "./style";
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
  function closeSearch() {
    setValue("");
    setFilterList([]);
    setShowSearch(false);
  }

  return (
    // eslint-disable-next-line react/style-prop-object
    <StyledDivSearch>
      <StyledInputSearch
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyUp={(event) => search()}
        itemType="text"
        placeholder="Digite sua pesquisa aqui..."
      />
      <button onClick={() => closeSearch()}>Fechar Pesquisa</button>
    </StyledDivSearch>
  );
}
