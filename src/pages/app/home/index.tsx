import { ButtonLink } from "@/components/button-link";
import { Container, ContainerButtons } from "./styles";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-contexts";

export function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <h1>Olá, {user?.username}!</h1>
      <ContainerButtons>
        <ButtonLink title="Página pública" to={"/normal-page"} />
        <ButtonLink title="Página inexistente" to={"/mundial-do-palmeiras"} />
        <ButtonLink
          title="Página privada (administrador)"
          to={"/private-page"}
        />
      </ContainerButtons>
    </Container>
  );
}
