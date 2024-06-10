import { Outlet, useLocation } from "react-router-dom";
import {
  Container,
  ContainerChildren,
  ContainerHeader,
  LinkAuthPages,
} from "./styles";

export function AuthLayout() {
  const location = useLocation();

  const toLink = location.pathname === "/auth/sign-in" ? "sign-up" : "sign-in";

  return (
    <Container>
      <ContainerHeader>
        <span>ROTA PÚBLICA</span>
        <LinkAuthPages to={`/auth/${toLink}`}>
          {toLink === "sign-in" ? "Login" : "Cadastre-se"}
        </LinkAuthPages>
      </ContainerHeader>
      <ContainerChildren>
        <Outlet />
      </ContainerChildren>
    </Container>
  );
}
