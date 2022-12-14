import { useContext } from "react";
import { ProductContext, iProduct } from "../../contexts/ProductContext";
import image from "../../img/logo.png";
import retangle from "../../img/rectangleshop.png";
import bag from "../../img/shopping-bag.png";

import { StyledHeader } from "./styles";

interface iHeaderProps {
  products: iProduct[];
  filterList: iProduct[];
  setFilterList: (products: iProduct) => iProduct[];
}

export function Header() {
  const { product } = useContext(ProductContext);
  return (
    <StyledHeader>
      <div className="container container-header">
        <img src={image} alt="" />
        <div className="fake-header">
          <div className="bag-div">
            <img src={retangle} alt="" />
            <img className="bag-img" src={bag} alt="" />
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os melhores
              ingredientes.
            </p>
          </div>
        </div>
      </div>
      <div className="container-input">
        {/* <Input
            products={products}
            filterList={filterLIst}
            setFilterList={setFilterList}
          /> */}
      </div>
    </StyledHeader>
  );
}
