import styled from "styled-components";

interface IconContainerProps {
  $typePage: "PÚBLICA" | "PRIVADA";
}

export const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$typePage === "PRIVADA"
      ? props.theme.colors.red
      : props.theme.colors.green};
`;

export const TextOnHover = styled.span`
  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    visibility: hidden;
  }
  position: absolute;
  left: calc(100% + 0.5rem);

  border-radius: 0.25rem;
  white-space: nowrap;
  transition: width 0.8s ease-in-out;
  width: 0px;
  overflow: hidden;

  ${IconContainer}:hover & {
    width: 124px;
  }
`;
