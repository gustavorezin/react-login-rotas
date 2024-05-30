import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-contexts";
import { Container, SignOut } from "./styles";

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
