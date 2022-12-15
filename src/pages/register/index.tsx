import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import * as yup from "yup";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { notify } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("email obrigatório").email("formato inválido"),
    password: yup.string().required("senha obrigatória"),
    passwordConfirme: yup
      .string()
      .oneOf([yup.ref("password")], "deve ser igual a senha"),
  });
  type iFormData = {
    name: string;
    email: string;
    password: string;
    passwordConfirme: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onRegisterApi(data);

  function onRegisterApi(data: iFormData) {
    console.log(data);
    async function registerApi() {
      try {
        const resp = await api.post("/users", data);
        console.log(resp.data);
        notify({ message: "Registro bem sucedido", type: "sucess" });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        notify({ message: "Registro não efetuado", type: "error" });
      }
    }
    registerApi();
  }
  return (
    <>
      <Header isHome={false} />
      <main>
        <FormLogin title="Cadastrar" onSubmit={handleSubmit(onSubmit)}>
          <Link className="linkLogin" to={"/login"}>
            Retornar para o login
          </Link>
          <Input
            label="name"
            type="text"
            placeholder="nome"
            register={register("name")}
            errorMsg={errors.name?.message && errors.name.message}
          />
          <Input
            label="email"
            type="email"
            placeholder="email"
            register={register("email")}
            errorMsg={errors.email?.message && errors.email.message}
          />
          <Input
            label="senha"
            type="password"
            placeholder="Insira sua senha"
            register={register("password")}
            errorMsg={errors.password?.message && errors.password.message}
          />
          <Input
            label="Confirme a senha"
            type="password"
            placeholder="Confirme a senha"
            register={register("passwordConfirme")}
            errorMsg={
              errors.passwordConfirme?.message &&
              errors.passwordConfirme.message
            }
          />
          <Button sizeButton="big" text="Registrar" type="submit" />
        </FormLogin>
      </main>
    </>
  );
}
