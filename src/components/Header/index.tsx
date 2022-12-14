import { useContext, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import image from "../../img/logo.png";

import retangle from "../../img/rectangleshop.png";
import bag from "../../img/shopping-bag.png";
import { InputSearch } from "../InputSearch";
import { Modal } from "../Modal";

import { StyledHeader, StyledSpanCount } from "./styles";

// interface iHeaderProps {
//   products: iProduct[];
//   filterList: iProduct[];
//   setFilterList: (products: iProduct) => iProduct[];
// }

interface iHeaderProps {
  isHome: boolean;
}

export function Header({ isHome }: iHeaderProps) {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const { modalShow, setModalShow, countProducts } = useContext(CartContext);

  function backLogin() {
    window.localStorage.removeItem("@idUser");
    window.localStorage.removeItem("@token-hamburgueria2.0");
    navigate("/login");
  }
  function openSearch(): void {
    setShowSearch(!showSearch);
  }

  return showSearch ? (
    <StyledHeader isHome={isHome}>
      <div className="container container-header">
        <img src={image} alt="" />
        <InputSearch showSearch={showSearch} setShowSearch={setShowSearch} />
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
            <button onClick={() => openSearch()}>
              <AiOutlineSearch />
            </button>
            <StyledSpanCount>{countProducts}</StyledSpanCount>
            <button onClick={() => setModalShow(!modalShow)}>
              <AiOutlineShoppingCart />
            </button>
            <button onClick={() => backLogin()}>
              <TbLogout />
            </button>
          </div>
        )}
      </div>
      {modalShow && <Modal />}
    </StyledHeader>
  ) : (
    <StyledHeader isHome={isHome}>
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
            <button onClick={() => openSearch()}>
              <AiOutlineSearch />
            </button>
            <StyledSpanCount>{countProducts}</StyledSpanCount>
            <button onClick={() => setModalShow(!modalShow)}>
              <AiOutlineShoppingCart />
            </button>
            <button onClick={() => backLogin()}>
              <TbLogout />
            </button>
          </div>
        )}
      </div>
      {modalShow && <Modal />}
    </StyledHeader>
  );
}
