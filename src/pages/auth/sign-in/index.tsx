import { AuthContext } from "@/contexts/auth-contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Container,
  ContainerForm,
  Input,
  LinkSignUp,
  LoginButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

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
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <label htmlFor="username">Usuário</label>
          <Input
            type="text"
            placeholder="informe seu usuário..."
            {...register("username")}
            $hasError={!!errors.username}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label htmlFor="username">Senha</label>
          <Input
            type="password"
            placeholder="informe sua senha..."
            {...register("password")}
            $hasError={!!errors.password}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <LoginButton type="submit" disabled={isSubmitting}>
          Entrar
        </LoginButton>
      </ContainerForm>
      <LinkSignUp to={"/auth/sign-up"}>Cadastre-se</LinkSignUp>
    </Container>
  );
}
