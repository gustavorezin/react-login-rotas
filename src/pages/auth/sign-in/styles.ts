import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem;
  gap: 2rem;

  h1 {
    text-align: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 5rem 4rem;
  }
`;

export const ContainerForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    width: 32rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      color: ${(props) => props.theme.colors.red};
      font-size: 0.75rem;
    }
  }
`;

export const LinkSignUp = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.red};
`;
