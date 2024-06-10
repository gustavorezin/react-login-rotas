import { ButtonLink } from "@/components/button-link";
import { Container, ContainerButtons } from "./styles";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-contexts";

export function PrivatePage() {
  const { user } = useContext(AuthContext);

  if (!user?.isAdmin) {
    throw new Error("Você não tem permissão para acessar esta página");
  }

  return (
    <Container>
      <h1>Uma página privada que você tem acesso 🧐</h1>
      <ContainerButtons>
        <ButtonLink title="Voltar" to={"/"} />
      </ContainerButtons>
    </Container>
  );
}
