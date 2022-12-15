import { Header } from "../../components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { notify as notifyFunction } from "../../contexts/index";
import { FormLogin } from "../../components/FormLogin";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Insira um email válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Deve conter no mínimo 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iFormData>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });
  type iFormData = {
    email: string;
    password: string;
  };

  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);
  function onSubmitApi(data: iFormData) {
    async function loginApi() {
      try {
        const resp = await api.post("/login", data);

        console.log(resp.data.user);
        setUser(resp.data.user);
        window.localStorage.setItem(
          "@token-hamburgueria2.0",
          resp.data.accessToken
        );
        console.log(resp.data);
        window.localStorage.setItem("@idUser", resp.data.user.id);
        notifyFunction({ message: "Sucesso, login efetuado", type: "sucess" });
        setTimeout(() => {
          navigate("/home");
        }, 3000);
        console.log(resp);
      } catch (error) {
        notifyFunction({
          message: `Algo deu errado, senha ou email inválidos`,
          type: "error",
        });
        console.error(error);
        reset({ password: "" });
      }
    }

    loginApi();
  }
  console.log(user);
  return (
    <>
      <Header isHome={false}></Header>
      <main>
        <FormLogin title="Login" onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register("email")}
            label="email"
            placeholder="email"
            type="text"
            errorMsg={errors.email?.message && errors.email.message}
          />
          <Input
            register={register("password")}
            label="senha"
            placeholder="senha"
            type="password"
            errorMsg={errors.password?.message && errors.password.message}
          />
          <Button sizeButton="big" text="Logar" type="submit" />
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Link className="linkRegister" to={"/register"}>
            Cadastrar
          </Link>
        </FormLogin>
      </main>
    </>
  );
}
