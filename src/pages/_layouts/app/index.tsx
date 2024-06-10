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
  const { logout, user } = useContext(AuthContext);
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
      {user ? (
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
