import * as Switch from "@radix-ui/react-switch";
import { ContainerSwitch, StyledSwitchRoot, StyledSwitchThumb } from "./styles";
import { forwardRef } from "react";

interface ButtonSwitchProps
  extends React.ComponentPropsWithoutRef<typeof Switch.Root> {
  labelName: string;
  labelTitle: string;
}

export const ButtonSwitch = forwardRef<HTMLButtonElement, ButtonSwitchProps>(
  ({ labelName, labelTitle, ...props }, ref) => {
    return (
      <ContainerSwitch>
        <StyledSwitchRoot {...props} ref={ref}>
          <StyledSwitchThumb />
        </StyledSwitchRoot>
        <label htmlFor={labelName}>{labelTitle}</label>
      </ContainerSwitch>
    );
  }
);
