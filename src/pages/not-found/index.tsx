import { Helmet } from "react-helmet-async";
import { Container, LinkGoBack } from "./styles";

export function NotFound() {
  return (
    <>
      <Helmet title="Não encontrado" />
      <Container>
        <h1>Página não encontrada</h1>
        <LinkGoBack href="/">Voltar para o início</LinkGoBack>
      </Container>
    </>
  );
}
