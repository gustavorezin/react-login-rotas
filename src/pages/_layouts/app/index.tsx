import { Navigate, Outlet } from "react-router-dom";
import { Container, SignOut } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth-contexts";

export function AppLayout() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <Container>
      <span>ROTA PRIVADA</span>
      <SignOut onClick={logout}>Sair</SignOut>
      <Outlet />
    </Container>
  );
}
