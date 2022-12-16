import { useContext } from "react";
import { notify } from "../../contexts";
import { CartContext } from "../../contexts/CartContext";
import { ButtonAdd } from "../Button";
import { iProduct } from "../ProductList";
import { StyledProduct } from "./style";

export function Product({ id, category, img, name, price }: iProduct) {
  const { cart, setCart, productList } = useContext(CartContext);

  function addCart(id: number) {
    //return console.log("Ola");
    const findProd = productList.find((product: iProduct) => {
      return product.id === id;
    });

    findProd && setCart([...cart, findProd]);
    notify({ message: "Produto adicionado ao carrinho", type: "sucess" });
  }

  return (
    <StyledProduct>
      <img src={img} alt="" />
      <div className="div-infos">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>R$ {price.toFixed(2)}</p>

        <ButtonAdd
          id={id}
          onClick={() => addCart(id)}
          sizeButton="small"
          text="Adicionar"
          type="button"
        />
      </div>
    </StyledProduct>
  );
}
