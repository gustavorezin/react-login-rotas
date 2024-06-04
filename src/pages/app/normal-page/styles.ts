import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem;

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

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  gap: 1rem;
`;
