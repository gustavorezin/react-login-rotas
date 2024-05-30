import styled from "styled-components";

const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
};

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem;

  h1 {
    text-align: center;
  }

  @media (min-width: ${breakpoints.medium}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
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
