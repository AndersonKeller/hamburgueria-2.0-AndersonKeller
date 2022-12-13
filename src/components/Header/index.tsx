import { useContext } from "react";
import { ProductContext, iProduct } from "../../contexts/ProductContext";
import image from "../../img/logo.png";
import retangle from "../../img/Rectangle.png";

import { StyledHeader } from "./styles";

interface iHeaderProps {
  products: iProduct[];
  filterList: iProduct[];
  setFilterList: (products: iProduct) => iProduct[];
}

export function Header() {
  const { id, title } = useContext(ProductContext);
  return (
    <StyledHeader>
      <div className="container container-header">
        <img src={image} alt="" />
        <div className="container-input">
          <img src={retangle} alt="" />
          {/* <Input
            products={products}
            filterList={filterLIst}
            setFilterList={setFilterList}
          /> */}
        </div>
      </div>
    </StyledHeader>
  );
}
