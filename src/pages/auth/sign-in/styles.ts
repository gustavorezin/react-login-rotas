import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    position: relative;
    text-align: center;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors.red};
      transition: width 0.3s ease-in-out;
    }
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
