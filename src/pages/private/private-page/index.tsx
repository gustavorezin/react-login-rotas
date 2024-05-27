import { useContext } from "react";
import { ButtonLink } from "../../../components/button-link";
import { Container, ContainerButtons } from "./styles";
import { AuthContext } from "../../../contexts/auth-contexts";

export function PrivatePage() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    throw new Error("Você não tem permissão para acessar esta página");
  }

  return (
    <Container>
      <h1>Uma página privada 🧐</h1>
      <ContainerButtons>
        <ButtonLink title="Voltar" to={"/"} />
      </ContainerButtons>
    </Container>
  );
}
