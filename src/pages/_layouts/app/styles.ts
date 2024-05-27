import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 6px;
    left: 6px;
    color: ${(props) => props.theme.colors.red};
    font-weight: 700;
  }
`;
