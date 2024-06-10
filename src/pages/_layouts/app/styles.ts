import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 1rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 1rem 4rem;
  }
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:nth-child(1) {
    color: ${(props) => props.theme.colors.red};
    font-weight: 700;
    width: 30%;
  }

  div {
    width: 30%;
    text-align: end;
    a {
      color: ${(props) => props.theme.colors.red};
      cursor: pointer;
    }
  }
`;

export const ContainerChildren = styled.div`
  flex: 1;
  padding-top: 3rem;
`;

export const ContainerSessionExpired = styled.div`
  flex: 1;
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

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
