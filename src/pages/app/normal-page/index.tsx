import { ButtonLink } from "@/components/button-link";
import { Container, ContainerButtons } from "./styles";

export function NormalPage() {
  return (
    <Container>
      <h1>Uma página normal 🤓</h1>
      <ContainerButtons>
        <ButtonLink title="Voltar" to={"/"} />
      </ContainerButtons>
    </Container>
  );
}
