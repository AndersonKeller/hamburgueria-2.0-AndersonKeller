import { Button } from "../Button";
import { Input } from "../Input";
import { StyledForm } from "./style";

export function FormLogin({}) {
  return (
    <StyledForm>
      <h2>Login</h2>
      <Input type="email" label="Email" placeholder="Email" />
      <Input type="password" label="Senha" placeholder="Senha" />
      <Button type="submit" text="Logar" />
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <Button type="button" text="Cadastrar" />
    </StyledForm>
  );
}
