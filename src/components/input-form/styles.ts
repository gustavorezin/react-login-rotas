import styled, { css } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  height: 2.75rem;
  padding-inline: 0.5rem;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.textPrimary};

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 0.25rem;

  ${(props) =>
    props.$hasError &&
    css`
      border-color: ${(props) => props.theme.colors.red};
    `}
`;
