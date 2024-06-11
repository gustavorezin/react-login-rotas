import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 2px solid;
  border-left-color: ${(props) => props.theme.colors.red};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: ${spin} 1s linear infinite;
`;
