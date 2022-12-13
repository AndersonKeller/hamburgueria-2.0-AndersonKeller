import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function Login() {
  const loginSchema = yup.object().shape({
    name: yup.string().required("email obrigatório"),
    password: yup.string().required("senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  function onSubmitApi<iFormData>(data: iFormData) {
    console.log(data);
  }
  return (
    <>
      <Header></Header>
      <main>
        <form onSubmit={handleSubmit(onSubmitApi)}>
          <input type="text" placeholder="nome" {...register("name")} />
          <input
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          <button type="submit">Logar</button>
        </form>
      </main>
    </>
  );
}
