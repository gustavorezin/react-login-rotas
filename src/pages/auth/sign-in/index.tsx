import { useContext } from "react";
import { Container, ContainerForm, Input, LoginButton } from "./styles";
import { AuthContext } from "../../../contexts/auth-contexts";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    await login();
    navigate("/");
  }

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm onSubmit={handleLogin}>
        <Input type="email" id="email" placeholder="E-mail" />
        <Input type="password" id="password" placeholder="Senha" />
        <LoginButton type="submit">Entrar</LoginButton>
      </ContainerForm>
    </Container>
  );
}
