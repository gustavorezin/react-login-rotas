import { useRouteError } from "react-router-dom";
import { Container, LinkGoBack } from "./styles";

export function Error() {
  const error = useRouteError() as Error;

  return (
    <Container>
      <h1>Whoops, algo aconteceu...</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <LinkGoBack href="/">Voltar para o início</LinkGoBack>
    </Container>
  );
}
