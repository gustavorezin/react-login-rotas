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

  function handleSignInRedirect() {
    navigate("/auth/sign-in", { replace: true });
  }

  function handleLogout() {
    handleSignInRedirect();
    logout();
  }

  return (
    <Container>
      <span>ROTA PRIVADA</span>
      <SignOut onClick={handleLogout}>Sair</SignOut>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <ContainerNotAuthorizated>
          <h1>Sessão expirada</h1>
          <LinkGoBack onClick={handleSignInRedirect}>Fazer login</LinkGoBack>
        </ContainerNotAuthorizated>
      )}
    </Container>
  );
}
