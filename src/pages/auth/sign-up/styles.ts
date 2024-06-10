import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    text-align: center;
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

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      color: ${(props) => props.theme.colors.red};
      font-size: 0.75rem;
    }
  }
`;
