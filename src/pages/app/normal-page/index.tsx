import { ButtonLink } from "@/components/button-link";
import { Container, ContainerButtons } from "./styles";
import { Helmet } from "react-helmet-async";

export function NormalPage() {
  return (
    <>
      <Helmet title="Normal" />
      <Container>
        <h1>Uma página normal 🤓</h1>
        <ContainerButtons>
          <ButtonLink title="Voltar" to={"/"} />
        </ContainerButtons>
      </Container>
    </>
  );
}
