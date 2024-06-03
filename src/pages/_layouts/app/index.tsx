import { AuthContext } from "@/contexts/auth-contexts";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerSessionExpired,
  LinkGoBack,
  SignOut,
} from "./styles";

export function AppLayout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("auth") === "true";

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
        <ContainerSessionExpired>
          <h1>Sessão expirada</h1>
          <LinkGoBack onClick={handleSignInRedirect}>Fazer login</LinkGoBack>
        </ContainerSessionExpired>
      )}
    </Container>
  );
}
