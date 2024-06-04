import * as Switch from "@radix-ui/react-switch";
import styled from "styled-components";

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
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 100ms;
  transform: translate(2px, 0px);

  &[data-state="checked"] {
    transform: translate(20px, 0px);
  }
`;
