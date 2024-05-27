import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  height: 4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 0.25rem;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.red};
  }
`;
