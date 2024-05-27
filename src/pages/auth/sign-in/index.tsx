import { useContext } from "react";
import { Container, LoginButton } from "./styles";
import { AuthContext } from "../../../contexts/auth-contexts";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin() {
    await login();
    navigate("/");
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <LoginButton type="submit">Entrar</LoginButton>
      </form>
    </Container>
  );
}
