import { ButtonForm } from "@/components/button-form";
import { ButtonSwitch } from "@/components/button-switch";
import { InputForm } from "@/components/input-form";
import { AuthContext } from "@/contexts/auth-contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Container, ContainerForm, LinkSignIn } from "./styles";
import { toast } from "sonner";

const signUpSchema = z.object({
  username: z.string().min(4, "No mínimo 4 carácteres"),
  password: z.string().min(6, "No mínimo 6 carácteres"),
  isAdmin: z.boolean().default(false),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      isAdmin: false,
    },
  });

  const navigate = useNavigate();
  const { newUser } = useContext(AuthContext);

  async function handleSignUp(data: SignUpSchema) {
    try {
      await newUser(data.username, data.password, data.isAdmin);
      navigate("/");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <ContainerForm onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-input">
          <InputForm
            type="text"
            id="username"
            placeholder="informe seu usuário..."
            {...register("username")}
            hasError={!!errors.username}
            labelName="username"
            labelTitle="Usuário"
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="form-input">
          <InputForm
            type="password"
            id="password"
            placeholder="informe sua senha..."
            {...register("password")}
            hasError={!!errors.password}
            labelName="password"
            labelTitle="Senha"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <ButtonSwitch
          id="isAdmin"
          onCheckedChange={(checked) => setValue("isAdmin", checked)}
          {...register("isAdmin")}
          labelName="isAdmin"
          labelTitle="Permitir acesso administrador"
        />
        <ButtonForm type="submit" disabled={isSubmitting} title={"Cadastrar"} />
      </ContainerForm>
      <LinkSignIn to={"/auth/sign-in"}>Login</LinkSignIn>
    </Container>
  );
}
