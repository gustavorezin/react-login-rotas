import { AuthContext } from "@/contexts/auth-contexts";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerNotAuthorizated,
  LinkGoBack,
  SignOut,
} from "./styles";

export function AppLayout() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLoginRedirect() {
    navigate("/auth/sign-in", { replace: true });
  }

  return (
    <Container>
      <span>ROTA PRIVADA</span>
      <SignOut onClick={logout}>Sair</SignOut>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <ContainerNotAuthorizated>
          <h1>Sessão expirada</h1>
          <LinkGoBack onClick={handleLoginRedirect}>Fazer login</LinkGoBack>
        </ContainerNotAuthorizated>
      )}
    </Container>
  );
}
