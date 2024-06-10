import { AuthContext } from "@/contexts/auth-contexts";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerChildren,
  ContainerHeader,
  ContainerSessionExpired,
  LinkGoBack,
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
      <ContainerHeader>
        <span>ROTA PRIVADA</span>
        <span>{user?.isAdmin ? "ADMINISTRADOR" : "USUÁRIO COMUM"}</span>
        <div>
          <a onClick={handleLogout}>Sair</a>
        </div>
      </ContainerHeader>
      {user ? (
        <ContainerChildren>
          <Outlet />
        </ContainerChildren>
      ) : (
        <ContainerSessionExpired>
          <h1>Sessão expirada</h1>
          <LinkGoBack onClick={handleSignInRedirect}>Fazer login</LinkGoBack>
        </ContainerSessionExpired>
      )}
    </Container>
  );
}
