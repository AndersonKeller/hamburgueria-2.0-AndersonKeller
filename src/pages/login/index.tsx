import { Header } from "../../components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { notify as notifyFunction } from "../../contexts/index";
import { FormLogin } from "../../components/FormLogin";

export function Login() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const loginSchema = yup.object().shape({
    email: yup.string().required("email obrigatório").email("formato inválido"),
    password: yup.string().required("senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    resolver: yupResolver(loginSchema),
  });
  type iFormData = {
    email: string;
    password: string;
  };
  const onSubmit: SubmitHandler<iFormData> = (data: iFormData) =>
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
        notifyFunction({ message: "Sucesso", type: "sucess" });
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } catch (error) {
        notifyFunction({ message: "Algo deu errado", type: "error" });
        console.error(error);
      }
    }
    loginApi();
  }
  console.log(user);
  return (
    <>
      <Header></Header>
      <main>
        <FormLogin />
      </main>
    </>
  );
}
