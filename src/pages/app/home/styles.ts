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

export const ContainerSwitch = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  label {
    cursor: pointer;
  }
`;

export const StyledSwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 42px;
  height: 25px;
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
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 100ms;
  transform: translate(-3px, -4px);

  &[data-state="checked"] {
    transform: translate(13px, -4px);
  }
`;
