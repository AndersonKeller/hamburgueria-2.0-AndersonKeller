import { Button } from "../Button";
import { iProduct } from "../ProductList";
import { StyledProduct } from "./style";

export function Product({ id, category, img, name, price }: iProduct) {
  return (
    <StyledProduct>
      <img src={img} alt="" />
      <div className="div-infos">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>R$ {price.toFixed(2)}</p>

        <Button sizeButton="small" text="Adicionar" type="button" />
      </div>
    </StyledProduct>
  );
}
