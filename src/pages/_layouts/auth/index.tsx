import { Outlet } from "react-router-dom";
import { Container } from "./styles";

export function AuthLayout() {
  return (
    <Container>
      <span id="aviso-rota">ROTA PÚBLICA</span>
      <Outlet />
    </Container>
  );
}
