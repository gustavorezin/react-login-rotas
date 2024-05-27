import { Navigate, Outlet } from "react-router-dom";
import { Container } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth-contexts";

export function AppLayout() {
  const { isAuthenticated } = useContext(AuthContext);

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <Container>
      <span>ROTA PRIVADA</span>
      <Outlet />
    </Container>
  );
}
