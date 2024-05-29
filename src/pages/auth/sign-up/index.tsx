import { useContext } from "react";
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
import { AuthContext } from "../../../contexts/auth-contexts";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    await login();
    navigate("/");
  }

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <ContainerForm onSubmit={handleLogin}>
        <Input type="email" id="email" placeholder="E-mail" />
        <Input type="password" id="password" placeholder="Senha" />
        <ContainerSwitch>
          <StyledSwitchRoot
            id="s1"
            checked={true}
            /* onCheckedChange={(checked) => (checked ? login() : logout())} */
          >
            <StyledSwitchThumb />
          </StyledSwitchRoot>
          <label htmlFor="s1">Permitir acesso administrador</label>
        </ContainerSwitch>
        <LoginButton type="submit">Cadastrar</LoginButton>
      </ContainerForm>
      <LinkSignIn to={"/auth/sign-in"}>Login</LinkSignIn>
    </Container>
  );
}
