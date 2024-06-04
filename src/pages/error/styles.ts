import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;

  h1 {
    text-align: center;
    font-size: 2rem;

    @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
      font-size: 4rem;
    }
  }
`;

export const LinkGoBack = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.red};
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
