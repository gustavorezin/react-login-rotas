import styled from "styled-components";

export const Button = styled.button`
  height: 4rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.textPrimary};
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
