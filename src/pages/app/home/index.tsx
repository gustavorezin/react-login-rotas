import { useContext } from "react";
import { ButtonLink } from "../../../components/button-link";
import { AuthContext } from "../../../contexts/auth-contexts";
import {
  Container,
  ContainerButtons,
  ContainerSwitch,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from "./styles";

export function Home() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <Container>
      <h1>Praticando react-router-dom</h1>
      <ContainerButtons>
        <ButtonLink title="Página pública" to={"/normal-page"} />
        <ButtonLink title="Página inexistente" to={"/mundial-do-palmeiras"} />
        <ButtonLink title="Página privada" to={"/private"} />
        <ContainerSwitch>
          <StyledSwitchRoot
            id="s1"
            checked={isAuthenticated}
            onCheckedChange={(checked) => (checked ? login() : logout())}
          >
            <StyledSwitchThumb />
          </StyledSwitchRoot>
          <label htmlFor="s1">Permitir acesso a página privada</label>
        </ContainerSwitch>
      </ContainerButtons>
    </Container>
  );
}
