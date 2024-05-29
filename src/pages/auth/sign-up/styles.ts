import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Switch from "@radix-ui/react-switch";

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
`;

export const Input = styled.input`
  height: 2.75rem;
  padding-inline: 0.5rem;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.text};

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 0.25rem;
`;

export const ContainerSwitch = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  label {
    cursor: pointer;
  }
`;

export const StyledSwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 38px;
  height: 20px;
  background-color: #ccc;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &[data-state="checked"] {
    background-color: #4caf50; /* Cor quando o switch está ativado */
  }
`;

export const StyledSwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 17px;
  height: 17px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 100ms;
  transform: translate(-3px, -5px);

  &[data-state="checked"] {
    transform: translate(12px, -5px);
  }
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
`;

export const LinkSignIn = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.red};
`;
