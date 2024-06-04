import { ButtonForm } from "@/components/button-form";
import { InputForm } from "@/components/input-form";
import { AuthContext } from "@/contexts/auth-contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Container, ContainerForm, LinkSignUp } from "./styles";
import { toast } from "sonner";

const signInSchema = z.object({
  username: z.string().min(4, "No mínimo 4 carácteres"),
  password: z.string().min(6, "No mínimo 6 carácteres"),
});

type SignInSchema = z.infer<typeof signInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  async function handleSignIn(data: SignInSchema) {
    const isSuccessLogin = await login(data.username, data.password);
    if (isSuccessLogin) {
      navigate("/");
      toast.success("Usuário logado com sucesso!");
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <InputForm
            type="text"
            placeholder="informe seu usuário..."
            {...register("username")}
            hasError={!!errors.username}
            labelName="username"
            labelTitle="Usuário"
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <InputForm
            type="password"
            placeholder="informe sua senha..."
            {...register("password")}
            hasError={!!errors.password}
            labelName="password"
            labelTitle="Senha"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <ButtonForm type="submit" disabled={isSubmitting} title={"Entrar"} />
      </ContainerForm>
      <LinkSignUp to={"/auth/sign-up"}>Cadastre-se</LinkSignUp>
    </Container>
  );
}
