import { Container, LinkGoBack } from "./styles";

export function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <LinkGoBack href="/">Voltar para o início</LinkGoBack>
    </Container>
  );
}
