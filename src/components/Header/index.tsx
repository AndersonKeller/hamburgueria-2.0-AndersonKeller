import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import image from "../../img/logo.png";

import retangle from "../../img/rectangleshop.png";
import bag from "../../img/shopping-bag.png";

import { StyledHeader } from "./styles";

// interface iHeaderProps {
//   products: iProduct[];
//   filterList: iProduct[];
//   setFilterList: (products: iProduct) => iProduct[];
// }

interface iHeaderProps {
  isHome: boolean;
}

export function Header({ isHome }: iHeaderProps) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className="container container-header">
        <img src={image} alt="" />
        {!isHome ? (
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
        ) : (
          <div className="container-input">
            <AiOutlineSearch />
            <AiOutlineShoppingCart />
            <TbLogout onClick={() => navigate("/login")} />
          </div>
        )}
      </div>
    </StyledHeader>
  );
}
