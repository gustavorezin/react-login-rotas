import { z } from "zod";
import {
  Container,
  ContainerForm,
  ContainerSwitch,
  Input,
  LinkSignIn,
  LoginButton,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  username: z.string().min(4, "No mínimo 4 carácteres"),
  password: z.string().min(4, "No mínimo 6 carácteres"),
  isAdmin: z.boolean().default(false),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  async function handleSignUp(data: SignUpSchema) {
    console.log(data);
  }

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <ContainerForm onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-input">
          <label htmlFor="username">Usuário</label>
          <Input
            type="text"
            id="username"
            placeholder="informe seu usuário..."
            {...register("username")}
            hasError={!!errors.username}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="form-input">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="informe sua senha..."
            {...register("password")}
            hasError={!!errors.password}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <ContainerSwitch>
          <StyledSwitchRoot
            id="isAdmin"
            onCheckedChange={(checked) => setValue("isAdmin", checked)}
            {...register("isAdmin")}
          >
            <StyledSwitchThumb />
          </StyledSwitchRoot>
          <label htmlFor="isAdmin">Permitir acesso administrador</label>
        </ContainerSwitch>
        <LoginButton type="submit">Cadastrar</LoginButton>
      </ContainerForm>
      <LinkSignIn to={"/auth/sign-in"}>Login</LinkSignIn>
    </Container>
  );
}
