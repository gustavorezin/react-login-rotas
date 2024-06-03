import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  gap: 2rem;

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

export const ContainerForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: ${breakpoints.small}) {
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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  height: 2.75rem;
  padding-inline: 0.5rem;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.text};

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 0.25rem;

  ${(props) =>
    props.$hasError &&
    css`
      border-color: ${(props) => props.theme.colors.red};
    `}
`;

export const LoginButton = styled.button`
  height: 4rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 1.125rem;

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 0.25rem;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.red};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.buttonBorder};
    cursor: not-allowed;
  }
`;

export const LinkSignUp = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.red};
`;
