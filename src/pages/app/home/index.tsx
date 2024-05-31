import { ButtonLink } from "@/components/button-link";
import { Container, ContainerButtons } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Praticando React</h1>
      <ContainerButtons>
        <ButtonLink title="Página pública" to={"/normal-page"} />
        <ButtonLink title="Página inexistente" to={"/mundial-do-palmeiras"} />
        <ButtonLink title="Página privada (administrador)" to={"/private"} />
      </ContainerButtons>
    </Container>
  );
}
